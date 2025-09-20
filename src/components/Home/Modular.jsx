import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../useInView";
import QuickConstruction from "../../assets/Home/Modular/Quick Construction.svg";
import EcoFriendly from "../../assets/Home/Modular/Eco Friendly.svg";
import CostEffective from "../../assets/Home/Modular/Cost Effective.svg";
import FlexibleUses from "../../assets/Home/Modular/Flexible Uses.svg";

function Modular() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template home-modular-container">
      <div className="template-heading">
        <p>
          <span></span> Our Core Services
        </p>
        <h2>Modular & Portable Homes in Bangalore</h2>
        <p className="template-heading-para">
          EstateIQ doesn’t just handle property paperwork – we also design and
          build modern modular homes. Whether you’re a farmland owner,
          professional, or resort owner, our housing solutions are affordable,
          sustainable, and quick to set up.
        </p>
      </div>
      <div
        ref={sectionRef}
        className={`home-modular reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-modular-cards">
          <div className="home-modular-card">
            <img src={QuickConstruction} alt="Quick Construction" />
            <div className="home-modular-card-text">
              <h3>Quick Construction</h3>
              <p>Ready in weeks, not months.</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={EcoFriendly} alt="Eco-Friendly Materials" />
            <div className="home-modular-card-text">
              <h3>Eco-Friendly Materials</h3>
              <p>Built for sustainability</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={CostEffective} alt="Cost-Effective Housing" />
            <div className="home-modular-card-text">
              <h3>Cost-Effective Housing</h3>
              <p>Affordable options for all budgets</p>
            </div>
          </div>
          <div className="home-modular-card">
            <img src={FlexibleUses} alt="Flexible Uses" />
            <div className="home-modular-card-text">
              <h3>Flexible Uses</h3>
              <p>Student housing, PGs, resorts, portable homes</p>
            </div>
          </div>
        </div>
        <Link to="/modular-services" className="primary-btn">
          <p>Explore Modular Homes</p>
        </Link>
      </div>
    </section>
  );
}

export default Modular;
