import React from "react";
import { Link } from "react-router-dom";

function StressFree() {
  return (
    <section className="home-stress-free">
      <div className="home-stress-free-text">
        <h2>Let’s Simplify Real Estate Together</h2>
        <p>
          At Estate Now, we make property ownership and management effortless.
          From documentation and rental guarantees to modular homes and
          investments — we’re here to guide you every step of the way.
        </p>
      </div>
      <Link to="/contact" className="primary-btn white">
        <p>Click here to Start Today </p>
      </Link>
    </section>
  );
}

export default StressFree;
