import React, { useContext } from 'react';
import classes from './loginMenuMain.module.css';
import { PageContext } from '../../context/pageContexts';

export default function LogInMenuMain() {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className={classes.holder}>
      <button className={classes.member}>{page.windowWidth >= 800 ? "Become a member" : "Register"}</button>
      {page.windowWidth >= 1200 ? <br></br> : null}
      <button className={classes.logIn}>Log in</button>
    </div>
  )
};