module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        item: DataTypes.STRING,
        cart: DataTypes.BOOLEAN
});

return Users;
}