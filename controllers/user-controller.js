var express = require("express");
var router = express.Router();

//importing User model 
var {user: User} = require("../models/index");

//creating routes

//Getting all entries from the user table
router.get("/api/user", function(req, res) {
    User.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the user table
router.post ("/api/user", function(req, res) {
    var user = req.body;
    console.log(user)

    User.create({
        name: user.name,
        price: user.price
    });
  
      res.status(204).end();
});

// exporting routes to server.js
module.exports = router;