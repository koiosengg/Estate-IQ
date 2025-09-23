import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Image from "../../assets/Home/FAQ/Desktop Image.svg";

function FAQ() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="home-faq-container">
      <div className="home-faq">
        <div className="home-faq-text">
          <h2>
            Need Help?
            <br className="desktop" /> Learn More About What We Do.
          </h2>
          <p>
            Have questions about property documentation, compliance or
            investment? Our experts are here to guide you with clear answers,
            transparent processes, and timely support.
          </p>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Talk to an Expert</p>
        </a>
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

export default FAQ;
