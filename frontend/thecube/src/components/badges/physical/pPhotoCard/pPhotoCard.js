import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './pPhotoCard.module.css';

export default function PPhotoCard(props) {


  return (
    <Centralizer column>
      <div className={classes.img}>
        <Centralizer>
          <img src="https://picsum.photos/350/250?grayscale" alt="photo" />
        </Centralizer>
      </div>
      <span className={classes.text}>{props.children}</span>
    </Centralizer>
  )
};