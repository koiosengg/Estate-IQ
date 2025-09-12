import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Modular/Banner";
import BelowBanner from "./Modular/BelowBanner";
import Process from "./Home/Process";
import Why from "./Modular/Why";
import StressFree from "./Home/StressFree";
import HealthReport from "./Home/HealthReport";
import Help from "./Core/Help";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";

function Modular() {
  return (
    <>
      <Helmet>
        <title>Estate IQ</title>
        <meta
          name="description"
          content="This is the home page of my website."
        />
      </Helmet>
      <Banner />
      <BelowBanner />
      <Process />
      <Why />
      <StressFree />
      <HealthReport />
      <Help />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Modular;
