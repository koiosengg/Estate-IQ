import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";

function Navbar() {
  return (
    <header>
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Estate IQ Logo" />
      </Link>
      <nav>
        <div className="navbar-link">
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
            <Link to="/" className="navbar-dropdwon-link">
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
            <Link to="/" className="navbar-dropdwon-link">
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
            <Link to="/" className="navbar-dropdwon-link">
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
          <Link to="/FAQ">FAQ</Link>
        </div>
      </nav>
      <Link to="/contact" className="primary-btn">
        <p>Contact Us</p>
      </Link>
    </header>
  );
}

export default Navbar;
