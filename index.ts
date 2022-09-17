// Add Express
import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const initServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Server started");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () =>
    console.log(`Express server is running on port http://localhost:${PORT}`)
  );
};

initServer();
