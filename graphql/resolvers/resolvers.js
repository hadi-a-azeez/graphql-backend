const sequelize = require("../../dbconnection");
const initModels = require("../../models/init-models");
const models = initModels(sequelize);

module.exports =  {
    Query:{
     getTest: async () => {
      try{
        const testResult = await models.test.findAll();
        return testResult;
      }
      catch(err){
        console.log(err);
      }
    },
    getLinks: async ()=>{
      try{
        const linksResult = await models.links.findAll();
        return linksResult;
      }
      catch(err){
        console.log(err);
      }
    },
},
Mutation: {
  updateLink: async()=> {
    try{
      const linksResult = await models.links.findAll();
      return linksResult[0];
    }
    catch(err){
      console.log(err);
    }
  }
}};


   
