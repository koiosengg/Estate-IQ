import React, { useRef } from "react";
import useInView from "../useInView";
import Khata from "../../assets/Blog/Trends/Khata.png";
import EC from "../../assets/Blog/Trends/EC.png";
import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
import Filing from "../../assets/Blog/Trends/Filing.png";

function Trends() {
  // Create refs
  const khataRef = useRef(null);
  const ecRef = useRef(null);
  const mistakesRef = useRef(null);
  const filingRef = useRef(null);

  // Track visibility for each
  const isKhataVisible = useInView(khataRef);
  const isECVisible = useInView(ecRef);
  const isMistakesVisible = useInView(mistakesRef);
  const isFilingVisible = useInView(filingRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Blog
        </p>
        <h2>Property Insights & Trends</h2>
      </div>

      <div className="blog-trends">
        <div
          className={`blog-trends-set reveal ${
            isKhataVisible ? "in-view" : ""
          }`}
          ref={khataRef}
        >
          <div className="blog-trends-set-img">
            <img src={Khata} alt="Khata" />
          </div>
          <h3>How to Get a Khata in Bangalore: Step by Step</h3>
        </div>

        <div
          className={`blog-trends-set reveal ${isECVisible ? "in-view" : ""}`}
          ref={ecRef}
        >
          <div className="blog-trends-set-img">
            <img src={EC} alt="Encumbrance Certificate" />
          </div>
          <h3>What is an Encumbrance Certificate and Why It Matters</h3>
        </div>

        <div
          className={`blog-trends-set reveal ${
            isMistakesVisible ? "in-view" : ""
          }`}
          ref={mistakesRef}
        >
          <div className="blog-trends-set-img">
            <img src={Mistakes} alt="Property Documentation Mistakes" />
          </div>
          <h3>Common Property Documentation Mistakes and How to Avoid Them</h3>
        </div>

        <div
          className={`blog-trends-set reveal ${
            isFilingVisible ? "in-view" : ""
          }`}
          ref={filingRef}
        >
          <div className="blog-trends-set-img">
            <img src={Filing} alt="Property Tax Filing" />
          </div>
          <h3>Complete Guide to Property Tax Filing in Bangalore</h3>
        </div>
      </div>
    </section>
  );
}

export default Trends;
