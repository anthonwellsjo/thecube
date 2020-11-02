import React from 'react';
import Centralizer from '../layout/centralizer/centralizer';
import classes from './mainNav.module.css';
import { useSpring, animated } from 'react-spring';

export default function MainNav(props) {
  return (
    <Centralizer column>
      <div style={{ width: "50%" }}>
        <Centralizer space>
            <a className={classes.navLink}>{props.link1}</a>
            <a className={classes.navLink}>{props.link2}</a>
        </Centralizer>
      </div>
      <div style={{ height: "3px", width: "90%", backgroundColor: "black" }}></div>
    </Centralizer>
  )
};