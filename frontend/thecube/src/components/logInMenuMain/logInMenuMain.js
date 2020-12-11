import React, { useContext } from 'react';
import classes from './loginMenuMain.module.css';
import { PageContext } from '../../context/pageContexts';

export default function LogInMenuMain({ isMobile }) {
  const [page, setPage] = useContext(PageContext);



  return (
    <div className={isMobile ? classes.mobileHolder : classes.holder}>
      <button className={isMobile ? classes.mobileMember : classes.member}>{page.windowWidth >= 800 ? "Become a member" : "Register"}</button>
      {page.windowWidth >= 1200 || isMobile ? <br></br> : null}
      <button className={isMobile ? classes.mobileLogIn :classes.logIn}>Log in</button>
    </div>
  )
};