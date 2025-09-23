import React from "react";
import { Link } from "react-router-dom";

function StressFree() {
  return (
    <section className="home-stress-free">
      <div className="home-stress-free-text">
        <h2>Make Property Paperwork Stress-Free</h2>
        <p>
          Simplify property paperwork with expert help. From Khata to tax
          filing, we ensure accuracy, compliance, and peace of mind at every
          step.
        </p>
      </div>
      <Link to="/contact" className="primary-btn white">
        <p>Click here to Start Today </p>
      </Link>
    </section>
  );
}

export default StressFree;
