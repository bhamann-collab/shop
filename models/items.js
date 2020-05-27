module.exports = function(sequelize, DataTypes) {
    var Items = sequelize.define("items", {
        item: DataTypes.STRING,
        cart: DataTypes.BOOLEAN
});

return Items;
}