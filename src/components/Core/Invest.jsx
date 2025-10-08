import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import FractionalLandOwnership from "../../assets/Core/Invest/Fractional Land Ownership.svg";
import ConversionReadyPlots from "../../assets/Core/Invest/Conversion Ready Plots.svg";
import Reports from "../../assets/Core/Invest/Reports.svg";

function Invest() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);
  return (
    <section className="template" id="Land-Investment">
      <div className="template-heading">
        <p>
          <span></span> Invest. Manage. Grow
        </p>
        <h2>
          Invest in Bangalore’s Booming Land Market <br className="desktop" />
          Without Huge Capital
        </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular  reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards why-choose">
          <div className="home-modular-card">
            <img
              src={FractionalLandOwnership}
              alt="Fractional Land Ownership"
            />
            <div className="home-modular-card-text">
              <h3> Fractional Land Ownership</h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={ConversionReadyPlots} alt="Conversion Ready Plots" />
            <div className="home-modular-card-text">
              <h3>Conversion Ready Plots </h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Reports} alt="Exit Strategy & ROI Reports " />
            <div className="home-modular-card-text">
              <h3>Exit Strategy & ROI Reports </h3>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Join Estate Now Investments</p>
        </a>
      </div>
    </section>
  );
}

export default Invest;
