const {  gql } = require('apollo-server-express');

module.exports = gql`
type Query {
  getTest: [Test]
  getLinks: [link]
}
type Mutation{
  updateLink(input: [linkInput]): [link]
  addLink(linkObj: newLink): link
}
input linkInput{
  id: ID!
  account_id: ID!
  title: String
  url: String
  position: Int
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



