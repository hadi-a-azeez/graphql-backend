const {  gql } = require('apollo-server');

module.exports = gql`
type Query {
  getTest: [Test]
  getLinks: [link]
}
type Mutation{
  updateLink(id: Int): link
  addLink(linkObj: newLink): link
}
input newLink{

  account_id: ID!
  title: String
  url: String
  position: Int
  thumbnailUrl: String
  type: String
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



