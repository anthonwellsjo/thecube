import React, { createContext, useState } from 'react';
import { PageProvider } from './src/context/pageContexts';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';
import Layout from './src/components/layout/Layout/Layout';


export const wrapRootElement = ({ element }) => (
  <PageProvider>
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  </PageProvider>
);

export const wrapPageElement = ({element}) => (
  <Layout>
    {element}
  </Layout>

);