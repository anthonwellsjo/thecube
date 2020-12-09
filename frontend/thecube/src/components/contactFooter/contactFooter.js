import React from 'react';
import Centralizer from '../layout/centralizer/centralizer';
import logo from '../../images/logo-xsmall.png';
import classes from './contactFooter.module.css';
import SocialBtns from '../socialBtns/socialBtns';

export default function ContactFooter() {
  return (
    <Centralizer>
      <div className="indexItemGlobal" style={{ height: "380px", width: "100%", overflow: "hidden", position: "relative", marginBottom: "0", }}>
        <Centralizer column>
          <div className={classes.whitebox}>
            <Centralizer space>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>born to inspire you</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>we love flexibility</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>connecting arts and creatives</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>we keep you updated</p>
              </Centralizer>
            </Centralizer>
          </div>
          <div className={classes.greybox}>
            <header>
              <Centralizer space>
                <p className={classes.whiteTextHeader}><span style={{ fontFamily: 'Helvetica Neue Bold', letterSpacing: ".6px", fontSize: "13px" }}>TheCubE</span> - expand the concept of working space</p>
                <p className={classes.whiteTextHeader}><span style={{ fontFamily: 'Helvetica Neue Bold', letterSpacing: ".6px", fontSize: "13px" }}>Want to rent the space?</span> Contact us at <a className={classes.mail} href="mailto:info@thecubearchive.com">info@thecubearchive.com</a></p>
              </Centralizer>
            </header>
            <SocialBtns />
            <footer className={classes.footer}>
              <Centralizer space>
                <span className={classes.scs}>SCS</span>
                <a className={classes.address} rel="noreferrer" target="_blank" href="http://maps.google.com/?q=ia Martiri della Libertà 95/F San Giovanni Valdarno" >Via Martiri della Libertà 95/F San Giovanni Valdarno (AR)</a>
                <span className={classes.rights}>Copyright @ 2020 TheCubE<br></br>All Rights Reserved</span>
              </Centralizer>
            </footer>
          </div>
        </Centralizer>
      </div >
    </Centralizer>
  )
};
