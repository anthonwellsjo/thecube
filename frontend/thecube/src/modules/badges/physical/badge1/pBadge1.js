import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import LineAnimation from '../../../animations/lineAnimation';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './pBadge1.module.css';
import classnames from 'classnames';

export default function PBadge1(props) {

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
      <div className={classnames("indexItemGlobal", classes.wrapper)} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
        <Centralizer>
          <div className={classes.colorBox}>
            <div className={classes.textHolder}>
              <p className={classes.text}>1500 garments</p>
              <h1 className={classes.bigtext}>Menswear<br></br>Vintage collection<br></br>Historical garments<br></br>Accessories<br></br>Fabric selection<br></br>Research</h1>
            </div>
            <div style={{ position: "absolute", bottom: "50px", right: "200px" }}>
              <LineAnimation fat={13} end={360} start={650} hover={hover} />
            </div>
          </div>
          <img src='https://picsum.photos/1000/600?grayscale' style={{ position: "absolute", left: "0" }} />
        </Centralizer>
      </div >
    </Centralizer>
  )
};