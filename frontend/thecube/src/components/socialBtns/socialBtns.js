import React, { useContext } from 'react';
import classes from './socialBtns.module.css';
import fb from '../../images/social/facebook-48.png'
import inst from '../../images/social/instagram-48.png';
import ms from '../../images/social/messenger-48.png';
import twi from '../../images/social/twitter-48.png';
import Centralizer from '../layout/centralizer/centralizer';
import { PageContext } from '../../context/pageContexts';

export default function SocialBtns() {
  const [page, setPage] = useContext(PageContext);
  return (
    <div className={classes.container}>
      <Centralizer space>
        <div className={classes.btnBox}>
          <Centralizer column>
            <img className={classes.btn} src={ms} alt="social1" />
            {page.windowWidth > 900 ?
              <div className={classes.textbox}>
                <h4 className={classes.h4}>Contact us</h4>
                <p className={classes.p}>info@thecubearchive.com</p>
              </div>: <><br></br><br></br></>}
          </Centralizer>
        </div>
        <div className={classes.btnBox}>
          <Centralizer column>
            <img className={classes.btn} src={inst} alt="social2" />
            {page.windowWidth > 900 ?
              <div className={classes.textbox}>
                <h4 className={classes.h4}>Follow us</h4>
                <p className={classes.p}>@thecubearchive</p>
              </div>: <><br></br><br></br></>}
          </Centralizer>
        </div>
        <div className={classes.btnBox}>
          <Centralizer column>
            <img className={classes.btn} src={fb} alt="social3" />
            {page.windowWidth > 900 ?
              <div className={classes.textbox}>
                <h4 className={classes.h4}>Be a friend</h4>
                <p className={classes.p}>TheCubeArchive</p>
              </div>: <><br></br><br></br></>}
          </Centralizer>
        </div>
        <div className={classes.btnBox}>
          <Centralizer column>
            <img className={classes.btn} src={twi} alt="social1" />
            {page.windowWidth > 900 ?
              <div className={classes.textbox}>
                <h4 className={classes.h4}>Subscribe</h4>
                <p className={classes.p}>TheCubeArchive</p>
              </div> : <><br></br><br></br></>}

          </Centralizer>
        </div>
      </Centralizer>
    </div>
  )
};