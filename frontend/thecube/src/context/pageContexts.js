import React, { createContext, useState } from 'react';

let page = { currentColor: "black" };
let setPage;

const PageContext = createContext([page, setPage])

const PageProvider = props => {
  const [page, setPage] = useState({
    currentColor: "black",
    whiteBackDrop: true,
    logoSpin: false,
    logoInCenter: true,
    logoAnimating: true,
    windowWidth: 0
  });
  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  )
};

export { PageContext };
export { PageProvider };
