var express = require("express");
var router = express.Router();

//importing item model 
var item = require("../models/user.js");

//creating routes
router.get("/", function(req, res) {
    item.all(function(data) {
        var hbsObject = {
        item: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); // rendering at handle bars.
    });
});

router.post ("api/items", function(req, res) {
item.create ([
    "item", "cart"
], [
   req.body.item, req.body.cart 
], function (result) {
    res.json ({id: result.insertID });
});
});


router.put ("api/items/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log ("condition", condition);

item.update ({
    cart: req.body.cart
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