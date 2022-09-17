import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date
  type Submission {
    firstName: String
    lastName: String
    phoneNumber: String
    address: String
    pokemon: String
  }

  type Query {
    welcome: String
    getSubmissions: [Submission]
  }

  type Mutation {
    addSubmission(
      firstName: String
      lastName: String
      phoneNumber: String
      address: String
      pokemon: String
    ): Submission
  }
`;
export default typeDefs;
