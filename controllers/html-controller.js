//Controllers handle the behaviour between user input and program actions. In this case it is referring user routes to database queries using the burger model.

//Required dependencies.
let db = require("../models");

console.log(db.users)

module.exports = function (app) {
    app.get("/", function (req, res) {

        //two pieces of data to be sent to the root file

        
        db.saleItems.findAll().then((result) => {

            //console.log({result})

             //sends object to handlebars for display (conversion was required as handlebars can only handle objects)
            //res.render("index", {itemsForSale: result});
        })

        db.users.findAll({
            //Test case, using user id: 2 for now
            where: {id: 2 },
            include: [{
                model: db.orders,
                //Test case, using user id: 1 for now
                where: {id: 11},
                include: [{
                    model: db.items,
                    where: {},
                    include: [{
                        model: db.saleItems,
                        where:{}
                    }]
                }]
            }]
        }).then((result) => {
            res.render("index", {user: result});
        })
    });
};


