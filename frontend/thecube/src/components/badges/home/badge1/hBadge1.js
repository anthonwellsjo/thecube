import React, { useState, useContext } from 'react';

import { PageContext } from '../../../../context/pageContexts';
import LineAnimation from '../../../animations/lineAnimation';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './hBadge1.module.css';

export default function HBadge1(props) {
  const [page, setPage] = useContext(PageContext);
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    if (!hover) {
      setHover(true);
      console.log("set true", hover);
    }
  }
  const onMouseLeave = () => {
    if (hover) {
      setHover(false);
      console.log("set false", hover);
    }
  }

  return (
    <Centralizer>
      <div className="indexItemGlobal" onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} style={{ cursor: "pointer", height: "30vw", width: "100%", overflow: "hidden", position: "relative" }}>
        <div className={classes.colorBox}>
          <div className={classes.textHolder}>
            <p className={classes.text}>{page.windowWidth <= 550 ? "Fashion Archive with a digital platform" : "Fashion Archive with a digital platform of inspirational ideas for creatives"}</p>
          </div>
          {page.windowWidth > 550 && <div style={{ position: "absolute", top: "24vw", left: "3vw" }}>
            <LineAnimation fat={page.windowWidth / 100} end={page.windowWidth / 4} start={page.windowWidth / 4} hover={hover} />
          </div>}
        </div>
        <img src='https://picsum.photos/1200/400?grayscale' style={{ position: "absolute", right: "0" }} />
      </div >
    </Centralizer>
  )
};