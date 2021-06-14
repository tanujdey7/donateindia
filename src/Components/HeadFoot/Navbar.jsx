import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper row">
                <div className="logo-div col-4">
                    <h1 className="">Logo</h1>
                </div>
                <div className="contact-div col-4">
                    <h6 className="">+919574547152</h6>
                    <h6 className="">raghav26897@gmail.com</h6>
                </div>
                <div className="login-div col-4">
                    <button className="donateus-btn btn btn-md">Donate Us</button>
                    <button className="login-btn btn btn-md">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;