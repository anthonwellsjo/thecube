import React, { useState } from 'react';
import Centralizer from '../../layout/centralizer/centralizer';
import classes from './post4.module.css';
import classnames from 'classnames';

export default function Post4(props) {


  return (
    <Centralizer>
      <div className={classnames("indexItemGlobal", "noSelect", classes.wrapper)} >
        <Centralizer column>
          <p className={classes.text}>TheCube</p>
          <h1 className={classes.bigtext}>find your muse create your flow</h1>
        </Centralizer>
      </div >
    </Centralizer>
  )
};