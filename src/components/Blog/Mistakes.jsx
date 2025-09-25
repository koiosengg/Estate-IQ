import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Blog/Trends/Mistakes.png";
import Khata from "../../assets/Blog/Trends/Khata.png";
import EC from "../../assets/Blog/Trends/EC.png";
// import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
import Filing from "../../assets/Blog/Trends/Filing.png";
import StressFree from "../Home/StressFree";
import FAQ from "../Home/FAQ";

function Mistakes() {
  return (
    <>
      <Helmet>
        <title>Estate IQ</title>
        <meta
          name="description"
          content="This is the home page of my website."
        />
      </Helmet>
      <section className="banner">
        <div className="banner-left">
          <Link to="/blog" className="banner-left-back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <mask
                id="mask0_46_2908"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_46_2908)">
                <path
                  d="M10.433 17.3333L17.8997 24.8L15.9997 26.6667L5.33301 16L15.9997 5.33333L17.8997 7.2L10.433 14.6667H26.6663V17.3333H10.433Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </Link>
          <div className="banner-left-text">
            <h1>
              How Rental Guarantee & Property Management Works: A Guide for
              Bangalore Property Owners
            </h1>
            <p>Posted 21 Jul, 2025</p>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="Rental Guarantee & Property Management" />
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left">
          <p>
            Owning rental property in Bangalore can be profitable — but it’s
            also time-consuming. Owners face tenant screening, late payments,
            property upkeep, and legal hassles. EstateIQ’s Rental Guarantee +
            Property Management model is built to remove these headaches and
            deliver predictable monthly income.
          </p>
          <div className="blog-page-container-left-section">
            <h2>What is a Rental Guarantee model?</h2>
            <p>
              In the Rental Guarantee model, EstateIQ offers property owners a
              guaranteed monthly rent for an agreed period (typically 6–24
              months). We take responsibility for tenant sourcing, background
              checks, maintenance, and collections. If tenant-paid rent falls
              short, EstateIQ covers the guaranteed amount (per the contract).
            </p>
          </div>
          <div className="blog-page-container-left-section">
            <h2>What EstateIQ handles</h2>
            <ul>
              <li>
                <strong>Tenant screening</strong> — ID verification, employment
                checks, rental history, credit background.
              </li>
              <li>
                <strong>Lease management</strong> — Drafting rent agreements,
                police verification, security deposit handling.
              </li>
              <li>
                <strong>Collections</strong> — Timely rent collection and
                consolidated owner payouts.
              </li>
              <li>
                <strong>Maintenance &amp; repairs</strong> — Routine upkeep
                managed via our vetted vendors.
              </li>
              <li>
                <strong>Legal support</strong> — Eviction assistance or dispute
                mediation if needed.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Who benefits most?</h2>
            <ul>
              <li>
                <strong>NRIs</strong> — who want remote, hassle-free rental
                income.
              </li>
              <li>
                <strong>Busy professionals / HNIs</strong> — who prefer passive
                rental returns.
              </li>
              <li>
                <strong>Property owners</strong> — looking for stable cash flow
                rather than market risk.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>How pricing & revenue work</h2>
            <ul>
              <li>
                <strong>Owner receives a guaranteed rent</strong> — slightly
                lower than potential market rent.
              </li>
              <li>
                <strong>EstateIQ earns the spread</strong> — by managing the
                property and optimizing occupancy.
              </li>
              <li>
                <strong>Additional optional fee</strong> — Maintenance &amp;
                management subscription.
              </li>
            </ul>
            <p>
              This model trades a small share of upside for predictable income
              and zero operational stress for the owner.
            </p>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Why EstateIQ’s approach is different</h2>
            <ul>
              <li>
                <strong>Legal-first tenancy</strong> — Every tenant is verified,
                agreements are airtight, and EstateIQ’s documentation integrates
                with our Property Health Report for layered safety.
              </li>
              <li>
                <strong>Local vendor network</strong> — Fast maintenance fixes
                at transparent costs.
              </li>
              <li>
                <strong>Transparent payouts</strong> — Monthly statements and
                tax receipts for owners.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>How to get started</h2>
            <ol className="normal">
              <li>Book a free rental valuation with EstateIQ.</li>
              <li>Sign a rental guarantee agreement terms and duration.</li>
              <li>We list, screen tenants, and begin occupancy</li>
              <li>You receive monthly guaranteed payments</li>
            </ol>
            <p>
              If you’d rather retain upside, EstateIQ also offers pure property
              management (no guarantee) with market-aligned rent and lower fees.
            </p>
          </div>
          <a
            href="https://wa.me/917795561531"
            target="_blank"
            className="primary-btn"
          >
            <p>Get a Free Rental Valuation — EstateIQ</p>
          </a>
        </div>
        <div className="blog-page-container-right">
          <Link to="/blog/khata" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Khata} alt="Khata" />
            </div>
            <p>How to Get a Khata in Bangalore: Step by Step</p>
          </Link>
          <Link to="/blog/ec" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={EC} alt="Encumbrance Certificate" />
            </div>
            <p>What is an Encumbrance Certificate and Why It Matters</p>
          </Link>
          {/* <Link to="/blog/mistakes" className="blog-page-container-right-set">
          <div className="blog-page-container-right-set-img">
            <img src={Mistakes} alt="Property Documentation Mistakes" />
          </div>
          <p>Common Property Documentation Mistakes and how to Avoid Them</p>
        </Link> */}
          <Link to="/blog/filing" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Filing} alt=" Property Tax Filing" />
            </div>
            <p>Complete Guide to Property Tax Filing in Bangalore</p>
          </Link>
        </div>
      </section>
      <StressFree />
      <FAQ />
    </>
  );
}

export default Mistakes;
