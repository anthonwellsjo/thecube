import React, { useContext } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './photoCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import PhotoCard from '../photoCard/photoCard';
import { PageContext } from '../../../../context/pageContexts';

export default function PhotoCarousel() {
  const [page, setPage] = useContext(PageContext);
  let noOfPhotos = 3.5;
  if(page.windowWidth >= 1200) noOfPhotos = 3.5;
  if(page.windowWidth < 1200) noOfPhotos = 3;
  if(page.windowWidth < 1073) noOfPhotos = 2.5;
  if(page.windowWidth < 898) noOfPhotos = 2;
  if(page.windowWidth < 730) noOfPhotos = 1.5;
  if(page.windowWidth < 743) noOfPhotos = 1;
  return (
    <>
      <Centralizer position="relative">
        <div className={classes.carouselContainer}>
          <CarouselProvider
            visibleSlides={noOfPhotos}
            naturalSlideWidth={100}
            naturalSlideHeight={85}
            totalSlides={6}
            isPlaying={true}
            infinite
          >
            <Slider>
              <Slide index={0}><Centralizer><PhotoCard>asdasdasd 1</PhotoCard></Centralizer></Slide>
              <Slide index={1}><Centralizer><PhotoCard>asdasdasd 2</PhotoCard></Centralizer></Slide>
              <Slide index={2}><Centralizer><PhotoCard>asdasdasd 3</PhotoCard></Centralizer></Slide>
              <Slide index={3}><Centralizer><PhotoCard>asdasdasd 4</PhotoCard></Centralizer></Slide>
              <Slide index={4}><Centralizer><PhotoCard>asdasdasd 5</PhotoCard></Centralizer></Slide>
              <Slide index={5}><Centralizer><PhotoCard>asdasdasd 6</PhotoCard></Centralizer></Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </Centralizer>
    </>
  )
};