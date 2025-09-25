import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
        <Link
          to="khata"
          className={`blog-trends-set reveal ${
            isKhataVisible ? "in-view" : ""
          }`}
          ref={khataRef}
        >
          <div className="blog-trends-set-img">
            <img src={Khata} alt="Real estate legal documents Bangalore: sale deed, khata, ec" />
          </div>
          <h3>
            Essential Real Estate Legal Documents in Bangalore, what Every Buyer
            & Seller Must Know
          </h3>
        </Link>

        <Link
          to="ec"
          className={`blog-trends-set reveal ${isECVisible ? "in-view" : ""}`}
          ref={ecRef}
        >
          <div className="blog-trends-set-img">
            <img src={EC} alt="Property Health Report" />
          </div>
          <h3>
            Why Every Bangalore Buyer Needs a Property Health Report Before
            Buying
          </h3>
        </Link>

        <Link
          to="mistakes"
          className={`blog-trends-set reveal ${
            isMistakesVisible ? "in-view" : ""
          }`}
          ref={mistakesRef}
        >
          <div className="blog-trends-set-img">
            <img src={Mistakes} alt="Rental Guarantee & Property Management" />
          </div>
          <h3>
            How Rental Guarantee & Property Management Works: A Guide for
            Bangalore Property Owners
          </h3>
        </Link>

        <Link
          to="filing"
          className={`blog-trends-set reveal ${
            isFilingVisible ? "in-view" : ""
          }`}
          ref={filingRef}
        >
          <div className="blog-trends-set-img">
            <img src={Filing} alt="Modular & Portable Homes" />
          </div>
          <h3>
            Why Modular & Portable Homes are the Future of Housing in Bangalore
          </h3>
        </Link>
      </div>
    </section>
  );
}

export default Trends;
