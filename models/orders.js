module.exports = function(sequelize, DataTypes) {
    var Orders = sequelize.define("orders", {
        order_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Orders.associate = models => {
        Orders.belongsTo(models.users, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        })
    }

    Orders.associate = models => {
        Orders.hasMany(models.items, {
            onDelete: "cascade"
        })
    }

    Orders.sync();

    return Orders;
}