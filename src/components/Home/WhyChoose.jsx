import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import TransparentPricing from "../../assets/Home/Why Choose/Transparent Pricing.svg";
import GuaranteedTimelines from "../../assets/Home/Why Choose/Guaranteed Timelines.svg";
import DigitalTracking from "../../assets/Home/Why Choose/Digital Tracking.svg";

function WhyChoose() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Core Services Snapshots
        </p>
        <h2>Why Choose EstateIQ </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular  reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards why-choose">
          <div className="home-modular-card">
            <img src={TransparentPricing} alt="Transparent Pricing" />
            <div className="home-modular-card-text">
              <h3>Transparent Pricing </h3>
              <p>No hidden fees</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={GuaranteedTimelines} alt="Guaranteed Timelines" />
            <div className="home-modular-card-text">
              <h3>Guaranteed Timelines </h3>
              <p>Backed by Sakala service standards.</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={DigitalTracking} alt="Digital Tracking" />
            <div className="home-modular-card-text">
              <h3>Digital Tracking </h3>
              <p>Know where your file stands at every stage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
