import React, { useContext, useState, useEffect } from "react";
import { PageContext } from '../context/pageContexts';

import Layout from '../components/layout/Layout/Layout';

import '../global.css';
import Badge1 from "../components/badges/home/badge1/hBadge1";
import Badge2 from "../components/badges/home/badge2/hBadge2";
import Badge3 from "../components/badges/home/badge3/hBadge3";
import Badge4 from "../components/badges/home/badge4/hBadge4";
import BlogCarousel from "../components/badges/home/blogCarousel/blogCarousel";
import PhotoCarousel from "../components/badges/home/photoCarousel/photoCarousel";
import SlideIn from "../components/animations/slideIn/slideIn";
import BackDropIntro from "../components/backDropIntro/backDropIntro";


export default function Home() {
  const [page, setPage] = useContext(PageContext);

  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "black" }));
    if (page.firstStart) {
      setTimeout(() => {
        setPage(prev => ({ ...prev, whiteBackDrop: false }));
      }, 1000)
      setTimeout(() => {
        setPage(prev => ({ ...prev, firstStart: false }));
      }, 2000)
    }
  }, []);

  return (
    <Layout>
      <BackDropIntro in={page.firstStart} trans={page.whiteBackDrop} />
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
    </Layout>
  )
}
