import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Contact/Banner";
import Form from "./Contact/Form";
import Links from "./Contact/Links";
import Testimony from "./Home/Testimony";
import FAQ from "./Home/FAQ";

function Contact() {
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
      <Form />
      <Links />
      <Testimony />
      <FAQ />
    </>
  );
}

export default Contact;
