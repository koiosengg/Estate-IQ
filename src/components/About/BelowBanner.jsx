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
        <h2>About EstateIQ</h2>
      </div>
      <div className="home-about">
        <div className="home-about-info">
          <div className="home-about-text">
            <h3>Your Trusted Partner in Real Estate</h3>
            <p>
              EstateIQ was founded with one mission: to simplify real estate
              documentation and compliance in Bangalore. We combine legal
              expertise, process efficiency, and technology to make property
              ownership stress-free for homeowners, buyers, and investors.
            </p>
          </div>
          <div className="home-about-text">
            <p>
              Unlike traditional agents, EstateIQ provides full transparency,
              clear pricing, and guaranteed timelines helping you save time,
              money, and peace of mind
            </p>
          </div>
        </div>
        <div className="home-about-img">
          <img
            src={Img}
            alt="About Estate IQ"
            ref={sectionRef}
            className={` reveal ${isVisible ? "in-view" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}

export default BelowBanner;
