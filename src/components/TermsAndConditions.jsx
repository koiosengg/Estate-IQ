import React from "react";

function TermsAndConditions() {
  return (
    <>
      <section className="banner privacy-policy">
        <div className="banner-left">
          <div className="banner-left-text">
            <h1>Terms & Conditions</h1>
          </div>
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left privacy-policy">
          <p>
            Welcome to Estate Now. By using our website and services, you agree
            to the following terms:
          </p>
          <div className="blog-page-container-left-section">
            <h2>Services</h2>
            <p>
              Estate Now provides real estate-related services including but not
              limited to:
            </p>
            <ul className="normal">
              <li>Property documentation &amp; legal compliance.</li>
              <li>Rental guarantee &amp; property management.</li>
              <li>Brokerage — buying/selling support.</li>
              <li>Modular housing solutions.</li>
              <li>Real estate education &amp; consultation.</li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>User Responsibilities</h2>
            <ul className="normal">
              <li>
                Provide accurate and complete information for service requests.
              </li>
              <li>
                Ensure compliance with applicable laws while availing services.
              </li>
              <li>
                Maintain confidentiality of your account details (if
                applicable).
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Payments & Refunds</h2>
            <ul className="normal">
              <li>All payments are due — as per service agreements.</li>
              <li>
                Fees once paid are non-refundable — unless otherwise agreed in
                writing.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Limitation of Liability</h2>
            <ul className="normal">
              <li>
                Estate Now acts as a service facilitator — and is not
                responsible for disputes between buyers, sellers, tenants, or
                third parties.
              </li>
              <li>
                We make best efforts for accuracy — but do not guarantee
                outcomes of government processes (e.g., Khata transfers,
                approvals).
              </li>
              <li>
                Estate Now will not be liable — for indirect or consequential
                damages.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Intellectual Property</h2>
            <ul className="normal">
              <li>
                All website content, branding, and materials — belong to Estate
                Now.
              </li>
              <li>
                Users may not copy, reproduce, or distribute content — without
                written consent.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Termination of Services</h2>
            <ul className="normal">
              <li>
                We reserve the right to refuse or terminate services if a user
                violates terms or provides false information.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Governing Law</h2>
            <ul className="normal">
              <li>
                These Terms are governed by the laws of India and the
                jurisdiction of Bangalore, Karnataka.
              </li>
            </ul>
          </div>
          <div className="blog-page-container-left-section">
            <h2>Contact Us</h2>
            <p>Email: ar@estatenow.in@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsAndConditions;
