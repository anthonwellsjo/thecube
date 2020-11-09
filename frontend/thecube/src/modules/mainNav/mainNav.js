import React from 'react';
import {Link} from 'gatsby';
import Centralizer from '../layout/centralizer/centralizer';
import classes from './mainNav.module.css';
import { useSpring, animated } from 'react-spring';

export default function MainNav(props) {
  return (
    <Centralizer column>
      <div style={{ width: "50%" }}>
        <Centralizer space>
            <Link to={props.link1} className={classes.navLink}>{props.name1}</Link>
            <Link to={props.link2} className={classes.navLink}>{props.name2}</Link>
        </Centralizer>
      </div>
      <div style={{ height: "3px", width: "90%", backgroundColor: "black" }}></div>
    </Centralizer>
  )
};