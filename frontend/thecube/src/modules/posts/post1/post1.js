import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LineAnimation from '../../animations/lineAnimation';
import Centralizer from '../../layout/centralizer/centralizer';
import classes from './post1.module.css';

export default function Post1(props) {

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
      <div onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} style={{ cursor:"pointer", height: "400px", width: "100%", overflow: "hidden", position: "relative" }}>
        <div className={classes.colorBox}>
          <div className={classes.textHolder}>
            <p className={classes.text}>Fashion Archive with a digital platform of inspirational ideas for creatives</p>
          </div>
          <div style={{ position: "absolute", top: "330px" }}>
            <LineAnimation fat={14} end={300} start={160} hover={hover}/>
          </div>
        </div>
        <img src='https://picsum.photos/1000/400?grayscale' style={{ position: "absolute", right: "0" }} />
      </div >
    </Centralizer>
  )
};