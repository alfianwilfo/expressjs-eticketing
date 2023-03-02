module.exports = (sequelize, DataTypes) => {
  const Queue = sequelize.define(
    "queues",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      from: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      to: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      tableName: "queues",
    }
  );

  Queue.beforeCreate(async (queue, options) => {
    queue.status = "Pending";
  });

  Queue.sync();

  return Queue;
};
