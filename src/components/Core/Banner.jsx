import React from "react";
import BannerImage from "../../assets/Core/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>Your One-Stop Partner for Property Services in Bangalore</h1>
          <p>
            Estate Now offers end-to-end property documentation and compliance
            services in Bangalore. Select a service to get started.
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
