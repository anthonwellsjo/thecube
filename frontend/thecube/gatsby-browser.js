import React, { createContext, useState } from 'react';
import {PageProvider} from './src/context/pageContexts';


export const wrapRootElement = ({ element }) => (
  <PageProvider>
    {element}
  </PageProvider>
);