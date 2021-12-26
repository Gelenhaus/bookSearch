const { gql } = require('apollo-server-express');


//the "input" keyword  is when you have many mutations that accept the same
// input parameters e.g. if you create an object and then update the object
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    bookId: String!
    authors: [String]
    description: String 
    title: String!
    image: String
    link: String
    
  }

  input saveBook {
    bookId: ID!
    bookId: String!
    authors: [String]
    description: String 
    title: String!
    image: String
    link: String

  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: bookInput!): User
    removeBook(bookId: String!) User
  }
`;

module.exports = typeDefs;