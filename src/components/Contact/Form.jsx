import React from "react";

function Form() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Contact Us
        </p>
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form">
        <form action="https://formspree.io/f/mpwjvoqz" method="POST">
          <div className="input-section">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="Name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-section">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-section">
            <label htmlFor="service">Service Required</label>
            <select id="service" name="Service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="Khata / e-Khata Filing">
                Khata / e-Khata Filing
              </option>
              <option value="Encumbrance Certificate">
                Encumbrance Certificate
              </option>
              <option value="Property Tax Filing">Property Tax Filing</option>
              <option value="Khata Transfer">Khata Transfer</option>
              <option value="Other Services">Other Services</option>
            </select>
          </div>

          <div className="input-section">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="Message"
              placeholder="Enter your message"
            />
          </div>

          <button className="primary-btn" type="submit">
            <p>Submit</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
