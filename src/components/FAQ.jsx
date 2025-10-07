import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./FAQ/Banner";
import Khata from "./FAQ/Khata";
import EC from "./FAQ/EC";
import SaleDeed from "./FAQ/SaleDeed";
import PropertyTax from "./FAQ/PropertyTax";
import PropertyHealthReport from "./FAQ/PropertyHealthReport";
import WhyChoose from "./Home/WhyChoose";
import Testimony from "./Home/Testimony";
import Process from "./Home/Process";
import Modular from "./Home/Modular";
import StressFree from "./Home/StressFree";
import HomeFAQ from "./Home/FAQ";

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState("Khata");

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
      <section className="faq-options">
        <button
          className={activeFAQ === "Khata" ? "active-faq-option" : ""}
          onClick={() => {
            setActiveFAQ("Khata");
          }}
        >
          Khata Filing
        </button>
        <button
          className={activeFAQ === "EC" ? "active-faq-option" : ""}
          onClick={() => {
            setActiveFAQ("EC");
          }}
        >
          Encumbrance Certificate (EC)
        </button>
        <button
          className={activeFAQ === "SaleDeed" ? "active-faq-option" : ""}
          onClick={() => {
            setActiveFAQ("SaleDeed");
          }}
        >
          Sale Deed & Document Drafting
        </button>
        <button
          className={activeFAQ === "PropertyTax" ? "active-faq-option" : ""}
          onClick={() => {
            setActiveFAQ("PropertyTax");
          }}
        >
          Property Tax Compliance
        </button>
        <button
          className={
            activeFAQ === "PropertyHealthReport" ? "active-faq-option" : ""
          }
          onClick={() => {
            setActiveFAQ("PropertyHealthReport");
          }}
        >
          Property Health Report
        </button>
      </section>
      {activeFAQ === "Khata" && <Khata />}
      {activeFAQ === "EC" && <EC />}
      {activeFAQ === "SaleDeed" && <SaleDeed />}
      {activeFAQ === "PropertyTax" && <PropertyTax />}
      {activeFAQ === "PropertyHealthReport" && <PropertyHealthReport />}
      <WhyChoose />
      <Testimony />
      <Process />
      <Modular />
      <StressFree />
      <HomeFAQ />
    </>
  );
}

export default FAQ;
