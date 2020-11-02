import React from 'react';
import classes from './loginMenuMain.module.css';
 
export default function LogInMenuMain(){
  return(
    <div className={classes.holder}>
      <button className={classes.member}>Become a member</button>
      <br></br>
      <button className={classes.logIn}>Log in</button>
    </div>
  )
};