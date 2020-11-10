import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './categoryCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import PhotoCard from '../categoryCard/categoryCard';

export default function CategoryCarousel(props) {
  return (
    <>
        <div className={classes.carouselContainer}>
          <CarouselProvider
            visibleSlides={4.5}
            naturalSlideWidth={120}
            naturalSlideHeight={200}
            totalSlides={6}
            isPlaying={true}
            interval={3000}
          >
            <Slider>
              <Slide index={0}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 1</PhotoCard></Centralizer></Slide>
              <Slide index={1}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 2</PhotoCard></Centralizer></Slide>
              <Slide index={2}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 3</PhotoCard></Centralizer></Slide>
              <Slide index={3}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 4</PhotoCard></Centralizer></Slide>
              <Slide index={4}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 5</PhotoCard></Centralizer></Slide>
              <Slide index={5}><Centralizer><PhotoCard bgc={props.bgc}>asdasdasd 6</PhotoCard></Centralizer></Slide>
            </Slider>
          </CarouselProvider>
        </div>
    </>
  )
};