import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./About/Banner";
import BelowBanner from "./About/BelowBanner";
import Values from "./About/Values";
import Core from "./Home/Core";
import Process from "./Home/Process";
import Modular from "./Home/Modular";
import StressFree from "./Home/StressFree";
import HealthReport from "./Home/HealthReport";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";
import Why from "./About/Why";

function About() {
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
      <Why/>
      <Values />
      <Core />
      <Process />
      <Modular />
      <StressFree />
      <HealthReport />
      <Testimony />
      <FAQ />
    </>
  );
}

export default About;
