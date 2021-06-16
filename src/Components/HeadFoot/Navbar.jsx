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
          <button className="btn btn-md"><h5 className="">Home</h5></button>
          <button className="btn btn-md"><h5 className="">About Us</h5></button>
          <button className="btn btn-md"><h5 className="">How it Works</h5></button>
        </div>
        <div className="login-div col-4">
          <button className="donateus-btn btn btn-md ">Donate</button>
          <button className="donateus-btn btn btn-md ">Volunteer</button>
          <button className="login-btn btn btn-md">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
