var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
        allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
        allowNull: false
        },

        email: {
            type: DataTypes.STRING,
        allowNull: false
        },

        password: {
            type: DataTypes.STRING,
        allowNull: false
        }
    })
        
    
    Users.associate = models => {
        Users.hasMany(models.orders, {
            onDelete: "cascade"
        })
    }
    //checks if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };

    //   before a User is created, their password will be automatically hash their password
    Users.addHook("beforeCreate", function(users) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });

    Users.sync();
    return Users
}

