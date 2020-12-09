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
  const [siteReady, setSiteReady] = useState(false);
  const { width } = useWindowSize();
  const animProps = useSpring({
    marginTop: page.logoInCenter ? '500px' : '0',
    zIndex: '1000',
    transform: page.logoSpin ? "rotate(60deg)" : "rotate(0)",
    opacity: "1",
    position: 'relative',
    from: {
      opacity: "0",
      transform: "rotate(360deg)"
    },
    config: {
      tension: 300,
      friction: 50,
      mass: 0.5
    }
  })

  useEffect(() => {
    setPage(prev => ({ ...prev, windowWidth: width }));
    setTimeout(() => {
      setPage(prev => ({ ...prev, whiteBackDrop: false, logoInCenter: false, logoSpin: false }))
    }, 2000)

  }, []);

  console.log("window width", page.windowWidth);
  return (
    <>
      <BackDropIntro in={page.whiteBackDrop} />
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav lineColor={page.currentColor} name1="Contact" link1="/contact" name2={page.windowWidth >= 1200 ? "Physical Space" : "Physical"} link2="/physical" />
          <Link to="/">
            <animated.img style={{ ...animProps }} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor={page.currentColor} name1={page.windowWidth >= 1200 ? "Digital Space" : "Digital"} link1="/digital" name2="The People" link2="/people" />
        </Centralizer>
      </Header>
      {children}
      <ContactFooter />
    </>
  )
}

export default Layout;