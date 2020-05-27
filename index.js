var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "shop_DB",
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;

  start();
});

function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like an [ITEM] or go to [ORDERS]?",
      choices: ["ITEM", "ORDERS", "EXIT"],
    })
    .then(function (answer) {
      if (answer.orderOrItem === "item") {
        postAuction();
      } else if (answer.orderOrItem === "orders") {
        bidAuction();
      } else {
        connection.end();
      }
    });
}

function postAuction() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item you would like to submit?",
      },
      {
        name: "orders",
        type: "input",
        message: "",
      },
      {
        name: "",
        type: "input",
        message: "",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO orders SET ?",
        {
          item_name: answer.item,
          orders: answer.orders,
        },
        function (err) {
          if (err) throw err;
          console.log("Your order was created successfully!");

          start();
        }
      );
    });
}

function bidAuction() {
  connection.query("SELECT * items", function (err, results) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "",
        },
        {
          name: "",
          type: "input",
          message: "",
        },
      ])
      .then(function (answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        if (chosenItem.item < parseInt(answer.item)) {
          connection.query(
            "UPDATE SET ? WHERE ?",
            [
              {
                item: answer.item,
              },
              {
                id: chosenItem.id,
              },
            ],
            function (error) {
              if (error) throw err;
              console.log();
              start();
            }
          );
        } else {
          console.log();
          start();
        }
      });
  });
}
