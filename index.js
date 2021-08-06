const express = require('express');
const cors = require("cors");
const resolvers = require('./graphql/resolvers/resolvers');
const typeDefs = require('./graphql/typeDefs');
const { ApolloServer } = require('apollo-server-express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startServer =  async()=> {
  const server = new ApolloServer({typeDefs,resolvers});
  await server.start()
  server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
}
startServer();





