import React, { useState, useEffect, useContext } from 'react';
import { PageContext } from '../../context/pageContexts';

const BackDropIntro = (props) => {
  const [page, setPage] = useContext(PageContext);
  const [opacity, setOpacity] = useState("1");
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (!page.transitionBackDrop) {
        setOpacity("0");
        setTimeout(() => {
          setMount(false)
        }, 500)
      } else {
        setOpacity("1");
        setMount(true);
      }
    }, page.delayBackDrop);
  }, [page.transitionBackDrop])

  if (!page.mountBackDrop) return null;

  return (
    <div style={{ transition: `opacity ${page.speedBackDrop} linear`, opacity: opacity, backgroundColor: "white", position: "fixed", top: mount ? "0" : "-1000px", height: "2000px", left: "0", width: "100%", zIndex: "1" }}></div>
  )
};

export default BackDropIntro;