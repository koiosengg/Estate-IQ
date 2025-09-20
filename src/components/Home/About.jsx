import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Img from "../../assets/Home/About/Desktop Image.png";

function About() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> About
        </p>
        <h2>About EstateIQ</h2>
      </div>
      <div className="home-about">
        <div className="home-about-info">
          <div className="home-about-text">
            <h3>Lorem Ipsum</h3>
            <p>
              EstateIQ was founded with one mission: to simplify real estate
              documentation and compliance in Bangalore. We combine legal
              expertise, process efficiency, and technology to make property
              ownership stress-free for homeowners, buyers, and investors.
            </p>
          </div>
          <Link to="/about" className="secondary-btn">
            <p>Read More</p>
          </Link>
        </div>
        <div className="home-about-img">
          <img
            src={Img}
            alt="About Estate IQ"
            ref={sectionRef}
            className={` reveal ${isVisible ? "in-view" : ""}`}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
