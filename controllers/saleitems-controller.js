var express = require("express");
var router = express.Router();

//importing SaleItem model 
var {saleItems: SaleItems} = require("../models/index");
var {items: Items} = require("../models/index");
//creating routes

//Getting all entries from the saleitems table
router.get("/api/saleItems", function(req, res) {
    SaleItems.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the saleitems table
router.post ("/api/saleItems/:id", function(req, res) {
    let saleItems = req.params.id;
    //need to add this to the items and associate it with the current order
    SaleItems.findOne({
        where: {
            id : saleItems
        }
    }).then(function (result) {
        console.log(result.dataValues.name);
        Items.create({
            orderId: 11,
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

// router.delete("/api/saleitems/:id", async (req, res, next) => {
//     let saleItems = req.params.id;
//     Items.destroy({
//         where: {
//             id: saleItems,
//         }
//     });

//     res.status(204).end();
// })

// exporting routes to server.js
module.exports = router;