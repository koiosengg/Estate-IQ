import React, { useState } from "react";

function EC() {
  const FAQ_DATA = [
    {
      question: "Why is an Encumbrance Certificate important in Bangalore?",
      answer:
        "An Encumbrance Certificate (EC) in Bangalore is crucial as it proves clear ownership and shows that the property is free from legal dues or claims, making it mandatory for Khata transfer, tax registration, and loan approvals.",
    },
    {
      question: "How long does it take to get an EC?",
      answer:
        "With EstateIQ, you can typically get an EC within 3–7 working days.",
    },
    {
      question: "How many years of EC should I apply for?",
      answer:
        "Most buyers request a 13 – 30 year EC to ensure full legal history is verified.",
    },
    {
      question: "Can EstateIQ provide EC online?",
      answer:
        "Yes, we can help you obtain digitally certified EC copies without you needing to visit the sub-registrar office.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="template faq">
      <div className="template-heading">
        <p>
          <span></span> FAQ’s
        </p>
        <h2>Encumbrance Certificate (EC)</h2>
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

export default EC;
