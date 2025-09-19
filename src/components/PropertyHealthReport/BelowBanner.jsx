import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Image from "../../assets/Property Health Report/Below Banner/Desktop Image.svg";

function BelowBanner() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section
      className="home-faq-container modular "
      style={{ background: "#FBF5F9" }}
    >
      <div className="home-faq">
        <div className="home-faq-text">
          <h2>Secure Your Investment with Expert Property Checks</h2>
          <p>
            Most Bangalore buyers discover legal issues after purchase. Our
            Property Health Report ensures you buy with confidence. Get
            expert-verified compliance checks on ownership, taxes, encumbrance,
            and approvals – all delivered digitally.
          </p>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`home-faq-img reveal ${isVisible ? "in-view" : ""}`}
      >
        <img src={Image} alt="Property Health Report" />
      </div>
    </section>
  );
}

export default BelowBanner;
