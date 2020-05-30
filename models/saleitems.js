//references the standard library
const Sequelize = require("sequelize")

const sequelize = require("../config/connection.js")

const SaleItems = sequelize.define("items_for_sale", {
  name: Sequelize.STRING,
  price: Sequelize.DOUBLE,
})


SaleItems.sync();



module.exports = SaleItems;


