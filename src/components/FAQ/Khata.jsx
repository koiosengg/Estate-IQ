import React, { useState } from "react";

function Khata() {
  const FAQ_DATA = [
    {
      question: "What is a Khata in Bangalore?",
      answer:
        "A Khata is an official property account maintained by BBMP/BDA that proves property ownership for tax and utility purposes.",
    },
    {
      question: "How long does it take to get a Khata?",
      answer:
        " It typically takes 15–30 working days depending on document readiness and government processing.",
    },
    {
      question: "Can I transfer my Khata to a new owner?",
      answer:
        "Yes, Estate Now helps with Khata transfer when you buy or sell a property. All supporting documents like sale deed, tax receipts, and EC are required.",
    },
    {
      question: "What is the difference between Khata and e-Khata?",
      answer:
        "Khata is the physical document, while e-Khata is the digitized version introduced by BBMP for faster, paperless property records.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="template faq">
      <div className="template-heading">
        <p>
          <span></span> FAQ’s
        </p>
        <h2>Khata / e-Khata Filing</h2>
      </div>

      <div className="faq-container">
        {FAQ_DATA.map((faqData, index) => (
          <React.Fragment key={index}>
            <div
              className={`faq-set ${activeIndex === index ? "active-faq" : ""}`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{index + 1}.</span>

              <div className="faq-set-container">
                <div className="faq-set-text">
                  <h3>{faqData.question}</h3>
                  <p>{faqData.answer}</p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_27_512"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect
                      y="20"
                      width="20"
                      height="20"
                      transform="rotate(-90 0 20)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_27_512)">
                    <path
                      d="M18.3333 6.66667L10 15L1.66666 6.66667L3.14583 5.1875L10 12.0417L16.8542 5.1875L18.3333 6.66667Z"
                      fill="#959595"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Khata;
