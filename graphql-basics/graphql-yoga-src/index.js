import { GraphQLServer } from "graphql-yoga";

// Scalar Types: Stores single values String, Int, Float, ID, Boolean

// TypeDefs - Defines the actual operations thatw we can do with this server and also the schema for the data

const typeDefs = `
    type Query {
        info: String!
        me: User!
        post: Post!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }
`;

// Resolvers - The functions that actually provide response to the operations that the server receive.

const resolver = {
  Query: {
    info: () => "A GraphQL API developed using graphql-yoga package.",
    me: () => {
      return {
        id: "ABC123",
        name: "Ravindra Ch",
        email: "ravi@test.com",
        age: null,
      };
    },
    post: () => {
      return {
        id: "ABC345",
        title: "A Sample Post",
        body: "A sample description to test Post query",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolver,
});

server.start(({ port }) => {
  console.log("GraphQL Yoga server is running on:", port);
});
