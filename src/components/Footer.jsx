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
          <Link to="/">Services</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Blog</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-container">
          <p>©All Copy Rights Reserved</p>
          <nav>
            <Link>Privacy policy</Link>
            <Link>T&C</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
