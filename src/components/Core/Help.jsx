import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Image from "../../assets/Core/Help/Desktop Image.svg";

function Help() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="home-faq-container">
      <div className="home-faq">
        <div className="home-faq-text">
          <h2>Need Help With Other Services? Reach Out Today</h2>
          <p>
            We provide solutions beyond the usual. Get in touch, and we’ll
            assist you with your specific needs.
          </p>
        </div>
        <Link to="/contact" className="primary-btn">
          <p>Contact Us</p>
        </Link>
      </div>
      <div
        ref={sectionRef}
        className={`home-faq-img reveal ${isVisible ? "in-view" : ""}`}
      >
        <img src={Image} alt="FAQ Icon" />
      </div>
    </section>
  );
}

export default Help;
