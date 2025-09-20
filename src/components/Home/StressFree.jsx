import React from "react";
import { Link } from "react-router-dom";

function StressFree() {
  return (
    <section className="home-stress-free">
      <div className="home-stress-free-text">
        <h2>Make Property Paperwork Stress-Free</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
          risus etiam. Elementum sit nullam ac donec natoque{" "}
        </p>
      </div>
      <Link to="/contact" className="primary-btn white">
        <p>Start Your Service Today </p>
      </Link>
    </section>
  );
}

export default StressFree;
