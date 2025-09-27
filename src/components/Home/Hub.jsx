import React, { useRef } from "react";
import useInView from "../useInView";
import BuyProperty from "../../assets/Home/Hub/Buy Property.png";
import SellProperty from "../../assets/Home/Hub/Sell Property.png";
import RentOutProperty from "../../assets/Home/Hub/Rent Out Property.png";
import DocumentationHelp from "../../assets/Home/Hub/Documentation Help.png";
import ModularHomes from "../../assets/Home/Hub/Modular Homes.png";
import InvestInLand from "../../assets/Home/Hub/Invest In Land.png";

function Hub() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <section className="template">
      <div className="template-heading">
        <p>
          <span></span> Quick Access
        </p>
        <h2>Your Property Hub</h2>
      </div>
      <div
        ref={sectionRef}
        className={`home-hub reveal ${isVisible ? "in-view" : ""}`}
      >
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={BuyProperty} alt="Buy Property" />
          </div>
          <h3>Buy Property</h3>
        </div>
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={SellProperty} alt="Sell Property" />
          </div>
          <h3>Sell Property</h3>
        </div>
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={RentOutProperty} alt="Rent Out Property" />
          </div>
          <h3>Rent Out Property</h3>
        </div>
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={DocumentationHelp} alt="Documentation Help" />
          </div>
          <h3>Documentation Help</h3>
        </div>
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={ModularHomes} alt="Modular Homes" />
          </div>
          <h3>Modular Homes</h3>
        </div>
        <div className="home-hub-set">
          <div className="home-hub-set-img">
            <img src={InvestInLand} alt="Invest In Land" />
          </div>
          <h3>Invest In Land</h3>
        </div>
      </div>
    </section>
  );
}

export default Hub;
