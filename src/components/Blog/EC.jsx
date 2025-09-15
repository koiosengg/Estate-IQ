import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/Blog/Trends/EC.png";
import Khata from "../../assets/Blog/Trends/Khata.png";
// import EC from "../../assets/Blog/Trends/EC.png";
import Mistakes from "../../assets/Blog/Trends/Mistakes.png";
import Filing from "../../assets/Blog/Trends/Filing.png";
import StressFree from "../Home/StressFree";
import FAQ from "../Home/FAQ";

function EC() {
  return (
    <>
      <Helmet>
        <title>Estate IQ</title>
        <meta
          name="description"
          content="This is the home page of my website."
        />
      </Helmet>
      <section className="banner">
        <div className="banner-left">
          <Link to="/blog" className="banner-left-back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <mask
                id="mask0_46_2908"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_46_2908)">
                <path
                  d="M10.433 17.3333L17.8997 24.8L15.9997 26.6667L5.33301 16L15.9997 5.33333L17.8997 7.2L10.433 14.6667H26.6663V17.3333H10.433Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </Link>
          <div className="banner-left-text">
            <h1>What is an Encumbrance Certificate and Why It Matters</h1>
            <p>Posted 21 Jul, 2025</p>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </section>
      <section className="blog-page-container">
        <div className="blog-page-container-left">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisl pellentesque adipiscing
            augue magnis feugiat nibh. A condimentum morbi neque gravida. A dui
            tincidunt eu at tellus mauris dui tortor. Lorem tellus facilisis
            vitae faucibus semper proin nibh gravida. Sed venenatis amet sed sed
            lobortis tincidunt in. Egestas tristique volutpat vel orci quis
            nulla ornare semper. Bibendum nibh pellentesque mauris enim. Egestas
            dignissim convallis feugiat etiam morbi turpis tellus convallis.
            Ullamcorper nullam vel pharetra volutpat integer nec massa a mattis.
            Varius donec nulla vitae velit feugiat nibh enim condimentum. Tortor
            tempus magna dictum pellentesque malesuada mattis. Accumsan dictum
            purus ut elementum. Nibh habitasse dignissim diam sagittis eu
            vulputate consequat velit magna. Pharetra mi egestas amet augue
            facilisi in eu suscipit porta. Tempor in malesuada ullamcorper elit
            enim elit natoque consequat. At consectetur non quis fusce
            ullamcorper. Nisi at diam id pulvinar. Sed amet bibendum eu blandit.
          </p>
          <div className="blog-page-container-left-section">
            <h2>Why It’s Important?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl pellentesque
              adipiscing augue magnis feugiat nibh. A condimentum morbi neque
              gravida. A dui tincidunt eu at tellus mauris dui tortor. Lorem
              tellus facilisis vitae faucibus semper proin nibh gravida. Sed
              venenatis amet sed sed lobortis tincidunt in. Egestas tristique
              volutpat vel orci quis nulla ornare semper. Bibendum nibh
              pellentesque mauris enim. Egestas dignissim convallis feugiat
              etiam morbi turpis tellus convallis. Ullamcorper nullam vel
              pharetra volutpat integer nec massa a mattis. Varius donec nulla
              vitae velit feugiat nibh enim condimentum. Tortor tempus magna
              dictum pellentesque malesuada mattis. Accumsan dictum purus ut
              elementum. Nibh habitasse dignissim diam sagittis eu vulputate
              consequat velit magna.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl pellentesque
              adipiscing augue magnis feugiat nibh. A condimentum morbi neque
              gravida. A dui tincidunt eu at tellus mauris dui tortor. Lorem
              tellus facilisis vitae faucibus semper proin nibh gravida. Sed
              venenatis amet sed sed lobortis tincidunt in. Egestas tristique
              volutpat vel orci quis nulla ornare semper. Bibendum nibh
              pellentesque mauris enim. Egestas dignissim convallis feugiat
              etiam morbi turpis tellus convallis. Ullamcorper nullam vel
              pharetra volutpat integer nec massa a mattis. Varius donec nulla
              vitae velit feugiat nibh enim condimentum.
            </p>
          </div>
        </div>
        <div className="blog-page-container-right">
          <Link to="/blog/khata" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Khata} alt="Khata" />
            </div>
            <p>How to Get a Khata in Bangalore: Step by Step</p>
          </Link>
          {/* <Link to="/blog/ec" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={EC} alt="Encumbrance Certificate" />
            </div>
            <p>What is an Encumbrance Certificate and Why It Matters</p>
          </Link> */}
          <Link to="/blog/mistakes" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Mistakes} alt="Property Documentation Mistakes" />
            </div>
            <p>Common Property Documentation Mistakes and how to Avoid Them</p>
          </Link>
          <Link to="/blog/filing" className="blog-page-container-right-set">
            <div className="blog-page-container-right-set-img">
              <img src={Filing} alt=" Property Tax Filing" />
            </div>
            <p>Complete Guide to Property Tax Filing in Bangalore</p>
          </Link>
        </div>
      </section>
      <StressFree />
      <FAQ />
    </>
  );
}

export default EC;
