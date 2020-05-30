module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("orders", {
        item: DataTypes.STRING,
        cart: DataTypes.BOOLEAN
});

return Orders;
}