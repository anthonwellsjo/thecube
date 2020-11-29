import React, { useContext, useState, useEffect } from "react";
import { Link } from 'gatsby';
import { PageContext } from '../context/pageContexts';

import Header from "../modules/header/header"
import '../global.css';
import Centralizer from "../modules/layout/centralizer/centralizer";
import logo from '../images/logo-xsmall.png';
import MainNav from "../modules/mainNav/mainNav";
import LogInMenuMain from "../modules/logInMenuMain/logInMenuMain";
import Badge1 from "../modules/badges/home/badge1/hBadge1";
import Badge2 from "../modules/badges/home/badge2/hBadge2";
import Badge3 from "../modules/badges/home/badge3/hBadge3";
import Badge4 from "../modules/badges/home/badge4/hBadge4";
import BlogCarousel from "../modules/badges/home/blogCarousel/blogCarousel";
import PhotoCarousel from "../modules/badges/home/photoCarousel/photoCarousel";
import ContactFooter from "../modules/contactFooter/contactFooter";
import SlideIn from "../modules/animations/slideIn/slideIn";
import BackDropIntro from '../modules/backDropIntro/backDropIntro';
import { useSpring, animated } from "react-spring";


export default function Home() {
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
      setPage(prev => ({ ...prev, currentColor: "black" }));
      setSiteReady(true);
    }, 2000)

  }, []);

  return (
    <>
      <BackDropIntro in={siteReady} />
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav lineColor="black" name1="Contact" link1="/contact" name2="Physical Space" link2="/physical" />
          <Link to="/">
            <animated.img style={animProps} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor="black" name1="Digital Space" link1="/digital" name2="The People" link2="/people" />
        </Centralizer>
      </Header>
      <SlideIn direction="right">
        <Badge1 />
      </SlideIn>
      <SlideIn direction="left">
        <Badge2 />
      </SlideIn>
      <Badge3 />
      <BlogCarousel />
      <Badge4 />
      <PhotoCarousel />
      <ContactFooter />
    </>
  )
}
