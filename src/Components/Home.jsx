import React from "react";
import Donate from "../Images/donate2.png";
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
            <div className="wrapper">
              <div className="hero-sec-card card">
                <div className="hero-sec-card-head card-header">
                  <h2>DonateIndia</h2>
                </div>
                <div className="hero-sec-card-body card-body">
                  <h5>Free Donations for India</h5>
                  <h6>Get help to find blood banks and food banks</h6>
                </div>
                <div className="hero-sec-card-foot card-footer">
                  <button className="btn btn-lg get-start-btn">Start Donation - it's free</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-section-col col">
            <div className="img-col-wrapper">
              <div className="hero-sec-img-card card">
                <div className="hero-img-card-body card-body">
                  <img src={Donate} className="hero-sec-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section */}

      <div className="total-donate-sec">
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
      </div>

      {/* new sec */}

      {/* <div className="bars-section">
        <div className="bars-sec-row row">
          <div className="bars-sec-col col">
            <div className="no-fee-div">
            <div className="no-fee-div-wrap">
              <h3 className="no-fee-icon"><AiFillSound className="mt-1" size={60} /></h3>
              <h5>Our donation platform charges NO fees</h5>
              <BiDonateHeart className="donate-hrt-icon" size={50} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
