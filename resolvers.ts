import Submission from "./models/Submission";

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to my app";
    },
    getSubmissions: async () => {
      const submissions = await Submission.find();
      return submissions;
    },
  },
  Mutation: {
    addSubmission: async (_root: any, args: any) => {
      const newSubmission = new Submission({
        firstName: args.firstName,
        lastName: args.lastName,
        phoneNumber: args.phoneNumber,
        address: args.address,
        pokemon: args.pokemon,
      });
      await newSubmission.save();
      return newSubmission;
    },
  },
};
export default resolvers;
