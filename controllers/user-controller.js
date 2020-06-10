const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
let db = require("../models");

//Load User model 
// var {users: Users} = require("../models/index");
// const forwardAuthenticated = require('../config/middleware/isAuthenticated');

// Login Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('/'));

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
    let orderCode = `${userData.id}${Math.floor(Math.random() * 10000000)}`;
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
      console.log("redirecting yes???");
    res.redirect(307, "/api/users");
    }).catch(console.log(err));
    
  }).catch(function (err) {
   // res.status(401).json(err);
  });
});

module.exports = router;


// //creating routes

// // CREATING ACCOUNT.
// //Getting all entries from the user table
// ("/api/users", function(req, res) {
//     res.render('login');
// });

// //posting a new entry in the user table
// router.post("/api/users", function(req, res) {
// var name = req.body.name;
// var lastName = req.body.lastName;
// var email = req.body.email;
// var password = req.body.password;
//     console.log(Users);
//     console.log(name);
//         });

// // validation 
// req.checkBody('name', 'Name is required').notEmpty();
// req.checkBody('lastName', 'Last Name is required').notEmpty();
// req.checkBody('email', 'Email is required').isEmail();
// req.checkBody('password', 'Password is required').notEmpty();


// var errors = req.validationErrors();

// if (errors){
//     res.render('/api/users', {
//         errors:errorss
//  });

// }else {
//     const newUser = new User({
//         name: name, 
//         lastName: lastName,
//         email: email,
//         password: password
//     })
//     Users.createUser(newUser, function(err, user){
//         if(err) throw err;
//         console.log(user);
//     });
//     req.flash('success_msq', 'You are registered and can now login');
//     res.redirect('/users/login');
// }


// //deleting an entry in the user table
// router.delete("/api/users/:id", async (req, res, next) => {
//     let users = req.params.id;
//     await Users.destroy({
//         where: {
//             id: users,
//         }
//     })

//     res.status(204).end();
// })


// //LOGIN IN 
// passport.use(new LocalStrategy(
//     function(username, password, done) {
//     User.getUserByUsername(username, function(err, user){
// if (err) throw err;
// if (!user) {
//     return done(null, false, {message: 'Unknown User'});
// }
//     User.comparePassword(password, user.password, function(err, isMatch){
//         if (err) throw err;
//         if (isMatch){
//             return done (null, user);
//         } else {
//             return done (null, false, {message: 'Invalid password'});
//         }
//         });
//     });  
// }));

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done){
//     User.getUserById(id, function(err, user){
//         done(err, user);
//     });
// });