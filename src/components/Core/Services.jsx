import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Khata from "../../assets/Core/Services/Khata.png";
import EC from "../../assets/Core/Services/EC.png";
import SalesDeed from "../../assets/Core/Services/Sales Deed.png";
import PropertyTax from "../../assets/Core/Services/Property Tax.png";
import PropertyHealthReport from "../../assets/Core/Services/Property Health Report.png";

function Services() {
  // Create separate refs
  const khataRef = useRef(null);
  const ecRef = useRef(null);
  const salesDeedRef = useRef(null);
  const taxRef = useRef(null);
  const healthRef = useRef(null);

  // Pass each ref into useInView
  const isKhataVisible = useInView(khataRef);
  const isECVisible = useInView(ecRef);
  const isSalesDeedVisible = useInView(salesDeedRef);
  const isTaxVisible = useInView(taxRef);
  const isHealthVisible = useInView(healthRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> How does it work
        </p>
        <h2>Your Property Work in 4 Easy Steps</h2>
      </div>
      <div className="core-services">
        <div className="home-about">
          <div className="home-about-info">
            <div className="home-about-text">
              <h3>Khata / E-Khata Filling</h3>
              <p>
                A Khata is your property’s official account with BBMP, required
                for tax payment and property ownership.
              </p>
            </div>
            <div className="home-about-questions">
              <div className="home-about-question">
                <h4>Why it matters?</h4>
                <p>
                  Without a valid Khata, you can’t sell, transfer, or build on
                  your property.
                </p>
              </div>
              <div className="home-about-question">
                <h4>How can we help?</h4>
                <p>
                  EstateIQ files or transfers your Khata seamlessly, ensuring
                  accuracy and compliance.
                </p>
              </div>
            </div>
            <Link to="/" className="primary-btn">
              <p>Get my Khata Filled</p>
            </Link>
          </div>
          <div className="home-about-img">
            <img
              src={Khata}
              alt="Khata / E-Khata Filling Estate IQ"
              ref={khataRef}
              className={`reveal ${isKhataVisible ? "in-view" : ""}`}
            />
          </div>
        </div>

        <div className="home-about">
          <div className="home-about-info">
            <div className="home-about-text">
              <h3>Encumbrance Certificate (EC)</h3>
              <p>
                The EC shows if your property has any legal/financial dues (like
                loans).
              </p>
            </div>
            <div className="home-about-questions">
              <div className="home-about-question">
                <h4>Why it matters?</h4>
                <p>
                  Without an EC, you won’t know if your property has legal or
                  financial issues.
                </p>
              </div>
              <div className="home-about-question">
                <h4>How can we help?</h4>
                <p>
                  We apply and deliver your EC digitally or physically within
                  days.
                </p>
              </div>
            </div>
            <Link to="/" className="primary-btn">
              <p>Request My EC</p>
            </Link>
          </div>
          <div className="home-about-img">
            <img
              src={EC}
              alt="Encumbrance Certificate (EC) Estate IQ"
              ref={ecRef}
              className={`reveal ${isECVisible ? "in-view" : ""}`}
            />
          </div>
        </div>

        <div className="home-about">
          <div className="home-about-info">
            <div className="home-about-text">
              <h3>Sale Deed & Document Drafting</h3>
              <p>Incorrect drafting can cause disputes and legal risks.</p>
            </div>
            <div className="home-about-questions">
              <div className="home-about-question">
                <h4>Why it matters?</h4>
                <p>Incorrect drafting can cause disputes and legal risks</p>
              </div>
              <div className="home-about-question">
                <h4>How can we help?</h4>
                <p>
                  Our team drafts airtight, legally valid sale deeds and related
                  agreements.
                </p>
              </div>
            </div>
            <Link to="/" className="primary-btn">
              <p>Get My Sale Deed Drafted</p>
            </Link>
          </div>
          <div className="home-about-img">
            <img
              src={SalesDeed}
              alt="Sale Deed & Document Drafting Estate IQ"
              ref={salesDeedRef}
              className={`reveal ${isSalesDeedVisible ? "in-view" : ""}`}
            />
          </div>
        </div>

        <div className="home-about">
          <div className="home-about-info">
            <div className="home-about-text">
              <h3>Property Tax & Compliance</h3>
              <p>Annual tax paid to BBMP on your property.</p>
            </div>
            <div className="home-about-questions">
              <div className="home-about-question">
                <h4>Why it matters?</h4>
                <p>Non-payment = fines, legal issues, and resale problems.</p>
              </div>
              <div className="home-about-question">
                <h4>How can we help?</h4>
                <p>
                  EstateIQ ensures timely filing, correction of past dues, and
                  receipts for proof.
                </p>
              </div>
            </div>
            <Link to="/" className="primary-btn">
              <p>Pay My Property Tax Now</p>
            </Link>
          </div>
          <div className="home-about-img">
            <img
              src={PropertyTax}
              alt="Property Tax & Compliance Estate IQ"
              ref={taxRef}
              className={`reveal ${isTaxVisible ? "in-view" : ""}`}
            />
          </div>
        </div>

        <div className="home-about">
          <div className="home-about-info">
            <div className="home-about-text">
              <h3>Property Health Report (PTI Score)</h3>
              <p>
                A unique EstateIQ service — a full legal & compliance check on
                your property.
              </p>
            </div>
            <div className="home-about-questions">
              <div className="home-about-question">
                <h4>Why it matters?</h4>
                <p>Avoid buying disputed or problematic properties.</p>
              </div>
              <div className="home-about-question">
                <h4>How can we help?</h4>
                <p>
                  We verify Khata, EC, tax records, and encumbrances, then
                  provide a PTI Score.
                </p>
              </div>
            </div>
            <Link to="/" className="primary-btn">
              <p>Get My Sale Deed Drafted</p>
            </Link>
          </div>
          <div className="home-about-img">
            <img
              src={PropertyHealthReport}
              alt="Property Health Report (PTI Score)"
              ref={healthRef}
              className={`reveal ${isHealthVisible ? "in-view" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
