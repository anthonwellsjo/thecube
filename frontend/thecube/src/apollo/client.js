import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://xx8d6vi2.apicdn.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});