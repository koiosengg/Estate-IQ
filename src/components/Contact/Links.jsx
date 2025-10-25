import React, { useRef } from "react";
import useInView from "../useInView";
import Call from "../../assets/Contact/Links/Call.svg";
import WhatsApp from "../../assets/Contact/Links/WhatsApp.svg";
import Email from "../../assets/Contact/Links/Email.svg";
import Location from "../../assets/Contact/Links/Location.svg";

function Links() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <div className="contact-links">
      <div
        ref={sectionRef}
        className={`home-modular reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards">
          <a
            href="tel:+917795561531"
            className="home-modular-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Call} alt="Call" />
            <div className="home-modular-card-text">
              <h3>+91 77955 61531</h3>
              <p>Phone</p>
            </div>
          </a>
          <a
            href="https://wa.me/917795561531"
            className="home-modular-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsApp} alt="WhatsApp" />
            <div className="home-modular-card-text">
              <h3>WhatsApp</h3>
              <p>Click to chat</p>
            </div>
          </a>
          <a
            href="mailto:ar@estatenow.in"
            className="home-modular-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Email} alt="Email" />
            <div className="home-modular-card-text">
              <h3>ar@estatenow.in</h3>
              <p>Email</p>
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/3cAbfWtVugbNvnrp7"
            className="home-modular-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Location} alt="Location" />
            <div className="home-modular-card-text">
              <h3>Office</h3>
              <p>
                Ground Floor, 133, 13th Cross Road, Neeladri Nagar, Electronic
                City Phase I, Doddathoguru, Bengaluru, Karnataka 560100
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
