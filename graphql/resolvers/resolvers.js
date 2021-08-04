const sequelize = require("../../dbconnection");
const initModels = require("../../models/init-models");
const models = initModels(sequelize);

   const Query =  {getTest: async () => {
      try{
        const testResult = await models.test.findAll();
        return testResult;
      }
      catch(err){
        console.log(err);
      }
    }}


  module.exports = {Query};