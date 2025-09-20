import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Property Health Report/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Property Health Report (Due Diligence Service) </h1>
          <p>Protect Your Investment</p>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Get My Report Now </p>
        </a>
      </div>
      <div className="banner-right">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </section>
  );
}

export default Banner;
