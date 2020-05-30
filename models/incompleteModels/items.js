//reference the standard library
const Sequelize = require("sequelize")

const sequelize = require("../config/connection.js")

const Items = sequelize.define("items", {
    // sale_itemsId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: items_for_sale,
    //         key: id
    //     }
    //}
})

Items.sync();

module.exports = Items;