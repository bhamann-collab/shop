// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
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

//Sets up handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
app.set("view engine", "handlebars");

//Testing handlebars
app.get("/", function(req, res) {
  res.render("index", {
    foods: "lunches",
    eater: "david"
  });
});


// Routes
// =============================================================
app.use(require('./controllers/user-controller'))
app.use(require('./controllers/orders-controller'))
app.use(require('./controllers/saleitems-controller'))
app.use(require('./controllers/items-controller'))
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


