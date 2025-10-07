import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Process from "./Home/Process";
import Core from "./Home/Core";
import Modular from "./Home/Modular";
import WhyChoose from "./Home/WhyChoose";
import StressFree from "./Home/StressFree";
import HealthReport from "./Home/HealthReport";
import About from "./Home/About";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";
import Hub from "./Home/Hub";

function Home() {
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
      <Process />
      <Core />
      <Modular />
      <Hub />
      <WhyChoose />
      <StressFree />
      <HealthReport />
      <About />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Home;
