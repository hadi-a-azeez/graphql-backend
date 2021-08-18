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
        return JSON.parse(JSON.stringify(linksResult));
      }
      catch(err){
        console.log(err);
      }
    },
},
Mutation: {
addLink: async(root, data, {model})=>{
  try{
    const obj = JSON.parse(JSON.stringify(data.linkObj));
    const result = await models.links.create(obj);
    console.log(result.dataValues);
    return result.dataValues;
  }
  catch(err){
    return err;
  }
},
  updateLink: async(root, data, {model})=> {
    try{
      const obj = JSON.parse(JSON.stringify(data.linkObj));
      const linksResult = await models.links.findAll();
      return linksResult;
    }
    catch(err){
      console.log(err);
    }
  }
}};


   
