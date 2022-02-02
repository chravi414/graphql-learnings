import { GraphQLServer } from "graphql-yoga";

// Scalar Types: Stores single values String, Int, Float, ID, Boolean

// TypeDefs - Defines the actual operations thatw we can do with this server and also the schema for the data

const typeDefs = `
    type Query {
        info: String!
        id: ID!
        name: String!
        age: Int!
        isStudent: Boolean!
        gpa: Float
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`;

// Resolvers - The functions that actually provide response to the operations that the server receive.

const resolver = {
  Query: {
    info: () => "A GraphQL API developed using graphql-yoga package.",
    id: () => "12345",
    name: () => "Ravindra",
    age: () => 20,
    isStudent: () => false,
    gpa: () => null,
    title: () => "Apple IPhone 13 Pro",
    price: () => 999.99,
    releaseYear: () => 2021,
    rating: () => 4.5,
    inStock: () => true,
  },
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolver,
});

server.start(({ port }) => {
  console.log("GraphQL Yoga server is running on:", port);
});
