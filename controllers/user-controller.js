var express = require("express");
var router = express.Router();

//importing SaleItem model 
var {users: Users} = require("../models/index");

//creating routes

//Getting all entries from the saleitems table
router.get("/api/users", function(req, res) {
    Users.findAll().then(function(result) {
        return res.json(result)
    })
});

//posting a new entry in the saleitems table
router.post ("/api/users", function(req, res) {
    var users = req.body;

    Users.create({
        name: users.name
      });
  
      res.status(204).end();
});

// exporting routes to server.js
module.exports = router;