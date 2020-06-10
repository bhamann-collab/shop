const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/middleware/isAuthenticated');

console.log(ensureAuthenticated)

//Required dependencies.
let db = require("../models")
let myData = {}

console.log(db.users)

module.exports = function (app) {
    app.get("/", async function (req, res) {
        if (req.user) {
            myData.itemsForSale = await db.saleItems.findAll()

            myData.user = await db.users.findAll({
                //Test case, using user id: 2 for now
                where: {id: req.user.id },
                include: [{
                    model: db.orders,
                    //Test case, using user id: 1 for now
                    where: {id: 11},
                    include: [{
                        model: db.items,
                        where: {},
                        include: [{
                            model: db.saleItems,
                            where:{}
                        }]
                    }]
                }]
            })
        } else {
            myData.itemsForSale = await db.saleItems.findAll()

            myData.user = await db.users.findAll({
                //Test case, using user id: 2 for now
                where: {id: 2 },
                include: [{
                    model: db.orders,
                    //Test case, using user id: 11 for now
                    where: {id: 11},
                    include: [{
                    model: db.items,
                    where: {},
                    include: [{
                        model: db.saleItems,
                        where:{}
                    }]
                }]
            }]
        })
    }
        //two pieces of data to be sent to the root file
        console.log(myData)
        res.render("index", myData);
    });
};
        
       

        

// router.get('/', ensureAuthenticated, (req, res) =>
//   res.render('index', {
//     user: req.user
//   })
// );

// module.exports = router;