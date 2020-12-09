import React, { useContext, useEffect, useState } from "react";

import { useQuery } from '@apollo/client';
import { GET_CAROUSEL_ICONS } from '../../apollo/queries';

import { PageContext } from '../../context/pageContexts';
import FadeIn from '../../components/animations/fadeIn/fadeIn';
import BadgeHeader from "../../components/badges/digital/badgeHeader/badgeHeader";
import CategoryCarousel from "../../components/badges/digital/categoryCarousel/categoryCarousel";
import SearchBar from '../../components/badges/digital/searchBar/searchBar';
import RandomBadge from "../../components/badges/digital/randomBadge/randomBadge";


export default function DSpace() {
  const [page, setPage] = useContext(PageContext);
  const [carouselImgs, setCarouselImgs] = useState({ vestiaire: {}, accessories: {}, themes: {} });
  const [apolloStatus, setApolloStatus] = useState({ apolloJustFetched: false });
  const { loading, error, data } = useQuery(GET_CAROUSEL_ICONS);

  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "pink" }));
  }, []);

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
    </>
  )
}
