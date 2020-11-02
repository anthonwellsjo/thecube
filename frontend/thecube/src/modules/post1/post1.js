import React from 'react';
import Centralizer from '../layout/centralizer/centralizer';
import InnerTextHolder from '../layout/innerTextHolder/innerTextHolder';
import classes from './post1.module.css';

export default function Post1(props) {
  return (
    <Centralizer>
      <div style={{ height: "400px", width: "90%", overflowX: "hidden", position: "relative" }}>
        <div className={classes.colorBox}>
          <div className={classes.textHolder}>
            <p className={classes.text}>Fashion Archive with a digital platform of inspirational ideas for creatives</p>
          </div>
        </div>
        <img src='https://picsum.photos/1000/400' style={{ position: "absolute", right: "0" }} />
      </div >
    </Centralizer>
  )
};