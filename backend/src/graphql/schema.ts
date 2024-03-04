import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    login(username: String!, password: String!): String
    createUser(username: String!, password: String!): User
  }
`;
