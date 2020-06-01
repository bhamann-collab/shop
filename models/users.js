module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
        allowNull: false
        }
    })
  
    Users.associate = models => {
        Users.hasMany(models.orders, {
            onDelete: "cascade"
        })
    }
    Users.sync();
    return Users
}