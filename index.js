const resolvers = require('./graphql/resolvers/resolvers');
const typeDefs = require('./graphql/typeDefs');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({typeDefs,resolvers});

server.listen(4000).then(({url})=>{
  console.log("Server ready at "+ url);
})




