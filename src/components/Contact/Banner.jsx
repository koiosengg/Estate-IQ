import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Contact/Banner/Banner Image.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-left-text">
          <h1>
            Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
            risus etiam.
          </h1>
          <p>
            From Khata transfers to property registration EstateIQ makes
            property paperwork simple, transparent, and hassle-free
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
