import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_REALTIME_URI,
  cache: new InMemoryCache()
});