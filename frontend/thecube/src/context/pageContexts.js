import React, { createContext, useState } from 'react';

const PageContext = createContext([])

const PageProvider = props => {
  const [page, setPage] = useState({
    currentColor: "black"
  });
  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  )
};

export { PageContext };
export { PageProvider };
