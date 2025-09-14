import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Blog/Banner";
import Trends from "./Blog/Trends";
import Modular from "./Home/Modular";
import StressFree from "./Home/StressFree";
import WhyChoose from "./Home/WhyChoose";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";

function Blog() {
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
      <Trends />
      <Modular />
      <StressFree />
      <WhyChoose />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Blog;
