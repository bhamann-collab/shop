module.exports = function(sequelize, DataTypes) {
    const Items = sequelize.define("items", {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        saleItemId: {
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
            foreignKey: "saleItemId"
        })
    }

    Items.sync();

    return Items
}


