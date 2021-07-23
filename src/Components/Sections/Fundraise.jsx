import React from "react";
import "./Fundraise.css";
import Bird from "../Images/icons/bird.svg";
import Volunteer from "../Images/icons/user.svg";
import Heart from "../Images/icons/heart.svg";
import Support from "../Images/icons/support.svg";
import Bloodcount from "../Images/donation/bloodcount.jpg";
import Foodcount from "../Images/donation/foodcount.jpg";
import Clothescount from "../Images/donation/clothescount.jpg";
import Bookscount from "../Images/donation/bookcount.jpg";
// import Imgthree from "../Images/icons/books.jpg";
import { ProgressBar } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
// import Imgfour from "../Images/icons/man.png";

const Fundraise = () => {
  const raised = 50000;
  const received = 37000;
  const receivedper = (received / raised) * 100;
  const now = receivedper;
  return (
    <div className="fundraise-wrapper">
      <div className="fundraise-row row">
        <div className="fundraise-col col-xl-3 col-sm-6">
          <div className="fundraise-div fundraise-div-one">
            <img src={Bird} alt="Bird" />
            <h4 className="fundraise-div-text">Inspiration</h4>
          </div>
        </div>
        <div className="fundraise-col col-xl-3 col-sm-6">
          <div className="fundraise-div fundraise-divtwo">
            <img src={Volunteer} alt="Volunteers" />
            <h4 className="fundraise-div-text">Volunteering</h4>
          </div>
        </div>
        <div className="fundraise-col col-xl-3 col-sm-6">
          <div className="fundraise-div fundraise-divthree">
            <img src={Heart} alt="Heart" />{" "}
            <h4 className="fundraise-div-text">Donations</h4>
          </div>
        </div>
        <div className="fundraise-col col-xl-3 col-sm-6">
          <div className="fundraise-div fundraise-divfour">
            <img src={Support} alt="Support" />{" "}
            <h4 className="fundraise-div-text">Support</h4>
          </div>
        </div>
      </div>
      <div className="fundraise-title-row row">
        <div className="fundraise-title">
          <h1>You can help lots of people by donating little</h1>
        </div>
      </div>
      {/* start here */}

      <div className="fundraise-card-row row">
        {/* <div className="fundraise-card-wrap"> */}
        <div className="Fundraise-row-col col-xl-3 col-sm-6">
          <div className="fundraise-card card">
            <div className="fundraise-card-header card-header">
              <img src={Bloodcount} alt="Imgone" className="card-img-top" />
            </div>
            <h5 className="f-card-title mt-1">Food Donation</h5>
            <div className="fundraise-card-body card-body">
              <h6>2000+ donations</h6>
              <h6>1000+ Restaurants joined</h6>
              <h6>500+ Volunteers</h6>
            </div>
            <div className="fundraise-card-footer card-footer">
              <a href="/blooddonate">
                <button className="btn btn-md fundraise-btn">Donate now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Fundraise-row-col col-xl-3 col-sm-6">
          <div className="fundraise-card card">
            <div className="fundraise-card-header card-header">
              <img src={Foodcount} alt="Imgtwo" className="card-img-top" />
            </div>
            <h5 className="f-card-title mt-1">Food Donation</h5>
            <div className="fundraise-card-body card-body">
              <h6>2000+ donations</h6>
              <h6>1000+ Restaurants joined</h6>
              <h6>500+ Volunteers</h6>
            </div>
            <div className="fundraise-card-footer card-footer">
              <a href="fooddonate">
                <button className="btn btn-md fundraise-btn">Donate now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Fundraise-row-col col-xl-3 col-sm-6">
          <div className="fundraise-card card">
            <div className="fundraise-card-header card-header">
              <img src={Clothescount} alt="Imgthree" className="card-img-top" />
            </div>
            <h5 className="f-card-title mt-1">Food Donation</h5>
            <div className="fundraise-card-body card-body">
              <h6>2000+ donations</h6>
              <h6>1000+ Restaurants joined</h6>
              <h6>500+ Volunteers</h6>
            </div>
            <div className="fundraise-card-footer card-footer">
              <a href="clothesdonate">
                <button className="btn btn-md fundraise-btn">Donate now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Fundraise-row-col col-xl-3 col-sm-6">
          <div className="fundraise-card card">
            <div className="fundraise-card-header card-header">
              <img src={Bookscount} alt="Imgtwo" className="card-img-top" />
            </div>
            <h5 className="f-card-title mt-1">Food Donation</h5>
            <div className="fundraise-card-body card-body">
              <h6>2000+ donations</h6>
              <h6>1000+ Restaurants joined</h6>
              <h6>500+ Volunteers</h6>
            </div>
            <div className="fundraise-card-footer card-footer">
              <a href="/booksdonate">
                <button className="btn btn-md fundraise-btn">Donate now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Fundraise;
