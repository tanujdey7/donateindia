import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
// import "./Navbar";
import Logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-wrapper row">
        <div className="logo-div col-4">
          <img src={Logo} width="250px" alt="" srcset="" />
        </div>

        {show ? (
          <div className="ham-menu-div">
            <div className="contact-div col">
              <button className="btn btn-md">
                <h5 className="">Home</h5>
              </button>
              <button className="btn btn-md">
                <h5 className="">About Us</h5>
              </button>
              <button className="btn btn-md">
                <h5 className="">How it Works</h5>
              </button>
            </div>

            <div className="login-div col">
              <button className="donateus-btn btn btn-md ">Donate</button>
              <button className="donateus-btn btn btn-md ">Volunteer</button>
              <button className="login-btn btn btn-md">Login</button>
            </div>
          </div>
        ) : null}
      </div>
      {show ? (
        <CgClose
          className="close-icon"
          onClick={() => setShow(false)}
          size={50}
        />
      ) : (
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={() => setShow(true)}
          size={50}
        />
      )}
    </div>
  );
};

export default Navbar;
