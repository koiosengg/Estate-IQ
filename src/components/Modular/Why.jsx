import React, { useRef } from "react";
import useInView from "../useInView";
import FastDeployment from "../../assets/Modular/Why/Fast Deployment.svg";
import LowerCost from "../../assets/Modular/Why/Lower Cost.svg";
import Customizable from "../../assets/Modular/Why/Customizable.svg";
import EcoFriendly from "../../assets/Modular/Why/Eco Friendly.svg";

function Why() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Why Us
        </p>
        <h2>Why EstateIQ Modular Homes? </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards">
          <div className="home-modular-card">
            <img src={FastDeployment} alt="Fast deployment ready in weeks " />
            <div className="home-modular-card-text">
              <h3>Fast deployment ready in weeks </h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img
              src={LowerCost}
              alt="Lower cost than traditional construction"
            />
            <div className="home-modular-card-text">
              <h3>Lower cost than traditional construction </h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Customizable} alt="Customizable layouts and interiors" />
            <div className="home-modular-card-text">
              <h3>Customizable layouts and interiors </h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={EcoFriendly} alt="Eco-friendly & sustainable materials" />
            <div className="home-modular-card-text">
              <h3>Eco-friendly & sustainable materials </h3>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Book a Consultation for Modular Homes</p>
        </a>
      </div>
    </section>
  );
}

export default Why;
