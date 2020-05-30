var express = require("express");
var router = express.Router();

//importing SaleItem model 
var {items_for_sale: SaleItem} = require("../models/index");

//creating routes

//Getting all entries from the saleitems table
router.get("/api/saleitems", function(req, res) {
    SaleItem.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the saleitems table
router.post ("/api/saleitems", function(req, res) {
    var saleItem = req.body;

    SaleItem.create({
        name: saleItem.name,
        price: saleItem.price
      });
  
      res.status(204).end();
});

// exporting routes to server.js
module.exports = router;