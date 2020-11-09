import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import LineAnimation from '../../../animations/lineAnimation';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './hBadge3.module.css';
import classnames from 'classnames';

export default function HBadge3(props) {

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
      <div className={classnames("indexItemGlobal",classes.wrapper)} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
        <Centralizer>
          <div className={classes.colorBox}>
            <div className={classes.textHolder}>
              <p className={classes.text}>Get comfy and be inspired</p>
              <h1 className={classes.bigtext}>Digital</h1>
              <p className={classes.text2}>take me there</p>
            </div>
            <div style={{ position: "absolute", bottom: "80px", right: "-160px" }}>
              <LineAnimation fat={9} end={320} start={160} hover={hover} />
            </div>
          </div>
          <img src='https://picsum.photos/1000/400' style={{ position: "absolute", right: "0" }} />
        </Centralizer>
      </div >

    </Centralizer>
  )
};