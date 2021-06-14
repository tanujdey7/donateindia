import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper row">
        <div className="logo-div col-4">
          <img src={Logo} width="250px" alt="" srcset="" />
        </div>
        <div className="contact-div col-4">
          <h6 className="">Home</h6>
          <h6 className="">About Us</h6>
          <h6 className="">How it Works</h6>
        </div>
        <div className="login-div col-4">
          <button className="donateus-btn btn btn-md ">Donate</button>
          <button className="donateus-btn btn btn-md ">Volunteer</button>
          <button className="login-btn btn btn-md btn-danger">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
