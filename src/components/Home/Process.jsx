import React, { useRef } from "react";
import DesktopImage from "../../assets/Home/Process/Desktop Image.svg";
import MobileImage from "../../assets/Home/Process/Mobile Image.svg";
import BackgroundImage from "../../assets/Home/Process/Background Image.svg";
import useInView from "../useInView";

function Process() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <img
        src={BackgroundImage}
        alt="Background Image"
        className="template-background"
      />
      <div className="template-heading">
        <p>
          <span></span> How does it work
        </p>
        <h2>Your Property Work in 4 Easy Steps</h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-process reveal ${isVisible ? "in-view" : ""}`}
      >
        <img src={DesktopImage} className="desktop" alt="Estate IQ Process" />
        <img src={MobileImage} className="mobile" alt="Estate IQ Process" />
      </div>
    </section>
  );
}

export default Process;
