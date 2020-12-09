import React from 'react';
import classes from './header.module.css';

export default function Header(props) {
  return (
    <div className={classes.header}>
      {props.children}
    </div>
  )
};