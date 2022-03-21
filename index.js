const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Country {
    name: String
  }

  type Query {
    countries: [Country]
  }
`;

const countries = [
  {
    name: "Netherlands",
  },
  {
    name: "Belgium",
  },
  {
    name: "Luxembourg",
  },
];

const resolvers = {
  Query: {
    countries: () => countries,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
