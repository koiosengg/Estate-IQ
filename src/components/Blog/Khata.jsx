import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Blog/Trends/Khata.png";
// import Khata from "../../assets/Blog/Trends/Khata.png";
import EC from "../../assets/Blog/Trends/EC.png";
import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
import Filing from "../../assets/Blog/Trends/Filing.png";
import StressFree from "../Home/StressFree";
import FAQ from "../Home/FAQ";

function Khata() {
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
              Essential Real Estate Legal Documents in Bangalore — What Every
              Buyer & Seller Must Know
            </h1>
            <p>Posted 21 Jul, 2025</p>
          </div>
        </div>
        <div className="banner-right">
          <img
            src={BannerImage}
            alt="Real estate legal documents Bangalore: sale deed, khata, ec"
          />
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left">
          <p>
            Buying or selling property in Bangalore involves more than a
            handshake. Accurate documentation is the single biggest factor that
            protects you from future disputes, tax problems, or registration
            delays. This guide lists the essential legal documents, explains why
            each matters, provides typical timelines, and shows how EstateIQ
            helps you verify and process everything quickly and correctly.
          </p>
          <div className="blog-page-container-left-section">
            <h2>Core Ownership Documents</h2>
            <ul>
              <li>
                <strong>Sale Deed / Conveyance Deed</strong> — The primary legal
                proof of ownership transfer. Must be registered at the
                Sub-Registrar.
              </li>
              <li>
                <strong>Mother Deed / Title Chain</strong> — Historical
                ownership record showing the chain of title; critical for
                establishing clean ownership.
              </li>
              <li>
                <strong>Possession Letter</strong> — Confirms buyer has taken
                physical possession (common in developer transactions).
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Municipal & Tax Records</h2>
            <ul>
              <li>
                <strong>Khata / e-Khata (BBMP / BDA)</strong> — Property account
                for tax and local approvals. Required for transfers and many
                municipal processes.
              </li>
              <li>
                <strong>Property Tax Receipts</strong> — Proof of paid taxes;
                unpaid arrears can block transfers or registration.
              </li>
              <li>
                <strong>Mutation Certificate</strong> — Updates civic records to
                the new owner after registration.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Financial & Encumbrance Checks</h2>
            <ul>
              <li>
                <strong>Encumbrance Certificate (EC)</strong> — Shows if the
                property has loans, mortgages, liens or charges over a period
                (recommended 13–30 years).
              </li>
              <li>
                <strong>Loan Documents / Lender NOC</strong> — Required if
                property was previously mortgaged; loan discharge documents
                should be produced at sale.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Legal Instruments & Special Documents</h2>
            <ul>
              <li>
                <strong>Power of Attorney (POA)</strong> — Authorises a person
                to act on owner’s behalf (common for NRIs). Use limited, vetted
                POAs to reduce risk.
              </li>
              <li>
                <strong>Gift Deed / Partition Deed / Will</strong> — Each
                transfer type has specific formalities and tax implications.
              </li>
              <li>
                <strong>Affidavits &amp; Indemnity Bonds</strong> — Used for
                name corrections, succession claims, or special declarations.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Approvals & Occupancy</h2>
            <ul>
              <li>
                <strong>Building Plan Approval / Sanction</strong> — Approved
                plan from BDA/BBMP for lawful construction.
              </li>
              <li>
                <strong>
                  Completion Certificate (CC) / Occupancy Certificate (OC)
                </strong>{" "}
                — Confirms building completed as per approved plan — critical
                for resale and loan approvals.
              </li>
              <li>
                <strong>Other NOCs (Fire, Environmental)</strong> — Required for
                certain projects, especially commercial or hospitality builds.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Timeline Expectations & Common Roadblocks</h2>
            <p>Typical timelines vary by document:</p>
            <ul>
              <li>
                <strong>
                  Completion Certificate (CC) / Occupancy Certificate (OC)
                </strong>{" "}
                — 2–7 days to draft; registration depends on Sub-Registrar
                schedules.
              </li>
              <li>
                <strong>Other NOCs (Fire, Environmental)</strong> — 15–45 days
                (varies by ward and document completeness).
              </li>
              <li>
                <strong>EC retrieval</strong> — 3–10 days.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>How EstateIQ Helps</h2>
            <ul>
              <li>
                <strong>Pre-check &amp; Title Chain Verification</strong> — We
                verify mother deeds, EC, Khata and tax history before you pay.
              </li>
              <li>
                <strong>Document Drafting &amp; Registration Support</strong> —
                Sale deed, POA vetting, affidavits, stamping and sub-registrar
                coordination.
              </li>
              <li>
                <strong>Approval &amp; Compliance Handling</strong> — Plan
                sanctions, OC follow-ups, and municipal liaison on your behalf.
              </li>
              <li>
                <strong>Property Health Report &amp; PTI Score</strong> — One
                consolidated report that flags legal/tax/approval risks and
                recommended remediation.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Quick Tips for Buyers & Sellers</h2>
            <ul className="normal">
              <li>
                Always ask for a complete title chain (mother deed) and a 13+
                year EC.
              </li>
              <li>
                Get Khata and property tax receipts verified before making
                payments.
              </li>
              <li>
                Be cautious with POAs; prefer limited, lawyer-vetted POAs and
                notarized/apostilled originals for NRIs.
              </li>
              <li>
                Use a Property Health Report to negotiate or walk away when
                needed.
              </li>
            </ul>
          </div>
          <a
            href="https://wa.me/917795561531"
            target="_blank"
            className="primary-btn"
          >
            <p>Protect Your Purchase - Order a property Health Report</p>
          </a>
        </div>
        <div className="blog-page-container-right">
          {/* <Link to="/blog/khata" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Khata} alt="Khata" />
            </div>
            <p>How to Get a Khata in Bangalore: Step by Step</p>
          </Link>  */}
          <Link to="/blog/ec" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={EC} alt="Encumbrance Certificate" />
            </div>
            <p>What is an Encumbrance Certificate and Why It Matters</p>
          </Link>
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

export default Khata;
