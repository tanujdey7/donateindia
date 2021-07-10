import React from "react";
import Donate from "./Images/AI.png";
import "bootstrap/dist/css/bootstrap.min.css";
// Pages import
import Mission from "./Sections/Mission";
import Fundraise from "./Sections/Fundraise";
import Supportus from "./Sections/Supportus";
import Joinmission from "./Sections/Joinmission";
import Donationcount from "./Sections/Donationcount";
import Volunteers from "./Sections/Volunteers";
import Newsletter from "./Sections/Newsletter";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
// import Volunteers from "./Sections/Volunteers";
// mission

import { BsCloud } from "react-icons/bs";
// import "./Mission.css";
import Blooddrop from "./Images/health.svg";
import Books from "./Images/books.svg";
import Clothes from "./Images/clothes.svg";
import Food from "./Images/food.svg";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="hero-section-row row">
          <div className="hero-section-col col">
            <div className="img-col-wrapper">
              <div className="hero-sec-img-card card">
                <div className="hero-img-card-body card-body">
                  <img src={Donate} alt="Donate" className="hero-sec-img" />
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
                    <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="missionsection">Donate Now</Link>
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
            <h6 className="mt-3 font-weight-bold">Scroll Down</h6>
          </div>
        </div>
      </div>
      {/* mission section */}
      <div className="mission-section" id="missionsection">
        <div className="mission-row row">
          <div className="mission-col cloud-icon-col-one col-2">
            <h1 className="cloud-icon-one">
              <BsCloud className="cloud" size={200} />
            </h1>
          </div>
          <div className="mission-col col-4">
            <div className="mission-card card">
              <div className="mission-card-head card-head">
                <button className="btn">What we do</button>
              </div>
              <div className="mission-card-body card-body">
                <h1 className="mission-text">
                  The mission and goals of our organization
                </h1>
                <h6 className="">
                  Charity is the global movement encouraging the power of people and
                  organization to transform their communities and the world. What
                  can we do to make some changes?
                </h6>
              </div>
            </div>
            <div className="mission-card-footer card-footer">
              <button className="btn btn-lg donate-now-btn">Donate Now</button>
            </div>
          </div>
          <div className="mission-col col-4">
            <div className="mission-box-wrap">
              <div className="mission-box-row row">
                <div className="mission-box-col col-6">
                  <a href="/blood/blooddonate">
                    <div className="mission-box-one card">
                      <div className="mission-box-img card-body">
                        <img src={Blooddrop} alt="Blooddrop" width="120" />
                      </div>
                      <div className="mission-box-footer card-footer">
                        <h5>Blood Donation</h5>
                        <h6>Donate Now</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mission-box-col col-6">
                  <a href="/fooddonate">
                    <div className="mission-box-two card">
                      <div className="mission-box-img card-body">
                        <img src={Food} alt="Food" width="120" />
                      </div>
                      <div className="mission-box-footer card-footer">
                        <h5>Food Donation</h5>
                        <h6>Donate Now</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mission-box-row-two row">
                <div className="mission-box-col col-6">
                  <a href="/clothesdonate">
                    <div className="mission-box-three card">
                      <div className="mission-box-img card-body">
                        <img
                          className="svg-color"
                          src={Clothes}
                          alt="Clothes"
                          width="120"
                        />
                      </div>
                      <div className="mission-box-footer card-footer">
                        <h5>Clothes Donation</h5>
                        <h6>Donate Now</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mission-box-col  col-6">
                  <a href="/booksdonate">
                    <div className="mission-box-four card">
                      <div className="mission-box-img card-body">
                        <img src={Books} alt="Books" width="110" />
                      </div>
                      <div className="mission-box-footer card-footer">
                        <h5>Books Donation</h5>
                        <h6>Donate Now</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mission-col cloud-icon-col-two col-2">
            <h1 className="cloud-icon ">
              <BsCloud size={200} />
            </h1>
          </div>
        </div>
      </div>
      {/* mission section end */}
      {/* Fundraise section */}
      <div className="fundraise-section">
        <Fundraise />
      </div>
      {/* Funde raise end */}
      {/* Support us */}
      <div className="supportus-section">
        <Supportus />
      </div>

      {/* Total count */}


      <div className="Volunteers-section">
        <Volunteers />
      </div>
      <div className="Joinmission-section">
        <Joinmission />
      </div>
      <div className="Donationcount-section">
        <Donationcount />
      </div>
      <div className="Newsletter-section">
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
