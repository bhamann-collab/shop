var express = require("express");
var router = express.Router();

//importing SaleItem model 
var {saleItems: SaleItems} = require("../models/index");

//creating routes

//Getting all entries from the saleitems table
router.get("/api/saleItems", function(req, res) {
    SaleItems.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the saleitems table
router.post ("/api/saleItems", function(req, res) {
    var saleItems = req.body;
    console.log(saleItems)

    SaleItems.create({
        name: saleItems.name,
        price: saleItems.price
    });
  
      res.status(204).end();
});

router.delete("/api/saleitems/:id", async (req, res, next) => {
    let saleItems = req.params.id;
    await SaleItems.destroy({
        where: {
            id: saleItems,
        }
    })

    res.status(204).end();
})

// exporting routes to server.js
module.exports = router;