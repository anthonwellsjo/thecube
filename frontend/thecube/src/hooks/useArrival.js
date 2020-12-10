import React, { useEffect, useContext } from 'react';
import { PageContext } from '../context/pageContexts';


export default function useArrival() {
  const [page, setPage] = useContext(PageContext);
  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "black" }));
    if (page.firstStart) {
      setTimeout(() => {
        setPage(prev => ({ ...prev, whiteBackDrop: false }));
      }, 1000)
      setTimeout(() => {
        setPage(prev => ({ ...prev, firstStart: false }));
      }, 2000)
    }
  }, []);

  

};