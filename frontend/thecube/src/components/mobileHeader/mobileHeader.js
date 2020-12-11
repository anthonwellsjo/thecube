import React from 'react';
import classes from './mobileHeader.module.css';

export default function MobileHeader(props) {
  return (
    <div className={classes.header}>
      {props.children}
    </div>
  )
};