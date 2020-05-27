// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served`
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// // Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//----------------BELOW IS A TEST TO ENSURE ENV VARS ARE WORKING AND CONNECTION TO DB CAN BE ESTABLISHED----------------------------

// // // Dependencies
// var Sequelize = require("sequelize");
// console.log(`DB Name - ${process.env.DBNAME} DB User - ${process.env.DBUSERNAME} DB Password - ${process.env.DBPASSWORD} DB Host - ${process.env.DBHOST}`);


// // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
//   host: process.env.DBHOST,
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
// authSQL();
// async function authSQL () {
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// }

// // // Exports the connection for other files to use
// // module.exports = sequelize;
