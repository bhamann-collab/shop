module.exports = function(sequelize, DataTypes) {
  var SaleItems = sequelize.define("items_for_sale", {
      item: DataTypes.STRING,
      cart: DataTypes.BOOLEAN
});

return SaleItems;
}
