import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import VerifiedListings from "../../assets/Core/Buy Sell/Verified Listings.svg";
import TransparentPricing from "../../assets/Core/Buy Sell/Transparent Pricing.svg";
import LegalSafety from "../../assets/Core/Buy Sell/Legal Safety.svg";
import FasterSales from "../../assets/Core/Buy Sell/Faster Sales.svg";
import VerifiedBuyers from "../../assets/Core/Buy Sell/Verified Buyers.svg";
import MaximumValue from "../../assets/Core/Buy Sell/Maximum Value.svg";

function BuySell() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template" id="Brokerage">
      <div className="template-heading">
        <p>
          <span></span> Buy & Sell Safely
        </p>
        <h2>
          Every Deal is Estate Now Verified <br className="desktop" />
          No Fraud, No Surprises
        </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular  reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="core-buy-sell-set">
          <div className=" core-buy-sell-text">
            <h3>For Buyers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu lorem in nisi
              interdum euismod maecenas aliquam.
            </p>
          </div>
          <div className="home-modular-cards why-choose">
            <div className="home-modular-card">
              <img src={VerifiedListings} alt="Verified Listings" />
              <div className="home-modular-card-text">
                <h3>Verified Listings</h3>
              </div>
            </div>
            <div className="home-modular-card">
              <img src={TransparentPricing} alt="Transparent Pricing" />
              <div className="home-modular-card-text">
                <h3>Transparent Pricing </h3>
              </div>
            </div>
            <div className="home-modular-card">
              <img src={LegalSafety} alt="Legal Safety" />
              <div className="home-modular-card-text">
                <h3>Legal Safety</h3>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="mobile"
          style={{ width: "100%", border: "1px solid #F2F2F2" }}
        />
        <div className="core-buy-sell-set">
          <div className=" core-buy-sell-text">
            <h3>For Sellers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Arcu lorem in nisi
              interdum euismod maecenas aliquam.
            </p>
          </div>
          <div className="home-modular-cards why-choose">
            <div className="home-modular-card">
              <img src={FasterSales} alt="Faster Sales" />
              <div className="home-modular-card-text">
                <h3>Faster Sales</h3>
              </div>
            </div>
            <div className="home-modular-card">
              <img src={VerifiedBuyers} alt="Verified Buyers" />
              <div className="home-modular-card-text">
                <h3>Verified Buyers</h3>
              </div>
            </div>
            <div className="home-modular-card">
              <img src={MaximumValue} alt="Maximum Value" />
              <div className="home-modular-card-text">
                <h3>Maximum Value</h3>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/917795561531"
          target="_blank"
          className="primary-btn"
        >
          <p>Talk to an Estate Now Broker</p>
        </a>
      </div>
    </section>
  );
}

export default BuySell;
