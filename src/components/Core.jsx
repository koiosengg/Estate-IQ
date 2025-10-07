import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Core/Banner";
import Services from "./Core/Services";
import Process from "./Home/Process";
import Modular from "./Home/Modular";
import Help from "./Core/Help";
import WhyChoose from "./Home/WhyChoose";
import StressFree from "./Home/StressFree";
import HealthReport from "./Home/HealthReport";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";
import Invest from "./Core/Invest";
import Earn from "./Core/Earn";
import BuySell from "./Core/BuySell";

function Core() {
  return (
    <>
      <Helmet>
        <title>Estate Now</title>
        <meta
          name="description"
          content="This is the home page of my website."
        />
      </Helmet>
      <Banner />
      <Services />
      <Process />
      <Invest />
      <Modular />
      <Earn />
      <Help />
      <WhyChoose />
      <StressFree />
      <BuySell />
      <HealthReport />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Core;
