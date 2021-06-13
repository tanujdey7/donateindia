import React from "react";
import Donate from "../Images/AI.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { GiClothes } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
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
                  <h4>Get help to find blood banks and food banks sdbhsd sdhbvhjas svjasgvdasd  hasvjds asbuash sahakbs sajkbdkjbdas abhksbkjbsd</h4>
                </div>
                <div className="hero-sec-card-foot card-footer">
                  <button className="btn btn-lg get-start-btn">Donate Now</button>
                  <button className="btn btn-lg learn-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section */}

      <div class="scroll-down"></div>
      {/* <div className="total-donate-sec">
        <div className="total-donate-sec-row row">
          <div className="total-donate-sec-col col">
            <div className="total-donate-sec-card card">
              <div className="card-body">
                <h4><FaUser size={23} />  1400+</h4>
              </div>
              <div className="card-footer">
                <p>Blood Donor Registered</p>
              </div>
            </div>
          </div>
          <div className="total-donate-sec-col col">
            <div className="total-donate-sec-card card">
              <div className="card-body">
                <h4><BiDish size={30} /> 2345+</h4>

              </div>
              <div className="card-footer">
                <p>Packets of food donated</p>
              </div>
            </div></div>
          <div className="total-donate-sec-col col">
            <div className="total-donate-sec-card card">
              <div className="card-body">
                <h4><GiClothes size={28} /> 4000+</h4>
              </div>
              <div className="card-footer">
                <p>Clothes Donated</p>
              </div>
            </div></div>
          <div className="total-donate-sec-col col">
            <div className="total-donate-sec-card card">
              <div className="card-body">
                <h4><ImBooks size={28} /> 3200+</h4>
              </div>
              <div className="card-footer">
                <p>Books donated</p>
              </div>
            </div></div>
        </div>
      </div> */}

      {/* new sec */}

    </div>
  );
};

export default Home;
