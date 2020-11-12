import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './blogCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import BlogCard from '../blogCard/blogCard';

export default function BlogCarousel() {
  return (
    <>
      <Centralizer position="relative">
        <div className={classes.carouselContainer}>
          <CarouselProvider
            visibleSlides={3}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={6}
            isPlaying={true}
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
        <div className={classes.textHolder}>
          <p className={classes.text}>what's new?</p>
        </div>
        <div className={classes.textHolder2}>
          <p className={classes.text2}>that's new!</p>
        </div>
      </Centralizer>
    </>
  )
};