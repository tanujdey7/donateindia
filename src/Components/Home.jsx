import React from "react";
import Donate from "./Images/AI.png";
import Logo from "./Images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Mission from "./Sections/Mission";
import Fundraise from "./Sections/Fundraise";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="hero-section-row row">
          <div className="hero-section-col col">
            <div className="img-col-wrapper">
              <div className="hero-sec-img-card card">
                <div className="hero-img-card-body card-body">
                  <img src={Donate} className="hero-sec-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-section-col col">
            <div className="wrapper">
              <div className="hero-sec-card card">
                <div className="hero-sec-card-body card-body">
                  <h1>Help the poor Make big changes and help the World</h1>
                  <h4>
                    Get help to find blood banks and food banks sdbhsd sdhbvhjas
                    svjasgvdasd hasvjds asbuash sahakbs sajkbdkjbdas abhksbkjbsd
                  </h4>
                </div>
                <div className="hero-sec-card-foot card-footer">
                  <button className="btn btn-lg get-start-btn">
                    Donate Now
                  </button>
                  <button className="btn btn-lg learn-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-row row w-25">
          <div className="col">
            <div class="scroll-container">
              <div class="scroller"></div>
            </div>
          </div>
        </div>
      </div>
      {/* mission section */}
      <div className="mission-section">
        <Mission />
      </div>
      {/* mission section end */}
      {/* Fundraise section */}
      <div className="fundraise-section">
        <Fundraise />
      </div>
      {/* Funde raise end */}
    </div>
  );
};

export default Home;
