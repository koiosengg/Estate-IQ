import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import Khata from "../../assets/Home/Core/Khata.png";
import EncumbranceCertificate from "../../assets/Home/Core/Encumbrance Certificate.png";
import SaleDeed from "../../assets/Home/Core/Sale Deed.png";
import PropertyTax from "../../assets/Home/Core/Property Tax.png";
import PropertyHealthReport from "../../assets/Home/Core/Property Health Report.png";

function Core() {
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
      <div className="home-core">
        <div
          ref={sectionRef}
          className={`home-core-container reveal ${isVisible ? "in-view" : ""}`}
        >
          <div className="home-core-set">
            <div className="home-core-set-img">
              <img src={Khata} alt="Khata / e-Khata Filing" />
            </div>
            <div className="home-core-set-text">
              <h3>Khata / e-Khata Filing</h3>
              <p>
                Get your property’s Khata filed or transferred quickly and
                accurately. Get your property’s Khata filed or transferred
                quickly and accurately.
              </p>
            </div>
          </div>
          <div className="home-core-set">
            <div className="home-core-set-img">
              <img
                src={EncumbranceCertificate}
                alt="Encumbrance Certificate (EC)"
              />
            </div>
            <div className="home-core-set-text">
              <h3>Encumbrance Certificate (EC)</h3>
              <p>
                Get your property’s Khata filed or transferred quickly and
                accurately. Get your property’s Khata filed or transferred
                quickly and accurately.
              </p>
            </div>
          </div>
          <div className="home-core-set">
            <div className="home-core-set-img">
              <img src={SaleDeed} alt="Sale Deed & Document Drafting" />
            </div>
            <div className="home-core-set-text">
              <h3>Sale Deed & Document Drafting</h3>
              <p>
                Get your property’s Khata filed or transferred quickly and
                accurately. Get your property’s Khata filed or transferred
                quickly and accurately.
              </p>
            </div>
          </div>
          <div className="home-core-set">
            <div className="home-core-set-img">
              <img src={PropertyTax} alt="Property Tax Compliance" />
            </div>
            <div className="home-core-set-text">
              <h3>Property Tax Compliance</h3>
              <p>
                Get your property’s Khata filed or transferred quickly and
                accurately. Get your property’s Khata filed or transferred
                quickly and accurately.
              </p>
            </div>
          </div>
          <div className="home-core-set">
            <div className="home-core-set-img">
              <img src={PropertyHealthReport} alt="Property Health Report" />
            </div>
            <div className="home-core-set-text">
              <h3>Property Health Report</h3>
              <p>
                Get your property’s Khata filed or transferred quickly and
                accurately. Get your property’s Khata filed or transferred
                quickly and accurately.
              </p>
            </div>
          </div>
        </div>
        <Link to="/core-services" className="primary-btn">
          <p>View Details</p>
        </Link>
      </div>
    </section>
  );
}

export default Core;
