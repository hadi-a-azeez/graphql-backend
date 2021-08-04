const resolvers = require('./graphql/resolvers/resolvers');
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  getTest: [Test]
}

type Test {
  id: ID!
  name: String
}`;

const server = new ApolloServer({typeDefs,resolvers});

server.listen(4000).then(({url})=>{
  console.log("Server ready at "+ url);
})




