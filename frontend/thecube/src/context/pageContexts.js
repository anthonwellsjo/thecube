import React, { createContext, useState } from 'react';

let page = { currentColor: "black" };
let setPage;

const PageContext = createContext([page, setPage])

const PageProvider = props => {
  const [page, setPage] = useState({
    currentColor: "black",
    logoSpin: false,
    hideLogo: true,
    logoInCenter: true,
    windowWidth: 1200,
    delayBackDrop: 500,
    speedBackDrop: "500ms",
    mountBackDrop: true,
    showBurgerMenu: false,
    transitionBackDrop: true,
    mountMobileMenu: false,
    transitionMobileMenu: false
  });
  return (
    <PageContext.Provider value={[page, setPage]}>
      {props.children}
    </PageContext.Provider>
  )
};

export { PageContext };
export { PageProvider };
