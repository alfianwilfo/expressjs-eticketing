module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define('Departement', {
      name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    })
  
    Departement.sync()
  
    return Departement;
  }