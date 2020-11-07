import React from 'react';
import Centralizer from '../layout/centralizer/centralizer';
import logo from '../../images/logo-xsmall.png';
import classes from './contactFooter.module.css';
import SocialBtns from '../socialBtns/socialBtns';

export default function ContactFooter() {
  return (
      <Centralizer>
        <div className="indexItemGlobal" style={{ height: "500px", width: "100%", overflow: "hidden", position: "relative", marginBottom: "0" }}>
          <Centralizer column>
            <div className={classes.whitebox}>
              <Centralizer space>
                <Centralizer column>
                  <img className={classes.logo} style={{ height: "40px" }} src={logo} alt="the cube logo" />
                  <p className={classes.blackText}>born to inspire you</p>
                </Centralizer>
                <Centralizer column>
                  <img className={classes.logo} style={{ height: "40px" }} src={logo} alt="the cube logo" />
                  <p className={classes.blackText}>we love flexibility</p>
                </Centralizer>
                <Centralizer column>
                  <img className={classes.logo} style={{ height: "40px" }} src={logo} alt="the cube logo" />
                  <p className={classes.blackText}>connecting arts and creatives</p>
                </Centralizer>
                <Centralizer column>
                  <img className={classes.logo} style={{ height: "40px" }} src={logo} alt="the cube logo" />
                  <p className={classes.blackText}>we keep you updated</p>
                </Centralizer>
              </Centralizer>
            </div>
            <div className={classes.greybox}>
              <header>
                <Centralizer space>
                  <p className={classes.whiteTextHeader}><span style={{ fontFamily: 'Helvetica Neue Bold' }}>TheCubE</span> - expand the concept of working space</p>
                  <p className={classes.whiteTextHeader}>Want to rent the space? Contact us at info@thecubearchive.com</p>
                </Centralizer>
              </header>
              <SocialBtns />
              <footer>
                <p className={classes.whiteTextHeader}><span style={{ fontFamily: 'Helvetica Neue Bold' }}>TheCubE</span> - expand the concept of working space</p>
                <p className={classes.whiteTextHeader}>Want to rent the space? Contact us at info@thecubearchive.com</p>
              </footer>

            </div>
          </Centralizer>
        </div >
      </Centralizer>
  )
};
