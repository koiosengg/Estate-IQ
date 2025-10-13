import React, { useRef } from "react";
import useInView from "../useInView";

function Testimony() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Social Proof
        </p>
        <h2>
          Trusted by homeowners, buyers, and <br className="desktop" /> investors
          across Bangalore
        </h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-testimony reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-testimony-set">
          <p>
            Getting my Khata transferred was so confusing before I found Estate
            Now. They handled everything quickly and kept me updated
            throughout.
          </p>
          <div className="home-testimony-set-info">
            <h3>Priya Nair</h3>
            <span>Homeowner, HSR Layout</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            I needed my EC urgently for a home loan. Estate Now got it done in
            just a few days — super smooth process!
          </p>
          <div className="home-testimony-set-info">
            <h3>Rahul Shetty</h3>
            <span>Buyer, Whitefield</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            Their legal team drafted my sale deed perfectly. Clear language,
            zero errors, and registration was done in one visit.
          </p>
          <div className="home-testimony-set-info">
            <h3>Sangeeta Rao</h3>
            <span>Property Seller, JP Nagar</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            Estate Now helped me correct old tax records and pay dues online.
            Saved me so much time and stress.
          </p>
          <div className="home-testimony-set-info">
            <h3>Karthik R.</h3>
            <span>Apartment Owner, Indiranagar</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            I was about to buy a plot, and their Property Health Report saved me
            from a risky deal. Worth every rupee.
          </p>
          <div className="home-testimony-set-info">
            <h3>Amit Verma</h3>
            <span>Investor, Yelahanka</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            Their broker team is different — transparent, responsive, and legally
            sound. I sold my flat within two weeks.
          </p>
          <div className="home-testimony-set-info">
            <h3>Divya M.</h3>
            <span>Seller, Koramangala</span>
          </div>
        </div>

        <div className="home-testimony-set">
          <p>
            I live abroad and Estate Now manages my flat here. Rent arrives on
            time every month — completely worry-free.
          </p>
          <div className="home-testimony-set-info">
            <h3>Nikhil Menon</h3>
            <span>NRI Landlord, Sarjapur Road</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
