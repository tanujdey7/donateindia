import React from "react";
import Poverty from "../Images/poverty.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <div className="row">
          <div className="col">
            <div>
              <div className="hero-sec-card card">
                <div className="hero-sec-card-head card-header">
                  <h2>DonateIndia</h2>
                </div>
                <div className="hero-sec-card-body card-body">
                  <h5>Free Donations for India</h5>
                  <h6>Get help to find blood banks and food banks</h6>
                </div>
                <div className="hero-sec-card-foot card-footer">
                  <button className="btn btn-lg get-start-btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <div className="hero-sec-img-card card w-50">
                <div className="hero-img-card-body card-body">
                  <img src={Poverty} width="500" className="img-fluid" />
                </div>
                {/* <div className="hero-img-card-foot card-footer">
                    <h4>Indian Poverty</h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
