import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './badgeHeader.module.css';

export default function BadgeHeader(props) {
  return (

    <Centralizer>
      <div className={classes.wrapper}>
        <Centralizer space>
          <div className={classes.vestiaireWrap}>
            <h1 className={classes.bigtext}>{props.children}</h1>
            <div className={classes.line}>
            </div>
          </div>
        </Centralizer>
      </div>

    </Centralizer>

  )
};