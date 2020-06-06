var express = require("express");
var router = express.Router();

//importing User model 
var {users: Users} = require("../models/index");

//creating routes

// CREATING ACCOUNT.
//Getting all entries from the user table
("/api/users", function(req, res) {
    res.render('login');
});

//posting a new entry in the user table
router.post("/api/users", function(req, res) {
var name = req.body.name;
var lastName = req.body.lastName;
var email = req.body.email;
var password = req.body.password;
    console.log(Users);
    console.log(name);
        });

// validation 
req.checkBody('name', 'Name is required').notEmpty();
req.checkBody('lastName', 'Last Name is required').notEmpty();
req.checkBody('email', 'Email is required').isEmail();
req.checkBody('password', 'Password is required').notEmpty();


var errors = req.validationErrors();

if (errors){
    res.render('/api/users', {
        errors:errorss
 });

}else {
    const newUser = new User({
        name: name, 
        lastName: lastName,
        email: email,
        password: password
    })
    Users.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log(user);
    });
    req.flash('success_msq', 'You are registered and can now login');
    res.redirect('/users/login');
}


//deleting an entry in the user table
router.delete("/api/users/:id", async (req, res, next) => {
    let users = req.params.id;
    await Users.destroy({
        where: {
            id: users,
        }
    })

    res.status(204).end();
})


//LOGIN IN 
passport.use(new LocalStrategy(
    function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
if (err) throw err;
if (!user) {
    return done(null, false, {message: 'Unknown User'});
}
    User.comparePassword(password, user.password, function(err, isMatch){
        if (err) throw err;
        if (isMatch){
            return done (null, user);
        } else {
            return done (null, false, {message: 'Invalid password'});
        }
        });
    });  
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.getUserById(id, function(err, user){
        done(err, user);
    });
});


router.post('/login',
    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/user/login', failureFlash: true }),
        function (req, res) {
          res.redirect ('/');
        });

// exporting routes to server.js
module.exports = router;