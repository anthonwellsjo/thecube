import React, { useContext, useEffect, useState } from 'react';
import Centralizer from '../../../layout/centralizer/centralizer';
import classes from './searchBar.module.css';
import search from '../../../../images/icons/icons8-search-30.png';
import { selectHttpOptionsAndBody } from '@apollo/client';
import { PageContext } from '../../../../context/pageContexts';

const sentences = [
  "White leather jacket      ",
  "70's bomber      ",
  "Vintage Fendi trousers      "
];

let currentSent = 0;




export default function SearchBar() {
  const [page, setPage] = useContext(PageContext);
  const [placeholder, setPlaceholder] = useState(sentences[currentSent].slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);


  useEffect(() => {
    if (page.windowWidth >= 550) {
      const intr = setInterval(() => {
        setPlaceholder(sentences[currentSent].slice(0, placeholderIndex));
        if (placeholderIndex + 1 > sentences[currentSent].length) {
          if (currentSent == sentences.length - 1) { currentSent = 0; } else { currentSent++; }
          setPlaceholderIndex(0);
        } else {
          setPlaceholderIndex(placeholderIndex + 1)
        }
      }, 150);
      return () => {
        clearInterval(intr);
      }
    }
  });
  return (
    <div className={classes.wrapper}>
      <Centralizer space>
        <img style={{ opacity: ".8" }} src={search} alt="magnifier" />
        <input className={classes.input} type="text" placeholder={page.windowWidth >= 550 ? placeholder : ""} />
      </Centralizer>
    </div>
  )
};