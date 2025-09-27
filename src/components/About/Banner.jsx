import React from "react";
import BannerImage from "../../assets/About/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Smarter Property Decisions, Simplified.</h1>
          <p>
            Your trusted partner for real estate services, compliance, and
            property management in Bangalore..
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
