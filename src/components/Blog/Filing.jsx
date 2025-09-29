import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Blog/Trends/Filing.png";
import Khata from "../../assets/Blog/Trends/Khata.png";
import EC from "../../assets/Blog/Trends/EC.png";
import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
// import Filing from "../../assets/Blog/Trends/Filing.png";
import StressFree from "../Home/StressFree";
import FAQ from "../Home/FAQ";

function Filing() {
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
              Why Modular & Portable Homes are the Future of Housing in
              Bangalore
            </h1>
            <p>Posted 21 Jul, 2025</p>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="Modular & Portable Homes" />
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left">
          <p>
            Bangalore’s housing demand is evolving — and with land &
            construction costs rising, modular and portable homes are becoming
            an attractive, practical alternative. EstateIQ builds modern,
            affordable modular homes designed for quick deployment, energy
            efficiency, and flexible usage. Here’s why modular housing makes
            sense for Bangalore buyers, students, and hospitality owners.
          </p>
          <div className="blog-page-container-left-section">
            <h2>What are modular & portable homes?</h2>
            <p>
              Modular homes are factory-built units assembled onsite. Portable
              homes are prefabricated units designed for mobility and short-term
              placement. Both approaches use prefabrication to reduce
              construction time, cost, and waste.
            </p>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Key benefits for Bangalore</h2>
            <ul>
              <li>
                <strong>Speed of delivery</strong> — A modular home can be ready
                in weeks instead of months; perfect for urgent housing needs or
                resort projects.
              </li>
              <li>
                <strong>Cost-efficiency</strong> — Lower labor and waste reduce
                overall build costs compared to traditional construction.
              </li>
              <li>
                <strong>Quality & consistency</strong> — Factory-controlled
                production yields consistent finishes and tighter tolerances.
              </li>
              <li>
                <strong>Sustainability</strong> — Many modular builds use
                eco-friendly materials and efficient fittings, reducing the
                carbon footprint.
              </li>
              <li>
                <strong>Flexibility</strong> — Units can be designed for student
                housing, compact family homes, resort cottages, or temporary
                site offices.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Use cases ideal for Bangalore</h2>
            <ul>
              <li>
                <strong>Student & PG housing</strong> — Near tech parks and
                universities.
              </li>
              <li>
                <strong>Resorts & holiday stays</strong> — In outskirts (Coorg,
                Sakleshpur, resorts near Bangalore).
              </li>
              <li>
                <strong>Micro-housing</strong> — For young professionals in
                high-rent areas.
              </li>
              <li>
                <strong>Corporate guest houses</strong> — And temporary worker
                accommodations.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>EstateIQ’s modular offering</h2>
            <ul>
              <li>
                <strong>Customized layouts</strong> — From single-room studios
                to 2BHK modular units.
              </li>
              <li>
                <strong>Turnkey delivery</strong> — Design → factory build →
                site assembly → finishes.
              </li>
              <li>
                <strong>Compliance support</strong> — We handle permits, site
                prep, and Khata/plan integration.
              </li>
              <li>
                <strong>Post-assembly services</strong> — Warranty, maintenance
                packages, and modular upgrades.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Things to consider before choosing modular</h2>
            <ul>
              <li>
                <strong>Site access &amp; foundation</strong> — Some modular
                units need basic foundations and crane access.
              </li>
              <li>
                <strong>Local approvals</strong> — Modular construction still
                needs plan sanction and adherence to local bylaws — EstateIQ
                supports every step.
              </li>
              <li>
                <strong>Design alignment</strong> — Choose finishes &amp;
                insulation appropriate for Bangalore’s climate.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Final takeaway</h2>
            <p>
              Modular homes are not just a trend — they’re a practical solution
              for Bangalore’s housing crunch. Faster, greener, and customizable,
              they’re ideal for investors, universities, resorts, and
              forward-thinking homeowners.
            </p>
          </div>
          <Link to="/modular-services" className="primary-btn">
            <p>Explore Modular Home Options with EstateIQ</p>
          </Link>
        </div>
        <div className="blog-page-container-right">
          <Link
            to="/blog/must-know-legal-documents-for-property-buyers-and-sellers"
            className="blog-page-container-right-set"
          >
            <div className="blog-page-container-right-set-img">
              <img src={Khata} alt="Khata" />
            </div>
            <p>
              Essential Real Estate Legal Documents in Bangalore, what Every
              Buyer & Seller Must Know
            </p>
          </Link>
          <Link
            to="/blog/property-health-report"
            className="blog-page-container-right-set"
          >
            <div className="blog-page-container-right-set-img">
              <img src={EC} alt="Encumbrance Certificate" />
            </div>
            <p>
              Why Every Bangalore Buyer Needs a Property Health Report Before
              Buying
            </p>
          </Link>
          <Link
            to="/blog/rental-guarantee-and-property-management"
            className="blog-page-container-right-set"
          >
            <div className="blog-page-container-right-set-img">
              <img src={Mistakes} alt="Property Documentation Mistakes" />
            </div>
            <p>
              How Rental Guarantee & Property Management Works: A Guide for
              Bangalore Property Owners
            </p>
          </Link>
          {/* <Link to="/blog/modular-and-portable-homes" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Filing} alt=" Property Tax Filing" />
            </div>
            <p>Why Modular & Portable Homes are the Future of Housing in Bangalore</p>
          </Link> */}
        </div>
      </section>
      <StressFree />
      <FAQ />
    </>
  );
}

export default Filing;
