const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIAALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.histories = require("./history.model.js")(sequelize, Sequelize);

module.exports = db;
