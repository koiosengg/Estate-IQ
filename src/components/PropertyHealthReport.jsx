import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./PropertyHealthReport/Banner";
import BelowBanner from "./PropertyHealthReport/BelowBanner";
import Process from "./Home/Process";
import StressFree from "./Home/StressFree";
import Help from "./Core/Help";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";

function PropertyHealthReport() {
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
      <StressFree />
      <Help />
      <Testimony />
      <FAQ />
    </>
  );
}

export default PropertyHealthReport;
