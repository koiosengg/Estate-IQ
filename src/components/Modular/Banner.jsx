import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Modular/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Smart Modular & Portable Homes in Bangalore</h1>
          <p>
            Estate Now builds modular and portable homes in Bangalore –
            affordable, eco-friendly, and quick housing for students,
            professionals, and resorts.
          </p>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Book a Consultation for Modular Homes </p>
        </a>
      </div>
      <div className="banner-right">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </section>
  );
}

export default Banner;
