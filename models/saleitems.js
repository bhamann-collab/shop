module.exports = function(sequelize, DataTypes) {
    var SaleItems = sequelize.define("saleItems", {
        item: DataTypes.STRING,
        cart: DataTypes.BOOLEAN
  });
  
  return SaleItems;
  }