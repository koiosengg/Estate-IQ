import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Image from "../../assets/Modular/Below Banner/Desktop Image.svg";

function BelowBanner() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="home-faq-container" style={{background:"#FBF5F9"}}>
      <div className="home-faq">
        <div className="home-faq-text">
          <h2>Smart Modular & Portable Homes in Bangalore</h2>
          <p>
            Housing in Bangalore is expensive and time-consuming to build.
            EstateIQ offers modular and portable homes that are faster, greener,
            and more affordable. From compact student rooms to resort-style
            cottages, we make housing flexible and future-ready.
          </p>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`home-faq-img reveal ${isVisible ? "in-view" : ""}`}
      >
        <img src={Image} alt="Smart Modular & Portable Homes in Bangalore" />
      </div>
    </section>
  );
}

export default BelowBanner;
