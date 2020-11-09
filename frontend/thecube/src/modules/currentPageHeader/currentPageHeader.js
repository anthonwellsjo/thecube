import React from 'react';
import classes from './currentPageHeader.module.css';

export default function CurrentPageHeader({ header }) {
  return (
    <div style={{ width: "100%"}}>
      <h2 className={classes.header}>{header}</h2>
    </div>
  )
};