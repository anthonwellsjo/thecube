import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';

import classes from './Layout.module.css';

import { PageContext } from '../../../context/pageContexts';
import logo from '../../../images/logo-xsmall.png';
import LogInMenuMain from '../../logInMenuMain/logInMenuMain';
import Header from '../../header/header';
import Centralizer from '../centralizer/centralizer';
import MainNav from '../../mainNav/mainNav';
import ContactFooter from '../../contactFooter/contactFooter';
import { useSpring, animated } from "react-spring";
import useWindowSize from '../../../hooks/useWindowSize';
import BackDropIntro from '../../backDropIntro/backDropIntro';

const Layout = ({ children }) => {
  const [page, setPage] = useContext(PageContext);
  const { width } = useWindowSize();
  const animProps = useSpring({
    marginTop: page.logoInCenter ? '500px' : '0',
    zIndex: '1000',
    transform: page.logoSpin ? "rotate(60deg)" : "rotate(0deg)",
    opacity: page.hideLogo ? "0" : "1",
    position: 'relative',
    config: {
      tension: 300,
      friction: 50,
      mass: 0.5
    }
  })

  useEffect(() => {
    setPage(prev => ({ ...prev, hideLogo: false }));
    setTimeout(() => {
      setPage(prev => ({ ...prev, logoInCenter: false, logoSpin: false, windowWidth: width }))
    }, 1000)
  }, []);

  useEffect(() => {
    setPage(prev => ({ ...prev, windowWidth: width }));
  }, [width]);

  return (
    <div className={classes.frame}>
      <BackDropIntro in={page.firstStart} trans={page.whiteBackDrop} />
      <Header>
        <LogInMenuMain />
        <Centralizer >
          <MainNav lineColor={page.currentColor} name1="Contact" link1="/contact" name2={page.windowWidth >= 1150 ? "Physical Space" : "Physical"} link2="/physical" />
          <Link to="/">
            <animated.img style={animProps} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor={page.currentColor} name1={page.windowWidth >= 1150 ? "Digital Space" : "Digital"} link1="/digital" name2={page.windowWidth >= 1150 ? "The People" : "People"} link2="/people" />
        </Centralizer>
      </Header>
      {children}
      <ContactFooter />
    </div>
  )
}

export default Layout;