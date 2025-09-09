import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Process from "./Home/Process";
import Core from "./Home/Core";

function Home() {
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
      <Process />
      <Core />
    </>
  );
}

export default Home;
