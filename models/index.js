const Sequelize = require("sequelize");

const sequelize = new Sequelize("testing", "root", "alfianwilf", {
  host: "localhost",
  port: process.env.DB_PORT,
  dialect: "mysql",
  operatorAliases: false,
  dialectOptions: {
    connectTimeout: 30000,
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 1000000,
    idle: 200000,
  },
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.departements = require("./departements.model")(sequelize, Sequelize);
db.users = require("./users.model")(sequelize, Sequelize);
db.queues = require("./queues.model")(sequelize, Sequelize);

// db.sequelize.sync();

module.exports = db;
