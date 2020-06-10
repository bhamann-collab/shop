const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
let db = require("../models");

router.post('/api/users', passport.authenticate("local"), function (req, res) {//when route called it uses the passport.authenticate middleware before running the callback function
  res.json(req.user);//returns the user from the authenticate function
});


router.post('/api/signup', function (req, res) {//when route called it uses the passport.authenticate middleware before running the callback function
  console.log("Adding New User");
  db.users.create({
    name: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,
    password: req.body.password
  }).then(async function () {
    let userData = await db.users.findOne({
      where: { email: req.body.email }
    });
    let orderCode = `${userData.id}${Math.floor(Math.random() * 10000000)}`;//generates a random order code
    db.orders.create({
      order_code: orderCode,
      userId: userData.id
    }).then(async function () {
      let orderNum = await db.orders.findOne({
        where: { order_code: orderCode }
      });
      db.items.create({
        orderId: orderNum.id,
        saleItemId: 1
      });
    res.redirect(307, "/api/users");//once user created it logs in
    }).catch(console.log(err));
    
  }).catch(function (err) {
   // res.status(401).json(err);
  });
});

module.exports = router;

