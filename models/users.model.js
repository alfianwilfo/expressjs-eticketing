var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departement_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: "departements",
          key: "id",
        },
      },
      super_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      underscored: true,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      tableName: "users",
    }
  );

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, salt);
  });

  User.sync();

  return User;
};
