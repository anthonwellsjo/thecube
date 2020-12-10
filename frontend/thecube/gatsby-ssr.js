import React from 'react';
import { PageProvider } from './src/context/pageContexts';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';



export const wrapRootElement = ({ element }) => (
  <PageProvider>
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  </PageProvider>
);
