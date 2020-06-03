//Controllers handle the behaviour between user input and program actions. In this case it is referring user routes to database queries using the burger model.

//Required dependencies.
let db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {//the home route
        res.render("index", db); //sends object to handlebars for display (conversion was required as handlebars can only handle (heh) objects)
    });
};


