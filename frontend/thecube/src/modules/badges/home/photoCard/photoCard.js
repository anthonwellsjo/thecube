import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './photoCard.module.css';

export default function PhotoCard(props) {
  return (
      <div className={classes.img}>
        <Centralizer>
          <img src="https://picsum.photos/350/250?grayscale" alt="photo"/>
        </Centralizer>
      </div>
  )
};