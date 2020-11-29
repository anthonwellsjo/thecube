import React, { useContext, useEffect, useState } from "react";

import { client } from '../../apollo/client';
import { gql, useQuery } from '@apollo/client';
import { GET_CAROUSEL_ICONS } from '../../apollo/queries';

import { PageContext } from '../../context/pageContexts';
import { Link } from 'gatsby';
import Header from "../../modules/header/header"
import '../../global.css';
import Centralizer from "../../modules/layout/centralizer/centralizer";
import logo from '../../images/logo-xsmall.png';
import MainNav from "../../modules/mainNav/mainNav";
import LogInMenuMain from "../../modules/logInMenuMain/logInMenuMain";
import ContactFooter from "../../modules/contactFooter/contactFooter";
import CurrentPageHeader from "../../modules/currentPageHeader/currentPageHeader";
import FadeIn from '../../modules/animations/fadeIn/fadeIn';
import BadgeHeader from "../../modules/badges/digital/badgeHeader/badgeHeader";
import CategoryCarousel from "../../modules/badges/digital/categoryCarousel/categoryCarousel";
import SearchBar from '../../modules/badges/digital/searchBar/searchBar';
import RandomBadge from "../../modules/badges/digital/randomBadge/randomBadge";


export default function DSpace() {
  const [carouselImgs, setCarouselImgs] = useState({ vestiaire: {}, accessories: {}, themes: {} });
  const [apolloStatus, setApolloStatus] = useState({ apolloJustFetched: false });
  const { loading, error, data } = useQuery(GET_CAROUSEL_ICONS);
  


  useEffect(() => {
    console.log("useeffect", apolloStatus.apolloJustFetched);
    if (apolloStatus.apolloJustFetched) {
      setCarouselImgs(prev => ({
        ...prev,
        vestiaire: {
          ...prev.vestiaire,
          Cappotti: data.sanityIconiRicercaSitoVestiaire.IconiRicercaCappotti.asset.url,
          Giacche: data.sanityIconiRicercaSitoVestiaire.IconiRicercaGiacche.asset.url,
          Gilet: data.sanityIconiRicercaSitoVestiaire.IconiRicercaGilet.asset.url,
          Giubbotti: data.sanityIconiRicercaSitoVestiaire.IconiRicercaGiubbotti.asset.url,
          Maglieria: data.sanityIconiRicercaSitoVestiaire.IconiRicercaMaglieria.asset.url,
          Piumini: data.sanityIconiRicercaSitoVestiaire.IconiRicercaPiumini.asset.url
        },
        accessories: {
          ...prev.accessories,
          Borse: data.sanityIconiRicercaSitoAccessories.IconiRicercaBorse.asset.url,
          Cravatte: data.sanityIconiRicercaSitoAccessories.IconiRicercaCravatte.asset.url,
          Foulard: data.sanityIconiRicercaSitoAccessories.IconiRicercaFoulardeSciarpe.asset.url,
          Papillon: data.sanityIconiRicercaSitoAccessories.IconiRicercaPapillon.asset.url,
          Scarpe: data.sanityIconiRicercaSitoAccessories.IconiRicercaScarpe.asset.url,
        }
      }
      ))
    }
  }, [apolloStatus.apolloJustFetched])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  if (!apolloStatus.apolloJustFetched) {
    setApolloStatus(prev => ({ ...prev, apolloJustFetched: true }));
  }

  console.log("carouselimgs", carouselImgs.vestiaire);


  return (
    <>
      <LogInMenuMain />
      <Header>
        <Centralizer space>
          <MainNav lineColor="pink" name1="Contact" link1="/contact" name2="Physical Space" link2="/physical" />
          <Link to="/">
            <img style={{ height: "100px" }} src={logo} alt="the cube logo" />
          </Link>
          <MainNav lineColor="pink" name1="Digital Space" link1="/digital" name2="The People" link2="/people" />
        </Centralizer>
        <FadeIn>
          <CurrentPageHeader header="Digital Space" />
        </FadeIn>
      </Header>
      <FadeIn>
        <SearchBar />
      </FadeIn>
      <FadeIn>
        <BadgeHeader>Search for Vestiaire</BadgeHeader>
      </FadeIn>
      <FadeIn>
        <CategoryCarousel data={carouselImgs.vestiaire} bgc="rgb(211, 82, 105)" />
      </FadeIn>
      <BadgeHeader>Search for Accessories</BadgeHeader>
      <CategoryCarousel data={carouselImgs.accessories} bgc="black" />
      <BadgeHeader>Search for Themes</BadgeHeader>
      <CategoryCarousel data={carouselImgs.vestiaire} bgc="rgb(29, 172, 129)" />
      <RandomBadge />
      <ContactFooter />
    </>
  )
}
