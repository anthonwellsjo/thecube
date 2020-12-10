import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';

import classes from './Layout.module.css';
import classnames from 'classnames';

import { PageContext } from '../../../context/pageContexts';
import BackDropIntro from '../../backDropIntro/backDropIntro';
import logo from '../../../images/logo-xsmall.png';
import LogInMenuMain from '../../logInMenuMain/logInMenuMain';
import Header from '../../header/header';
import Centralizer from '../centralizer/centralizer';
import MainNav from '../../mainNav/mainNav';
import ContactFooter from '../../contactFooter/contactFooter';
import { useSpring, animated } from "react-spring";
import useWindowSize from '../../../hooks/useWindowSize';

const Layout = ({ children }) => {
  const [page, setPage] = useContext(PageContext);
  const { width } = useWindowSize();
  const animProps = useSpring({
    marginTop: page.logoInCenter ? '500px' : '0',
    zIndex: '1000',
    transform: page.logoSpin ? "rotate(60deg)" : "rotate(0deg)",
    opacity: "1",
    position: 'relative',
    from: {
      opacity: "0"
    },
    config: {
      tension: 300,
      friction: 50,
      mass: 0.5
    }
  })

  useEffect(() => {
    setTimeout(() => {
      setPage(prev => ({ ...prev, whiteBackDrop: false, logoInCenter: false, logoSpin: false }))
    }, 2000)

  }, []);

  useEffect(() => {
    setPage(prev => ({ ...prev, windowWidth: width }));
  }, [width])

  console.log("window width", page.windowWidth);
  return (
      <div className={classes.frame}>
        <BackDropIntro in={page.whiteBackDrop} />
        <Header>
          <LogInMenuMain />
          <Centralizer >
            <MainNav lineColor={page.currentColor} name1="Contact" link1="/contact" name2={page.windowWidth >= 1200 ? "Physical Space" : "Physical"} link2="/physical" />
            <Link to="/">
              <animated.img style={animProps} src={logo} alt="the cube logo" />
            </Link>
            <MainNav lineColor={page.currentColor} name1={page.windowWidth >= 1200 ? "Digital Space" : "Digital"} link1="/digital" name2={page.windowWidth >= 1200 ? "The People" : "People"} link2="/people" />
          </Centralizer>
        </Header>
        {children}
        <ContactFooter />
      </div>
  )
}

export default Layout;