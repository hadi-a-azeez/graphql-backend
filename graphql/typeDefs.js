const {  gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  getTest: [Test]
}

type Test {
  id: ID!
  name: String
}`;

module.exports = {typeDefs};

