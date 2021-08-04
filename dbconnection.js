const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('linktree', 'root', 'silverstar', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;