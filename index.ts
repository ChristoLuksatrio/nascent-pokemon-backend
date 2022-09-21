import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const server = async () => {
  const app = express();
  app.use(cors());
  dotenv.config();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Behold! My pokemon form server has started");
  });

  const PORT = process.env.PORT || 5000;
  const connectionString = process.env.mongodb || "";
  try {
    await mongoose.connect(connectionString);
    console.log(`Mongoose connected on port ${PORT}`);
  } catch (error) {
    console.log("error is", error);
  }

  app.listen(PORT, () =>
    console.log(`Express server is running on port http://localhost:${PORT}`)
  );
};

server();
