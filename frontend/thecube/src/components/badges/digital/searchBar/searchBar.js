import React from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './searchBar.module.css';
import search from '../../../../images/icons/icons8-search-30.png';

export default function SearchBar() {
  return (
    <div className={classes.wrapper}>
      <Centralizer space>
        <img style={{opacity: ".8"}} src={search} alt="magnifier" />
        <input className={classes.input} type="text" placeholder="I'm looking for" />
      </Centralizer>
    </div>
  )
};