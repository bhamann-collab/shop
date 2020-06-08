var bcrypt = require("bcryptjs");
let passport = require("../config/passport.js");


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

// checks if an unhashed password entered by the user can be compared to the hashed password stored in our database
Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
// before a User is created, their password will be automatically hash their password
    Users.addHook("beforeCreate", function(users) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });
        Users.associate = models => {
        Users.hasMany(models.orders, {
            onDelete: "cascade"
        })
    }

return Users;
};


    //     module.exports.createUser = function(newUser, callback) {
//         bcrypt.genSalt(saltRounds, function(err, salt) {
//             bcrypt.hash(newUser.password, salt, function(err, hash) {
//                 // Store hash in your password DB.
//                 newUser.passowrd = hash;
//                 newUser.save(callback);
//             });
//         });
//     }

//     Users.associate = models => {
//         Users.hasMany(models.orders, {
//             onDelete: "cascade"
//         })
//     }
//     //checks if an unhashed password entered by the user can be compared to the hashed password stored in our database
//     Users.prototype.validPassword = function(password) {
//         return bcrypt.compareSync(password, this.password);
//       };

//     //   before a User is created, their password will be automatically hash their password
//     Users.addHook("beforeCreate", function(users) {
//     users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
//     });

//     Users.sync();
//     return Users
// }



//LOGIN 
// module.exports.getUserByUsername = function (username, callback) {
//     var query = {username: usernmae};
//     User.findOne(query, callback);
// }

// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }

// module.exports.comparePassword= function (candidatePassword, hash, callback) {
// bcrypt.compare(candidatePassword, hash, function (err, isMatch){
// if (err) throw err;
// callback(null, isMatch);
//     }); 
// }