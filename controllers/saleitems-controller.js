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