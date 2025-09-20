import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-text">
          <img src={Logo} className="Estate IQ Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Aenean varius sit suscipit
            pharetra nulla pellentesque turpis.
          </p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/core-services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link className="mobile" to="/">
            Privacy policy
          </Link>
          <Link className="mobile" to="/">
            T&C
          </Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-container">
          <p>©All Copy Rights Reserved</p>
          <nav>
            <Link className="desktop" to="/">
              Privacy policy
            </Link>
            <Link className="desktop" to="/">
              T&C
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
