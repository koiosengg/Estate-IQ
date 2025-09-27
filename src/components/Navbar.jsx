import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Menu from "/menu.png";
import MenuCancel from "/menu cancel.png";

function Navbar() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header>
      <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
        <img src={Logo} alt="Estate IQ Logo" />
      </Link>
      <nav className="desktop">
        <div className="navbar-link" >
          <a>Our Services</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            className="navbar-link-svg"
          >
            <path
              d="M13.7618 1.83333L7.09513 8.5L0.428467 1.83333L1.6118 0.65L7.09513 6.13333L12.5785 0.65L13.7618 1.83333Z"
              fill="#5E5E5E"
            />
          </svg>
          <div className="navbar-dropdwon">
            <Link to="/core-services" className="navbar-dropdwon-link">
              <div className="navbar-dropdwon-link-text">
                <p>Our Core Services</p>
                <span>Khata E- Filing, Encumbrance Certificate & more</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                  fill="#111111"
                />
              </svg>
            </Link>
            <Link to="/modular-services" className="navbar-dropdwon-link">
              <div className="navbar-dropdwon-link-text">
                <p>Modular & Portable Homes</p>
                <span>
                  Affordable, sustainable, and quick to set up housing solutions
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                  fill="#111111"
                />
              </svg>
            </Link>
            <Link to="/property-health-report" className="navbar-dropdwon-link">
              <div className="navbar-dropdwon-link-text">
                <p>Property Health report (Due Diligence Service)</p>
                <span>Protect Your Investment</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                  fill="#111111"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="navbar-link">
          <Link to="/about">About Us</Link>
        </div>
        <div className="navbar-link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbar-link">
          <Link to="/faq">FAQ</Link>
        </div>
      </nav>
      <Link to="/contact" className="primary-btn desktop">
        <p>Contact Us</p>
      </Link>
      <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
        <img
          src={Menu}
          alt="Mobile navbar open"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          alt="Mobile navbar close"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        />
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <nav>
          <div className="navbar-link" >
            <div className="navbar-link-section">
              <a>Our Services</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                className="navbar-link-svg"
              >
                <path
                  d="M13.7618 1.83333L7.09513 8.5L0.428467 1.83333L1.6118 0.65L7.09513 6.13333L12.5785 0.65L13.7618 1.83333Z"
                  fill="#5E5E5E"
                />
              </svg>
            </div>
            <div className="navbar-dropdwon">
              <Link
                to="/core-services"
                className="navbar-dropdwon-link"
                onClick={handleLinkClick}
              >
                <div className="navbar-dropdwon-link-text">
                  <p>Our Core Services</p>
                  <span>Khata E- Filing, Encumbrance Certificate & more</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                    fill="#111111"
                  />
                </svg>
              </Link>
              <Link
                to="/modular-services"
                className="navbar-dropdwon-link"
                onClick={handleLinkClick}
              >
                <div className="navbar-dropdwon-link-text">
                  <p>Modular & Portable Homes</p>
                  <span>
                    Affordable, sustainable, and quick to set up housing
                    solutions
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                    fill="#111111"
                  />
                </svg>
              </Link>
              <Link
                to="/property-health-report"
                className="navbar-dropdwon-link"
                onClick={handleLinkClick}
              >
                <div className="navbar-dropdwon-link-text">
                  <p>Property Health report (Due Diligence Service)</p>
                  <span>Protect Your Investment</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M8.7835 6.16663L5.05016 9.89996L6.00016 10.8333L11.3335 5.49996L6.00016 0.166626L5.05016 1.09996L8.7835 4.83329H0.666829V6.16663H8.7835Z"
                    fill="#111111"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="navbar-link">
            <Link
              to="/about"
              className="navbar-link-section"
              onClick={handleLinkClick}
            >
              <p> About Us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_202_7141"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect
                    width="16"
                    height="16"
                    transform="matrix(-1 0 0 1 16 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_202_7141)">
                  <path
                    d="M10.7833 8.66669L7.04998 12.4L7.99998 13.3334L13.3333 8.00002L7.99998 2.66669L7.04998 3.60002L10.7833 7.33335H2.66665V8.66669H10.7833Z"
                    fill="#111111"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div className="navbar-link">
            <Link
              to="/blog"
              className="navbar-link-section"
              onClick={handleLinkClick}
            >
              <p>Blog</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_202_7141"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect
                    width="16"
                    height="16"
                    transform="matrix(-1 0 0 1 16 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_202_7141)">
                  <path
                    d="M10.7833 8.66669L7.04998 12.4L7.99998 13.3334L13.3333 8.00002L7.99998 2.66669L7.04998 3.60002L10.7833 7.33335H2.66665V8.66669H10.7833Z"
                    fill="#111111"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div className="navbar-link">
            <Link
              to="/faq"
              className="navbar-link-section"
              onClick={handleLinkClick}
            >
              <p>FAQ</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_202_7141"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect
                    width="16"
                    height="16"
                    transform="matrix(-1 0 0 1 16 0)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_202_7141)">
                  <path
                    d="M10.7833 8.66669L7.04998 12.4L7.99998 13.3334L13.3333 8.00002L7.99998 2.66669L7.04998 3.60002L10.7833 7.33335H2.66665V8.66669H10.7833Z"
                    fill="#111111"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </nav>
        <Link to="/contact" className="primary-btn" onClick={handleLinkClick}>
          <p>Contact Us</p>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
