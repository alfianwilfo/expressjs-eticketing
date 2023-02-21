module.exports = (sequelize, DataTypes) => {
  const Queue = sequelize.define('Queue', {
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: "Name can't empty" },
        notEmpty: { msg: "Name can't empty"}
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: "Message can't empty" },
        notEmpty: { msg: "Message can't empty"}
      }
    },
    departement: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: "Departement can't empty" },
        notEmpty: { msg: "Departement can't empty"}
      }
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
};