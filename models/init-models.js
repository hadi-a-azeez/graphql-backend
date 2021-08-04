var DataTypes = require("sequelize").DataTypes;
var _links = require("./links");
var _test = require("./test");

function initModels(sequelize) {
  var links = _links(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);


  return {
    links,
    test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
