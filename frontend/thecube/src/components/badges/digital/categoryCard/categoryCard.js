import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './categoryCard.module.css';

export default function CategoryCard(props) {
  console.log("props", props.data);

  return (
    <div className={classes.card} style={{ backgroundColor: props.bgc, color: props.bgc == "black" ? "white" : "black" }}>
      <Centralizer column>
        <div className={classes.img} style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={props.src} alt={`photo of ${props.children}`} />
        </div>
        <h1 className={classes.bigtext}>{props.children}</h1>
      </Centralizer>
    </div>
  )
};