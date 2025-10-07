import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Img from "../../assets/About/Below Banner/Desktop Image.png";

function BelowBanner() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> About
        </p>
        <h2>Who We Are</h2>
      </div>
      <div className="home-about">
        <div className="home-about-info">
          <div className="home-about-text">
            <h3>Your Trusted Partner in Real Estate</h3>
            <p>
              At Estate Now, we make real estate simple, transparent, and
              stress-free. From essential legal documentation like sale deeds
              and Khata transfers, to rental management, property health checks,
              and even modular housing solutions — we offer end-to-end services
              for property owners, buyers, and investors.
            </p>
          </div>
          <div className="home-about-text">
            <p>
              Our mission is to bridge the gap between traditional property
              services and the future of PropTech by combining expertise, trust,
              and smart technology.
            </p>
          </div>
        </div>
        <div className="home-about-img">
          <img
            src={Img}
            alt="About Estate Now"
            ref={sectionRef}
            className={` reveal ${isVisible ? "in-view" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}

export default BelowBanner;
