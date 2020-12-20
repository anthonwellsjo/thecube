import React, { useContext } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import classes from './categoryCarousel.module.css';
import Centralizer from '../../../layout/centralizer/centralizer';
import '../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import PhotoCard from '../categoryCard/categoryCard';
import pageArrow from '../../../../images/icons/icons8-next-page-50.png';
import classnames from 'classnames';
import { PageContext } from '../../../../context/pageContexts';

export default function CategoryCarousel(props) {
  const [page, setPage] = useContext(PageContext);
  let noOfPhotos = 3;
  if (page.windowWidth <= 1150) noOfPhotos = 2.5;
  if (page.windowWidth <= 960) noOfPhotos = 2;
  if (page.windowWidth <= 785) noOfPhotos = 1.5;
  if (page.windowWidth <= 505) noOfPhotos = 1;
  return (
    <>
      <Centralizer>
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
              {Object.keys(props.data).map((k, index) => {
                return (<Slide key={k} index={index}><Centralizer><PhotoCard src={props.data[k]} bgc={props.bgc}>{k}</PhotoCard></Centralizer></Slide>)
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