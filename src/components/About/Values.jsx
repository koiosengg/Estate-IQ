import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Integrity from "../../assets/About/Values/Integrity.svg";
import Efficiency from "../../assets/About/Values/Efficiency.svg";
import Transparency from "../../assets/About/Values/Transparency.svg";
import Innovation from "../../assets/About/Values/Innovation.svg";

function Values() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template" style={{ background: "#FBF5F9" }}>
      <div className="template-heading">
        <p>
          <span></span> Core Services Snapshots
        </p>
        <h2>Core Values </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards">
          <div className="home-modular-card">
            <img src={Integrity} alt="Integrity " />
            <div className="home-modular-card-text">
              <h3>Integrity</h3>
              <p>100% ethical, no shortcuts.</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Efficiency} alt="Efficiency" />
            <div className="home-modular-card-text">
              <h3>Efficiency</h3>
              <p>Work done right, the first time.</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Transparency} alt="Transparency" />
            <div className="home-modular-card-text">
              <h3>Transparency</h3>
              <p>Clear timelines and pricing.</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Innovation} alt="Innovation" />
            <div className="home-modular-card-text">
              <h3>Innovation </h3>
              <p>Tech-driven solutions for property market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
