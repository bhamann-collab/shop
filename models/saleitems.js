var express = require("express");
var router = express.Router();

var shop = require("../models/saleitems.js");

// get
router.get("/", function(req, res) {
    shop.all(function(data) {
      var hbsObject = {
        shop: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  //post 
  router.post("/api/shop", function(req, res) {
    shop.create([
      "Yellow Shoes", "Green Shoes"
    ], [
      req.body.yellow, req.body.green
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  //put 
  router.put("/api/shop/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    shop.update({
      yellow: req.body.green
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


  module.exports = router;
