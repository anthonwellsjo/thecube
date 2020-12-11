import React, { useContext } from 'react';
import Centralizer from '../layout/centralizer/centralizer';
import logo from '../../images/logo-xsmall.png';
import classes from './contactFooter.module.css';
import SocialBtns from '../socialBtns/socialBtns';
import { PageContext } from '../../context/pageContexts';

export default function ContactFooter() {
  const [page, setPage] = useContext(PageContext);
  return (
    <Centralizer>
      <div className="indexItemGlobal" style={{ height: "380px", width: "100%", overflow: "hidden", position: "relative", marginBottom: "0", }}>
        <Centralizer column>
          <div className={classes.whitebox}>
            <Centralizer space>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>{page.windowWidth < 1000 ? "inspiration" : "born to inspire you"}</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>{page.windowWidth < 1000 ? "flexibility" : "we love flexibility"}</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>{page.windowWidth < 1000 ? "connection" : "connecting arts and creatives"}</p>
              </Centralizer>
              <Centralizer column>
                <img className={classes.logo} src={logo} alt="the cube logo" />
                <p className={classes.blackText}>{page.windowWidth < 1000 ? "updated" : "we keep you updated"}</p>
              </Centralizer>
            </Centralizer>
          </div>
          <div className={classes.greybox}>
            <div className={classes.textContent}>
              <header>
                <Centralizer evenly>
                  <p className={classes.whiteTextHeader}><span style={{ fontFamily: 'Helvetica Neue Bold', letterSpacing: ".6px", fontSize: "13px" }}>TheCubE</span> - {page.windowWidth > 900 && "expand the concept of "}working space</p>
                  <p className={classes.whiteTextHeader}><a className={classes.mail} href="mailto:info@thecubearchive.com"><span style={{ fontFamily: 'Helvetica Neue Bold', letterSpacing: ".6px", fontSize: "13px" }}>Want to rent the space?</span> {page.windowWidth > 900 && "Contact us at info@thecubearchive.com"}</a></p>
                </Centralizer>
              </header>
              <SocialBtns />
              <footer className={classes.footer}>
                <Centralizer space>
                  <span className={classes.scs}>SCS</span>
                  {page.windowWidth > 640 && <a className={classes.address} rel="noreferrer" target="_blank" href="http://maps.google.com/?q=ia Martiri della Libertà 95/F San Giovanni Valdarno" >{page.windowWidth < 900 ? "San Giovanni Valdarno (AR)" : "Via Martiri della Libertà 95/F San Giovanni Valdarno (AR)"}</a>}
                  <span className={classes.rights}>Copyright @ 2020 TheCubE<br></br>All Rights Reserved</span>
                </Centralizer>
              </footer>
            </div>
          </div>
        </Centralizer>
      </div >
    </Centralizer>
  )
};
