module.exports = function(sequelize, DataTypes) {
    const Items = sequelize.define("items", {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        saleItemsId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })

    Items.associate = models => {
        Items.belongsTo(models.orders, {
            foreignKey: "orderId"
        })
    }

    Items.associate = models => {
        Items.belongsTo(models.saleItems, {
            foreignKey: "saleItemsId"
        })
    }

    Items.sync();

    return Items
}


