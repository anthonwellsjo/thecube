import React, { useEffect, useContext } from 'react';
import { PageContext } from '../context/pageContexts';


export default function useArrival() {
  const [page, setPage] = useContext(PageContext);
  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "black" }));
    if (page.mountBackDrop) {
      setTimeout(() => {
        setPage(prev => ({ ...prev, transitionBackDrop: false }));
      }, 1000)
      setTimeout(() => {
        setPage(prev => ({ ...prev, mountBackDrop: false }));
      }, 2000)
    }
  }, []);

  

};