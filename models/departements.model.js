module.exports = (sequelize, DataTypes) => {
  const Departement = sequelize.define(
    "Departements",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    },
    {
      underscored: true,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      tableName: "departements",
    }
  );

  Departement.sync();

  return Departement;
};
