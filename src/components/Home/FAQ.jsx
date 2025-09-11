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
          <h2>Need Help? Learn More About What We Do.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
            risus etiam. Elementum sit nullam ac donec natoque elit. Sit
            consequat aliquam tellus commodo.
          </p>
        </div>
        <Link to="/" className="primary-btn">
          <p>Learn More</p>
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

export default FAQ;
