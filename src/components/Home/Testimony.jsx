import React, { useRef } from "react";
import useInView from "../useInView";

function Testimony() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Social Proof
        </p>
        <h2>
          Trusted by homeowners, buyers, and <br className="desktop" />{" "}
          investors across Bangalore
        </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-testimony reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-testimony-set">
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
            risus etiam. Elementum sit nullam ac donec natoque elit. Sit
            consequat aliquam tellus commodo.
          </p>
          <div className="home-testimony-set-info">
            <h3>Rohith Chaudhary</h3>
            <span>Lawyer</span>
          </div>
        </div>
        <div className="home-testimony-set">
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
            risus etiam. Elementum sit nullam ac donec natoque elit. Sit
            consequat aliquam tellus commodo.
          </p>
          <div className="home-testimony-set-info">
            <h3>Rohith Chaudhary</h3>
            <span>Lawyer</span>
          </div>
        </div>
        <div className="home-testimony-set">
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus viverra mauris sed non
            risus etiam. Elementum sit nullam ac donec natoque elit. Sit
            consequat aliquam tellus commodo.
          </p>
          <div className="home-testimony-set-info">
            <h3>Rohith Chaudhary</h3>
            <span>Lawyer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
