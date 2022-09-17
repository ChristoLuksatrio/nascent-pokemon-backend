import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date
  type Query {
    welcome: String
  }
`;
export default typeDefs;
