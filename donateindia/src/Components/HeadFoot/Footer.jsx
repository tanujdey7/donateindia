import React from "react";
import "./Footer.css";
import { FaGgCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-row-one row">
        <div className="footer-row-col-one col-xl-9 col-lg-9 col-md-8 col-sm-8">
          <h1>Don’t turn away, Give today!</h1>
        </div>
        <div className="footer-row-col-two col-xl-3 col-lg-3 col-md-4 col-sm-4">
          <button className="btn footer-btn">Contact Us</button>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-row-two row">
        <div className="footer-row-col-three col-xl-8 col-lg-8 col-md-6 col-sm-8">
          <h6>
            <FaGgCircle size={40} /> Privacy policy - Modern Day Statement -
            Social Impact Statement
          </h6>
        </div>
        <div className="footer-row-col-four row col-xl-4 col-lg-4 col-md-6 col-sm-4">
          <div className="col-xl-6 col-lg-6 col col-md-6 col-sm-6 ">
            <h6 className="mt-1">enquiry@donateindia.com</h6>
          </div>
          <div className="footer-icons-col col col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <a className="fb-icons" href="#">
              <GrFacebookOption size={25} />
            </a>
            <a href="#" className="ml-3 insta-icon">
              <FaInstagram size={25} />
            </a>
            <a href="#" className="ml-3 twitter-icon">
              <GrTwitter size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
