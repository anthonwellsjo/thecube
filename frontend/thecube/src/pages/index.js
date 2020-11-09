import React from "react";
import { Link } from 'gatsby';
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
import BlogCarousel from "../modules/blogCarousel/blogCarousel";
import PhotoCarousel from "../modules/photoCarousel/photoCarousel";
import ContactFooter from "../modules/contactFooter/contactFooter";


export default function Home() {
  return (
    <>
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav name1="Contact" link1="" name2="Physical Space" link2="/physical" />
          <Link to="/">
            <img style={{ height: "100px" }} src={logo} alt="the cube logo" />
          </Link>
          <MainNav name1="Digital Space" link1="" name2="The People" link2="" />
        </Centralizer>
      </Header>
      <Badge1 />
      <Link to="/physical">
        <Badge2 />
      </Link>
      <Badge3 />
      <BlogCarousel />
      <Badge4 />
      <PhotoCarousel />
      <ContactFooter />
    </>
  )
}
