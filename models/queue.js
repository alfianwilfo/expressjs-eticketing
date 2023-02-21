module.exports = (sequelize, DataTypes) => {
  const Queue = sequelize.define('Queue', {
    name: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    departement: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  })

  Queue.beforeCreate(async (queue, options) => {
    queue.status = 'Pending'
  });

  Queue.sync()

  return Queue;
};