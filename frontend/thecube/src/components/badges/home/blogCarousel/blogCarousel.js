import React, { useContext } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './blogCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import BlogCard from '../blogCard/blogCard';
import { PageContext } from '../../../../context/pageContexts';

export default function BlogCarousel() {
  const [page, setPage] = useContext(PageContext);
  let noOfPhotos = 3;

  if (page.windowWidth > 918) noOfPhotos = 3;
  if (page.windowWidth <= 918) noOfPhotos = 2.5;
  if (page.windowWidth <= 768) noOfPhotos = 2;
  if (page.windowWidth <= 620) noOfPhotos = 1.5;
  if (page.windowWidth <= 465) noOfPhotos = 1;

  return (
    <>
      <Centralizer position="relative">
        <div className={classes.carouselContainer}>
          <CarouselProvider
            visibleSlides={noOfPhotos}
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={6}
            isPlaying={true}
            infinite
          >
            <Slider>
              <Slide index={0}><Centralizer><BlogCard>Blog post 1</BlogCard></Centralizer></Slide>
              <Slide index={1}><Centralizer><BlogCard>Blog post 2</BlogCard></Centralizer></Slide>
              <Slide index={2}><Centralizer><BlogCard>Blog post 3</BlogCard></Centralizer></Slide>
              <Slide index={3}><Centralizer><BlogCard>Blog post 4</BlogCard></Centralizer></Slide>
              <Slide index={4}><Centralizer><BlogCard>Blog post 5</BlogCard></Centralizer></Slide>
              <Slide index={5}><Centralizer><BlogCard>Blog post 6</BlogCard></Centralizer></Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <div className={classes.holder}>
          <div className={classes.textHolder}>
            <p className={classes.text}>what's new?</p>
          </div>
          <div className={classes.textHolder2}>
            <p className={classes.text2}>that's new!</p>
          </div>
        </div>
      </Centralizer>
    </>
  )
};