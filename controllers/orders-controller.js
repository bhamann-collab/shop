var express = require("express");
var router = express.Router();

//importing item model 
var {orders: Orders} = require("../models/index");

//creating routes

//Getting all entries from the items table
router.get("/api/orders", function(req, res) {
    Orders.findAll().then(function(result) {
        return res.json(result)
    })
})

router.post("/api/orders", function(req,res) {
    var orders = req.body;

    Orders.create({
        order_code: orders.order_code,
        userId: orders.userId
    })

    res.status(204).end();
})

router.delete("/api/orders/:id", async (req, res, next) => {
    let orders = req.params.id;
    await Orders.destroy({
        where: {
            id: orders,
        }
    })

    res.status(204).end();
})

// exporting routes to server.js
module.exports = router;