import React, { useContext, useEffect } from "react";
import { PageContext } from '../../context/pageContexts';
import { Link } from 'gatsby';
import Header from "../../modules/header/header"
import '../../global.css';
import Centralizer from "../../modules/layout/centralizer/centralizer";
import logo from '../../images/logo-xsmall.png';
import MainNav from "../../modules/mainNav/mainNav";
import LogInMenuMain from "../../modules/logInMenuMain/logInMenuMain";
import ContactFooter from "../../modules/contactFooter/contactFooter";
import CurrentPageHeader from "../../modules/currentPageHeader/currentPageHeader";
import FadeIn from '../../modules/animations/fadeIn/fadeIn';
import PBadge1 from "../../modules/badges/physical/badge1/pBadge1";
import SlideIn from "../../modules/animations/slideIn/slideIn";
import HBadge4 from "../../modules/badges/home/badge4/hBadge4";
import AppointmentBadge from "../../modules/badges/physical/appointmentBadge/appointmentBadge";
import PPhotoCarousel from "../../modules/badges/physical/pPhotoCarousel/pPhotoCarousel";
import HBadge3 from "../../modules/badges/home/badge3/hBadge3";




export default function PSpace() {
  const [page, setPage] = useContext(PageContext);
  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "yellow" }));
  }, [])


  return (
    <>
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav lineColor="yellow" name1="Contact" link1="/contact" name2="Physical Space" link2="/physical" />
          <Link to="/">
            <img style={{ height: "100px" }} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor="yellow" name1="Digital Space" link1="/digital" name2="The People" link2="/people" />
        </Centralizer>
        <FadeIn>
          <CurrentPageHeader header="Physical Space" />
        </FadeIn>
      </Header>
      <SlideIn direction="left">
        <PBadge1 />
      </SlideIn>
      <AppointmentBadge />
      <div style={{ marginTop: "-150px" }}>
        <HBadge4 />
      </div>
      <PPhotoCarousel />
      <div style={{ marginTop: "150px" }}>
        <HBadge3 />
      </div>
      <ContactFooter />
    </>
  )
}
