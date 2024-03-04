import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from '../../backend/src/graphql/schema'; // Määrittele GraphQL-skeema
import { resolvers } from '../../backend/src/graphql/resolvers'; // Määrittele resolvers

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`GraphQL-palvelin käynnistetty osoitteessa ${url}`);
});
