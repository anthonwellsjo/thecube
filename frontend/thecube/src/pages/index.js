import React from "react"
import Header from "../modules/header/header"
import '../global.css';
import InnerTextHolder from "../modules/layout/innerTextHolder/innerTextHolder";
import Centralizer from "../modules/layout/centralizer/centralizer";
import logo from '../images/logo-xsmall.png';
import MainNav from "../modules/mainNav/mainNav";
import LogInMenuMain from "../modules/logInMenuMain/logInMenuMain";
import Post1 from "../modules/posts/post1/post1";
import Post2 from "../modules/posts/post2/post2";
import Post3 from "../modules/posts/post3/post3";
import Post4 from "../modules/posts/post4/post4";
import BlogCarousel from "../modules/blogCarousel/blogCarousel";
import PhotoCarousel from "../modules/photoCarousel/photoCarousel";
import ContactFooter from "../modules/contactFooter/contactFooter";


export default function Home() {
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
      <Post1/>
      <Post2/>
      <Post3/>
      <BlogCarousel/>
      <Post4/>
      <PhotoCarousel/>
      <ContactFooter/>
    </>
  )
}
