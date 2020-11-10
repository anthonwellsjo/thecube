import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './blogCard.module.css';

export default function BlogCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.blogImg}>
        <Centralizer>
        <img src="https://picsum.photos/300/300" alt="photo"/>
        </Centralizer>
      </div>
    </div>
  )
};