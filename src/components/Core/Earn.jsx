import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import GuaranteedMonthlyRent from "../../assets/Core/Earn/Guaranteed Monthly Rent.svg";
import TenantBackgroundChecks from "../../assets/Core/Earn/Tenant Background Checks.svg";
import Repairs from "../../assets/Core/Earn/Repairs.svg";

function Earn() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);
  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Earn Rent Without Stress
        </p>
        <h2>
          We Guarantee Your Rent, Manage Tenants & <br className="desktop" />{" "}
          Handle Maintenance
        </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular  reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards why-choose">
          <div className="home-modular-card">
            <img src={GuaranteedMonthlyRent} alt="Guaranteed Monthly Rent" />
            <div className="home-modular-card-text">
              <h3>Guaranteed Monthly Rent</h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={TenantBackgroundChecks} alt="Tenant Background Checks" />
            <div className="home-modular-card-text">
              <h3>Tenant Background Checks </h3>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={Repairs} alt="Maintenance & Repairs" />
            <div className="home-modular-card-text">
              <h3>Maintenance & Repairs</h3>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Get a Free Rental Valuation</p>
        </a>
      </div>
    </section>
  );
}

export default Earn;
