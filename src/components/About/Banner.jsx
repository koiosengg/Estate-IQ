import React from "react";
import BannerImage from "../../assets/About/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Simplifying Property Documentation in Bangalore</h1>
          <p>
            EstateIQ blends legal expertise, efficiency, and technology to
            simplify property documentation and compliance in Bangalore.
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
