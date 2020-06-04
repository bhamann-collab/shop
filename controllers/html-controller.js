//Controllers handle the behaviour between user input and program actions. In this case it is referring user routes to database queries using the burger model.

//Required dependencies.
let {saleItems} = require("../models");

console.log(saleItems)

module.exports = function (app) {
    app.get("/", function (req, res) {//the home route
        saleItems.findAll().then((result) => {

            console.log(result)

             //sends object to handlebars for display (conversion was required as handlebars can only handle objects)
            res.render("index", {data: result});
        })
    });
};


