var express = require("express");
var router = express.Router();

//importing items model 
var items = require("../models/items.js");

//creating routes
router.get("/", function(req, res) {
    items.all(function(data) {
        var hbsObject = {
        item: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // rendering at handle bars.
    });
});

router.post ("api/items", function(req, res) {
items.create ([
    "items"
], [
   req.body.items
], function (result) {
    res.json ({id: result.insertID });
});
});

//posting a new entry in the items table
router.post ("/api/items", function(req, res) {
    var items = req.body;

    Items.create({
        orderId: items.orderId,
        saleItemId: items.saleItemId
    })

    console.log ("condition", condition);


router.delete("/api/items/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  items.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

items.update ({
    items: req.body.items
}, condition, function(result) {
    if (result.changedRows == 0) {
        return res.status (404).end();
    } else {
        res.status(200).end();
    }
});
});

// exporting routes to server.js
module.exports = router;