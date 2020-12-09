import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';

import { PageContext } from '../../../context/pageContexts';
import BackDropIntro from '../../backDropIntro/backDropIntro';
import logo from '../../../images/logo-xsmall.png';
import LogInMenuMain from '../../logInMenuMain/logInMenuMain';
import Header from '../../header/header';
import Centralizer from '../centralizer/centralizer';
import MainNav from '../../mainNav/mainNav';
import ContactFooter from '../../contactFooter/contactFooter';
import { useSpring, animated } from "react-spring";

const Layout = ({ children }) => {
  const [page, setPage] = useContext(PageContext);
  const [siteReady, setSiteReady] = useState(false);
  const animProps = useSpring({
    height: siteReady ? '100px' : '150px', marginTop: siteReady ? '0' : '500px', zIndex: '1000', opacity: "1", position: 'relative',
    from: { opacity: "0" },
    config: {
      tension: 300,
      friction: 50,
      mass: 0.5
    }
  })
  useEffect(() => {
    setTimeout(() => {
      setSiteReady(true);
    }, 2000)

  }, []);

  return (
    <>
      <BackDropIntro in={siteReady} />
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav lineColor={page.currentColor} name1="Contact" link1="/contact" name2="Physical Space" link2="/physical" />
          <Link to="/">
            <animated.img style={animProps} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor={page.currentColor} name1="Digital Space" link1="/digital" name2="The People" link2="/people" />
        </Centralizer>
      </Header>
      {children}
      <ContactFooter />
    </>
  )
}

export default Layout;