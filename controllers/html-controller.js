const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/middleware/isAuthenticated');


//Required dependencies.
let db = require("../models")
let myData = {}
let currentOrder = 0;
console.log(db.users)
var {saleItems: SaleItems} = require("../models/index");
var {items: Items} = require("../models/index");
//I THINK THIS NEEDS TO ASK FOR A NEW ADDRESS ONCE LOGGED IN
module.exports = function (app) {
    app.get("/logout", function(req, res){
        req.logout();
        res.redirect("/");
      });
      
    app.get("/", async function (req, res) {
        //console.log("THE REQ IS "+req.user.id)//all seems to be working apart from the login sending the req details to this new page call
if (req.user) {
    myData.itemsForSale = await db.saleItems.findAll()
console.log("Trying to log in"+req.user.id+"<<<");
let orderData = await db.orders.findOne({
    where: {userId: req.user.id}
});
currentOrder = orderData.id;
    myData.user = await db.users.findAll({
        //Test case, using user id: 2 for now
        where: {id: req.user.id }
        ,
        include: [{
            model: db.orders,
            //Test case, using user id: 1 for now
            where: {id: orderData.id}
            ,
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
        where: {id: -2 },
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
    //console.log(myData.user[0].dataValues.orders[0].items.length);
}
        //two pieces of data to be sent to the root file
        
       

        
        res.render("index", myData);
    });
    //posting a new entry in the saleitems table
app.post ("/api/saleItems/:id", async function(req, res) {
    let saleItems = req.params.id;
    //need to add this to the items and associate it with the current order
    db.saleItems.findOne({
        where: {
            id : saleItems
        }
    }).then(function (result) {
        console.log(result.dataValues.name);
        db.items.create({
            orderId: currentOrder,
            saleItemId: result.dataValues.id
        });
        res.status(204).end();
    });
    // console.log(saleItems)

    // SaleItems.create({
    //     name: saleItems.name,
    //     price: saleItems.price
    // });
  
    //   res.status(204).end();
});
};




// router.get('/', ensureAuthenticated, (req, res) =>
//   res.render('index', {
//     user: req.user
//   })
// );

// module.exports = router;


