var express = require("express");
var router = express.Router();

//importing item model 
var Item = require("../models/saleitems.js");

//creating routes

//Getting all entries from the saleitems table
router.get("/api/saleitems", function(req, res) {
    Item.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the saleitems table
router.post ("/api/saleitems", function(req, res) {
    var item = req.body;

    Item.create({
        name: item.name,
        price: item.price
      });
  
      res.status(204).end();
});

// exporting routes to server.js
module.exports = router;