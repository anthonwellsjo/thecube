import React, { useContext, useEffect } from "react";
import { PageContext } from '../../context/pageContexts';
import PBadge1 from "../../components/badges/physical/badge1/pBadge1";
import SlideIn from "../../components/animations/slideIn/slideIn";
import HBadge4 from "../../components/badges/home/badge4/hBadge4";
import AppointmentBadge from "../../components/badges/physical/appointmentBadge/appointmentBadge";
import HBadge3 from "../../components/badges/home/badge3/hBadge3";
import Layout from "../../components/layout/Layout/Layout";
import useArrival from "../../hooks/useArrival";
import PhotoCarousel from "../../components/badges/home/photoCarousel/photoCarousel";




export default function PSpace() {
  const [page, setPage] = useContext(PageContext);
  useArrival();
  useEffect(() => {
    setPage(prev => ({ ...prev, currentColor: "yellow" }));
  }, [])


  return (
    <Layout>
      <SlideIn direction="left">
        <PBadge1 />
      </SlideIn>
      <AppointmentBadge />
      <div style={{ marginTop: "-150px" }}>
        <HBadge4 />
      </div>
      <PhotoCarousel/>
      <div style={{ marginTop: "50px" }}>
        <HBadge3 />
      </div>
    </Layout>
  )
}
