const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/middleware/isAuthenticated');


//Required dependencies.
let db = require("../models")
let myData = {}
let currentOrder = 0;
console.log(db.users)
var { saleItems: SaleItems } = require("../models/index");
var { items: Items } = require("../models/index");

module.exports = function (app) {
    app.get("/logout", function (req, res) {//Logs out from the current passport session
        req.logout();
        res.redirect("/");
    });

    app.get("/", async function (req, res) {
        if (req.user) {//Determines if the home page is being called with a logged in user or without
            myData.itemsForSale = await db.saleItems.findAll()//Populates myData object to be given to handlebars
            let orderData = await db.orders.findOne({
                where: { userId: req.user.id }
            });
            currentOrder = orderData.id;
            myData.user = await db.users.findAll({//Populates myData object to be given to handlebars
                //Test case, using user id: 2 for now
                where: { id: req.user.id }
                ,
                include: [{
                    model: db.orders,
                    //Test case, using user id: 1 for now
                    where: { id: orderData.id }
                    ,
                    include: [{
                        model: db.items,
                        where: {},
                        include: [{
                            model: db.saleItems,
                            where: {}
                        }]
                    }]
                }]
            })

        } else {
            myData.itemsForSale = await db.saleItems.findAll()

            myData.user = await db.users.findAll({
                //If the user is not logged in it passes an invalid argument into the query -2
                where: { id: -2 },
                include: [{
                    model: db.orders,
                    where: { id: 11 },
                    include: [{
                        model: db.items,
                        where: {},
                        include: [{
                            model: db.saleItems,
                            where: {}
                        }]
                    }]
                }]
            })
        }
        res.render("index", myData);
    });
    //posting a new entry in the saleitems table
    app.post("/api/saleItems/:id", async function (req, res) {
        let saleItems = req.params.id;
        //adds item to the cart and associates it with the current order
        db.saleItems.findOne({
            where: {
                id: saleItems
            }
        }).then(function (result) {
            db.items.create({
                orderId: currentOrder,
                saleItemId: result.dataValues.id
            });
            res.status(204).end();
        });
       
    });
};

