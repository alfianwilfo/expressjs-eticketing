var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      departement: {
        type: DataTypes.STRING,
        allowNull:false,
      }
    })

    User.beforeCreate((user) => {
        user.password = bcrypt.hashSync(user.password, salt);
    })

    User.sync()
  
    return User;
  }