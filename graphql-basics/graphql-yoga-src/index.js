import { GraphQLServer } from "graphql-yoga";

// Scalar Types: Stores single values String, Int, Float, ID, Boolean

// TypeDefs - Defines the actual operations thatw we can do with this server and also the schema for the data

const typeDefs = `
    type Query {
        info: String!
        location: String!
        bio: String!
    }
`;

// Resolvers - The functions that actually provide response to the operations that the server receive.

const resolver = {
  Query: {
    info: () => "A GraphQL API developed using graphql-yoga package.",
    bio: () => "This is a sample bio.need to update later!!",
    location: () => "TX, USA - 75063",
  },
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolver,
});

server.start(({ port }) => {
  console.log("GraphQL Yoga server is running on:", port);
});
