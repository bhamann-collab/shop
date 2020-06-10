// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
let session = require("express-session"); //Imports express session package
let passport = require("./config/passport"); //Imports the passport script

var express = require("express");
require("dotenv").config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//let db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served`
app.use(express.static("./public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));//creates a login session and stores the state in a cookie
app.use(passport.initialize());
app.use(passport.session());

//Sets up handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars",
    helpers: {
        //Custom helper to show the total price of the order
        getTotal: function (shoes){
            let total = shoes.reduce(function(a, b) { return a + b.dataValues.saleItem.dataValues.price; }, 0)
            return total
        }
    }
}));
app.set("view engine", "handlebars");


// Routes
// =============================================================
app.use(require('./controllers/user-controller'))
app.use(require('./controllers/orders-controller'))
app.use(require('./controllers/saleitems-controller'))
app.use(require('./controllers/items-controller'))
require('./controllers/html-controller')(app)
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


