import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import classes from './categoryCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import PhotoCard from '../categoryCard/categoryCard';
import pageArrow from '../../../../images/icons/icons8-next-page-50.png';
import classnames from 'classnames';

export default function CategoryCarousel(props) {
  return (
    <>
      <Centralizer>
        <div className={classes.carouselContainer}>

          <CarouselProvider
            visibleSlides={3}
            naturalSlideWidth={120}
            naturalSlideHeight={200}
            totalSlides={Object.keys(props.data).length}
            isPlaying={true}
            infinite
          >
            <Slider>
              {Object.keys(props.data).map((k, index) => {
                return (<Slide index={index}><Centralizer><PhotoCard src={props.data[k]} bgc={props.bgc}>{k}</PhotoCard></Centralizer></Slide>)
              })}
            </Slider>
            <ButtonBack className={classnames(classes.backBtn, classes.button)}><img className={classes.img1} src={pageArrow} alt="arrow" /></ButtonBack>
            <ButtonNext className={classnames(classes.nextBtn, classes.button)}><img className={classes.img2} src={pageArrow} alt="arrow" /></ButtonNext>
          </CarouselProvider>
        </div>
      </Centralizer>
    </>
  )
};