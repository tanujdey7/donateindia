import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-wrapper row">
        <div className="logo-div col ">
          <img src={Logo} width="250px" alt="" srcset="" />
        </div>
        <div className="show-btn-div col">{show === false ? (<GiHamburgerMenu
          className="hamburger-icon mt-4"
          onClick={() => setShow(true)}
          size={40}
        />
        ) : null}
        </div>
      </div>

      {show ? (
        <div className="ham-menu-div">
          <div className="navbar-menu-div">
            <IoMdCloseCircle
              className="close-icon"
              onClick={() => setShow(false)}
              size={40}
            />
            <div className="contact-div">
              <ul className="nav-menu-ul">
                <li className="nav-menu-li">
                  <a href="/"><h1 className="nav-menu-h1">Home</h1></a>
                </li>
                <li className="nav-menu-li">
                  <a href="#"><h1 className="nav-menu-h1">About Us</h1></a>
                </li>
                <li className="nav-menu-li">
                  <a href="#"><h1 className="nav-menu-h1">How it Works</h1></a>
                </li>
              </ul>
            </div>
            <div className="login-div">
              <ul className="login-div-ul">
                <li className="login-div-li">
                  <button className="btn btn-lg navbar-btns">Donate</button>
                </li>
                <li className="login-div-li">
                  <button className="btn btn-lg navbar-btns">Volunteer</button>
                </li>
                <li className="login-div-li">
                  <a href="/Login"><button className="btn btn-lg navbar-btns">Login</button></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
