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
        <div className="logo-div col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
          <img src={Logo} width="250px" alt="" srcset="" />
        </div>
        <div className="show-btn-div col-xl-6 col-lg-6 col-md-6 col-sm-12">
          {show === false ? (
            <GiHamburgerMenu
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
                {localStorage.getItem("login") ? (
                  <li className="nav-menu-li">
                    <a href="/Profile">
                      <button className={"btn navbar-btns"}>
                        Welcome {localStorage.getItem("name")}
                      </button>
                    </a>
                  </li>
                ) : (
                  <li></li>
                )}
                <li className="nav-menu-li">
                  <a href="/">
                    <button className="btn navbar-btns">Home</button>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <button className="btn navbar-btns">About Us</button>
                  </a>
                </li>
                <li className="nav-menu-li">
                  <a href="#">
                    <button className="btn navbar-btns">How it Works</button>
                  </a>
                </li>
                {localStorage.getItem("login") ? (
                  <li className="nav-menu-li">
                    <a href="/">
                      <button
                        className="btn navbar-btns"
                        onClick={() => localStorage.clear()}
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                ) : (
                  <li className="nav-menu-li">
                    <a href="/Login">
                      <button className="btn navbar-btns">Login</button>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
