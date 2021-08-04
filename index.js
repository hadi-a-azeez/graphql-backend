const resolvers = require('./graphql/resolvers/resolvers');
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  getTest: [Test]
  getLinks: [link]
}
type Mutation{
  updateLink(id: Int): link
}
type link{
  id: ID!
  account_id: ID!
  title: String
  url: String
  position: Int
  thumbnailUrl: String
  type: String
}

type Test {
  id: ID!
  name: String
}`;

const server = new ApolloServer({typeDefs,resolvers});

server.listen(4000).then(({url})=>{
  console.log("Server ready at "+ url);
})




