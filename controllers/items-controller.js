var express = require("express");
var router = express.Router();

//importing Items model 
var {items: Items} = require("../models/index");

//creating routes

//Getting all entries from the items table
router.get("/api/items", function(req, res) {
    Items.findAll().then(function(result) {
        return res.json(result)
    })
})

//posting a new entry in the items table
router.post ("/api/items", function(req, res) {
    var items = req.body;

    Items.create({
        orderId: items.orderId,
        saleItemId: items.saleItemId
    })

    res.status(204).end();
});

// exporting routes to server.js
module.exports = router;
