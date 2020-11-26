import React, { useContext, useEffect, useState } from "react";

import { client } from '../../apollo/client';
import { gql, useQuery } from '@apollo/client';
import { GET_ICONS_VESTIAIRE } from '../../apollo/queries';

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
import axios from 'axios';

const query = gql`
query MyQuery {
  allSanityInterno {
    edges {
      node {
        id
      }
    }
  }
}
`


export default function DSpace() {
  const [page, setPage] = useContext(PageContext);
  const [data, setData] = useState({ vestiaire: {}, accessories: {}, themes: {} });
  const { loading, error, graphQlData } = useQuery(GET_ICONS_VESTIAIRE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  setTimeout(() => {
    console.log(graphQlData);
  }, 1000);



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
        <CategoryCarousel bgc="rgb(255, 240, 224)" />
      </FadeIn>
      <BadgeHeader>Search for Accessories</BadgeHeader>
      <CategoryCarousel bgc="black" />
      <BadgeHeader>Search for Themes</BadgeHeader>
      <CategoryCarousel bgc="rgb(29, 172, 129)" />
      <RandomBadge />
      <ContactFooter />
    </>
  )
}
