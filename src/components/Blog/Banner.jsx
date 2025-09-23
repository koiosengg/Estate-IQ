import React from "react";
import BannerImage from "../../assets/Blog/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Insights to Guide Your Property Decisions</h1>
          <p>
            Explore expert tips, step-by-step guides, and practical advice on
            property documentation, compliance, and real estate in Bangalore.
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
