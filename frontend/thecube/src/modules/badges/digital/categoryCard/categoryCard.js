import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './categoryCard.module.css';

export default function CategoryCard(props) {
  console.log("props", props.data);

  return (
    <div className={classes.wrap} style={{ backgroundColor: props.bgc, color: props.bgc == "black" ? "white" : "black" }}>
      <Centralizer column>
        <img className={classes.img} src={props.src} alt={`photo of ${props.children}`} />
        <h1 className={classes.bigtext}>{props.children}</h1>
      </Centralizer>
    </div>
  )
};