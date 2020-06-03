module.exports = function(sequelize, DataTypes) {
    const SaleItems = sequelize.define("saleItems", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }

    })
  
    SaleItems.associate = models => {
        SaleItems.hasMany(models.items)
    }

  SaleItems.sync();

  return SaleItems
}