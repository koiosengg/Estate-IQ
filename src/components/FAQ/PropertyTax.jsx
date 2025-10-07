import React, { useState } from "react";

function PropertyTax() {
  const FAQ_DATA = [
    {
      question: "How do I pay my property tax in Bangalore?",
      answer:
        "BBMP provides an online portal to pay taxes, but mistakes often happen in PID numbers, name mismatches, or arrears. Estate Now helps ensure accurate filing.",
    },
    {
      question: "What happens if I don’t pay property tax on time?",
      answer:
        "Late payments attract penalties and interest charges. Estate Now ensures timely compliance.",
    },
    {
      question: "Can Estate Now help with property tax correction?",
      answer:
        "Yes, we handle PID errors, owner name corrections, and old dues clearance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="template faq">
      <div className="template-heading">
        <p>
          <span></span> FAQ’s
        </p>
        <h2>Property Tax Compliance</h2>
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

export default PropertyTax;
