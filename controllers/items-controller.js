var express = require("express");
var router = express.Router();

//importing Items model 
var Items = require("../models/items");

//creating routes

//Getting all entries from the items table
router.get("/api/items", function(req, res) {
    Items.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the items table
router.post ("/api/items", function(req, res) {
    console.log("hi")
});

// exporting routes to server.js
module.exports = router;
