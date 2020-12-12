import React from 'react';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import classes from './mobileHeader.module.css';

export default function MobileHeader(props) {
  return (
    <div className={classes.header}>
      <HamburgerMenu/>
      {props.children}
    </div>
  )
};