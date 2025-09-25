import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Blog/Trends/EC.png";
import Khata from "../../assets/Blog/Trends/Khata.png";
// import EC from "../../assets/Blog/Trends/EC.png";
import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
import Filing from "../../assets/Blog/Trends/Filing.png";
import StressFree from "../Home/StressFree";
import FAQ from "../Home/FAQ";

function EC() {
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
              Why Every Bangalore Buyer Needs a Property Health Report Before
              Buying
            </h1>
            <p>Posted 21 Jul, 2025</p>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="Property Health Report" />
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left">
          <p>
            Real estate in Bangalore is attractive — but buying without proper
            due diligence can cost you dearly. A Property Health Report (PHR) is
            a compact, expert-verified due-diligence product that summarizes
            legal, tax, and compliance risks. Here’s why every buyer should
            order one before signing the offer.
          </p>
          <div className="blog-page-container-left-section">
            <h2>What does a Property Health Report cover?</h2>
            <p>A robust PHR from EstateIQ includes:</p>
            <ul>
              <li>
                <strong>Title &amp; ownership verification</strong> — sale deed,
                mother deed chain
              </li>
              <li>
                <strong>Encumbrance Certificate (EC) check</strong> — loans,
                mortgages, charges
              </li>
              <li>
                <strong>Khata &amp; property tax status</strong> —
                current/arrears
              </li>
              <li>
                <strong>Plan approvals &amp; zoning</strong> — BBMP/BDA status,
                OC/CC checks
              </li>
              <li>
                <strong>Litigation &amp; dispute search</strong> — court
                records, public notices
              </li>
              <li>
                <strong>Red flags summary &amp; PTI Score™</strong> —
                easy-to-understand 1–100 risk score
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Why it’s crucial in Bangalore</h2>
            <p>
              Bangalore’s rapid growth, multiple civic authorities, and diverse
              land-use history mean checks are complex. Issues we commonly find:
            </p>
            <ul className="normal">
              <li>Properties with missing or inconsistent title documents</li>
              <li>Unpaid tax arrears or pending utility charges</li>
              <li>Unauthorized constructions lacking approved plans</li>
              <li>Hidden mortgages or prior claims</li>
            </ul>
            <p>
              A PHR converts hours of legal research into a single, actionable
              report — saving time, money, and risk.
            </p>
          </div>
          <div className="blog-page-container-left-section">
            <h2>How EstateIQ delivers the PHR</h2>
            <ol>
              <li>
                <strong>Document collection</strong> — You upload or we fetch
                documents.
              </li>
              <li>
                <strong>Verification</strong> — Legal team checks title chain,
                EC, Khata, tax, and approvals.
              </li>
              <li>
                <strong>Analysis &amp; score</strong> — We produce a PTI Score
                and concise risk recommendations.
              </li>
              <li>
                <strong>Delivery</strong> — Report delivered digitally with
                next-step advice.
              </li>
            </ol>
            <p>
              Typical delivery time: 7–14 working days, depending on the
              complexity.
            </p>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Buyer-centric benefits</h2>
            <ul>
              <li>
                <strong>Buy with confidence</strong> — Negotiate from a position
                of knowledge.
              </li>
              <li>
                <strong>Avoid fraud</strong> — Detect prior liens or
                encumbrances early.
              </li>
              <li>
                <strong>Faster closure</strong> — Sellers with a pre-issued PHR
                sell faster and at better prices.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Final word</h2>
            <p>
              A Property Health Report is the most cost-effective safeguard
              against expensive surprises. Before you invest in Bangalore real
              estate, order a PHR and make a smart, evidence-backed decision.
            </p>
          </div>
          <a
            href="https://wa.me/917795561531"
            target="_blank"
            className="primary-btn"
          >
            <p>Order Your Property Health Report — EstateIQ</p>
          </a>
        </div>
        <div className="blog-page-container-right">
          <Link to="/blog/khata" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Khata} alt="Khata" />
            </div>
            <p>How to Get a Khata in Bangalore: Step by Step</p>
          </Link>
          {/* <Link to="/blog/ec" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={EC} alt="Encumbrance Certificate" />
            </div>
            <p>What is an Encumbrance Certificate and Why It Matters</p>
          </Link> */}
          <Link to="/blog/mistakes" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Mistakes} alt="Property Documentation Mistakes" />
            </div>
            <p>Common Property Documentation Mistakes and how to Avoid Them</p>
          </Link>
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

export default EC;
