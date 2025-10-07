import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Image from "../../assets/Home/Health Report/Desktop Image.svg";

function HealthReport() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template home-health-report-container">
      <div
        ref={sectionRef}
        className={`home-health-report-img reveal ${
          isVisible ? "in-view" : ""
        }`}
      >
        <img src={Image} />
      </div>
      <div className="home-health-report">
        <div className="template-heading">
          <p>
            <span></span> Exclusive Service
          </p>
          <h2>
            Property <span>Health Report</span>{" "}
          </h2>
          <p className="template-heading-para">
            Estate Now doesn’t just handle property paperwork – we also design
            and build modern modular homes. Whether you’re a farmland owner,
            professional, or resort owner, our housing solutions are affordable,
            sustainable, and quick to set up.
          </p>
        </div>
        <div className="home-health-report-points">
          <div className="home-health-report-point">
            <h3>Ownership & Title Verification</h3>
            <p>Verify rightful ownership with complete title history.</p>
          </div>
          <hr />
          <div className="home-health-report-point">
            <h3>Encumbrance & Loan Checks</h3>
            <p>Check loans, mortgages, or pending legal claims.</p>
          </div>
          <hr />
          <div className="home-health-report-point">
            <h3>Khata & Tax Compliance</h3>
            <p>Ensure taxes paid and Khata updated properly.</p>
          </div>
          <hr />
          <div className="home-health-report-point">
            <h3>Building Approval & Zoning Review</h3>
            <p>Confirm legal approvals and zoning compliance.</p>
          </div>
        </div>
        <Link to="/property-health-report" className="primary-btn">
          <p>Request a Property Health Report</p>
        </Link>
      </div>
    </section>
  );
}

export default HealthReport;
