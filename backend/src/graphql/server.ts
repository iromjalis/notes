import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from './resolvers';
import fs from 'fs';
import path from 'path';

const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'typedefs.graphql'), 'utf8'));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server valmis osoitteessa ${url}`);
});
