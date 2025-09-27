import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Contact/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Let’s Make Property Easy Together</h1>
          <p>
            Have questions or need guidance?<br /> Our team is ready to help you
            navigate property documentation, compliance, and investments
            smoothly.
          </p>
        </div>
      </div>
      <div className="banner-right">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </section>
  );
}

export default Banner;
