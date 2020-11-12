import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './categoryCard.module.css';

export default function CategoryCard(props) {

  return (
    <div className={classes.wrap} style={{ backgroundColor: props.bgc, color: props.bgc == "black" ? "white" : "black" }}>
      <Centralizer column>
        <img className={classes.img} src="https://picsum.photos/200/200?grayscale" alt="photo" />
        <h1 className={classes.bigtext}>Giacche</h1>
      </Centralizer>
    </div>
  )
};