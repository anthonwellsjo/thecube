import React, { useContext, useEffect, useState } from "react";

import { useQuery, gql } from '@apollo/client';
import { GET_CAROUSEL_ICONS } from '../../apollo/queries';

import classes from './index.module.css';

import { PageContext } from '../../context/pageContexts';
import FadeIn from '../../components/animations/fadeIn/fadeIn';
import BadgeHeader from "../../components/badges/digital/badgeHeader/badgeHeader";
import CategoryCarousel from "../../components/badges/digital/categoryCarousel/categoryCarousel";
import SearchBar from '../../components/badges/digital/searchBar/searchBar';
import RandomBadge from "../../components/badges/digital/randomBadge/randomBadge";
import SlideIn from "../../components/animations/slideIn/slideIn";
import Layout from "../../components/layout/Layout/Layout";
import useArrival from "../../hooks/useArrival";

let apolloHasFetched = false;

const query = gql`
query SiteQuery {
  allIconiRicercaSitoVestiaire {
    IconiRicercaGiacche {
      asset {
        url
      }
    }
    IconiRicercaGilet {
      asset {
        url
      }
    }
    IconiRicercaGiubbotti {
      asset {
        url
      }
    }
    IconiRicercaMaglieria {
      asset {
        url
      }
    }
    IconiRicercaPiumini {
      asset {
        url
      }
    }
    IconiRicercaCappotti {
      asset {
        url
      }
    }
  }
  allIconiRicercaSitoAccessories {
    IconiRicercaBorse {
      asset {
        url
      }
    }
    IconiRicercaCravatte {
      asset {
        url
      }
    }
    IconiRicercaFoulardeSciarpe {
      asset {
        url
      }
    }
    IconiRicercaPapillon {
      asset {
        url
      }
    }
    IconiRicercaScarpe {
      asset {
        url
      }
    }
  }
}
`;

export default function DSpace() {

  const [page, setPage] = useContext(PageContext);
  const [carouselImgs, setCarouselImgs] = useState({ vestiaire: {}, accessories: {}, themes: {} });
  const [apolloStatus, setApolloStatus] = useState({ apolloJustFetched: false });
  const { loading, error, data } = useQuery(query);

  useArrival();

  useEffect(() => {
    if (!apolloHasFetched && !page.mountBackDrop) {
      setPage(prev => ({ ...prev, logoSpin: true }));
    }
  }, []);

  useEffect(() => {
    console.log("useeffect", apolloStatus.apolloJustFetched);
    if (apolloStatus.apolloJustFetched) {
      setCarouselImgs(prev => ({
        ...prev,
        vestiaire: {
          ...prev.vestiaire,
          Cappotti: data.allIconiRicercaSitoVestiaire[0].IconiRicercaCappotti.asset.url,
          Giacche: data.allIconiRicercaSitoVestiaire[0].IconiRicercaGiacche.asset.url,
          Gilet: data.allIconiRicercaSitoVestiaire[0].IconiRicercaGilet.asset.url,
          Giubbotti: data.allIconiRicercaSitoVestiaire[0].IconiRicercaGiubbotti.asset.url,
          Maglieria: data.allIconiRicercaSitoVestiaire[0].IconiRicercaMaglieria.asset.url,
          Piumini: data.allIconiRicercaSitoVestiaire[0].IconiRicercaPiumini.asset.url
        },
        accessories: {
          ...prev.accessories,
          Borse: data.allIconiRicercaSitoAccessories[0].IconiRicercaBorse.asset.url,
          Cravatte: data.allIconiRicercaSitoAccessories[0].IconiRicercaCravatte.asset.url,
          Foulard: data.allIconiRicercaSitoAccessories[0].IconiRicercaFoulardeSciarpe.asset.url,
          Papillon: data.allIconiRicercaSitoAccessories[0].IconiRicercaPapillon.asset.url,
          Scarpe: data.allIconiRicercaSitoAccessories[0].IconiRicercaScarpe.asset.url,
        }
      }
      ))
    }
  }, [apolloStatus.apolloJustFetched])

  let render = <></>;
  if (loading) {
    render = <div className={classes.loadingDiv}></div>;
  };
  if (error) {
    render = <p>Error :( {error.message}</p>;
  };
  if (!error && !loading) {
    apolloHasFetched = true;
    if (!apolloStatus.apolloJustFetched) {
      setApolloStatus(prev => ({ ...prev, apolloJustFetched: true }));
      setPage(prev => ({ ...prev, logoSpin: false, currentColor: "pink" }));
    }
    render = <>
      <FadeIn >
        <SearchBar />
      </FadeIn>
      <SlideIn direction="left">
        <BadgeHeader>Search for Vestiaire</BadgeHeader>
      </SlideIn>
      <SlideIn direction="right">
        <CategoryCarousel data={carouselImgs.vestiaire} bgc="rgb(211, 82, 105)" />
      </SlideIn>
      <SlideIn direction="left">
        <BadgeHeader>Search for Accessories</BadgeHeader>
      </SlideIn>
      <SlideIn direction="right">
        <CategoryCarousel data={carouselImgs.accessories} bgc="black" />
      </SlideIn>
      <SlideIn direction="left">
        <BadgeHeader>Search for Themes</BadgeHeader>
      </SlideIn>
      <SlideIn direction="right">
        <CategoryCarousel data={carouselImgs.vestiaire} bgc="rgb(29, 172, 129)" />
      </SlideIn>
      <RandomBadge />
    </>;
  }




  return (
    <Layout>
      {render}
    </Layout>
  )
}
