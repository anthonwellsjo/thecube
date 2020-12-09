import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LineAnimation from '../../../animations/lineAnimation';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './randomBadge.module.css';

export default function RandomBadge(props) {

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
      <div className="indexItemGlobal" style={{ cursor: "pointer", height: "500px", width: "100%", overflow: "hidden", position: "relative", marginTop: "50px" }}>
        <div className={classes.colorBox}>
          <div className={classes.textHolder}>
            <Centralizer column>
              <p className={classes.text}>feel <br></br>lucky<br></br>go to</p>
              <button onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} className={classes.button}>Random</button>
            </Centralizer>
          </div>
        </div>
        <img src='https://picsum.photos/1200/500?grayscale' style={{ position: "absolute", left: "0", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 3s" }} />
      </div >
    </Centralizer>
  )
};