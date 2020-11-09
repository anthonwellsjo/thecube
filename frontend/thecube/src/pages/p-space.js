import React from "react"
import Header from "../modules/header/header"
import '../global.css';
import InnerTextHolder from "../modules/layout/innerTextHolder/innerTextHolder";
import Centralizer from "../modules/layout/centralizer/centralizer";
import logo from '../images/logo-xsmall.png';
import MainNav from "../modules/mainNav/mainNav";
import LogInMenuMain from "../modules/logInMenuMain/logInMenuMain";
import BlogCarousel from "../modules/blogCarousel/blogCarousel";
import PhotoCarousel from "../modules/photoCarousel/photoCarousel";
import ContactFooter from "../modules/contactFooter/contactFooter";


export default function PSpace() {
  return (
    <>
    <LogInMenuMain/>
      <Header>
        <Centralizer space>
          <MainNav link1="Contact" link2="Physical Space" />
          <img style={{ height: "100px" }} src={logo} alt="the cube logo" />
          <MainNav link1="Digital Space" link2="The People" />
        </Centralizer>
      </Header>
      <ContactFooter/>
    </>
  )
}
