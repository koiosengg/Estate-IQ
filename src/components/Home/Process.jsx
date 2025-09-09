import React, { useRef } from "react";
import DesktopImage from "../../assets/Home/Process/Desktop Image.svg";
import useInView from "../useInView";

function Process() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
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
        <img src={DesktopImage} alt="Estate IQ Process" />
      </div>
    </section>
  );
}

export default Process;
