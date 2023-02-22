module.exports = (sequelize, DataTypes) => {
  const Queue = sequelize.define('Queue', {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    status: {
      type: DataTypes.STRING,
    }
  })


  Queue.beforeCreate(async (queue, options) => {
    queue.status = 'Pending'
  });

  Queue.sync()

  return Queue;
}