import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper row">
                <div className="logo-div col-4">
                    <h2 className="">Logo</h2>
                </div>
                <div className="contact-div col-4">
                    <h6 className="">+919574547152</h6>
                    <h6 className="">raghav26897@gmail.com</h6>
                </div>
                <div className="login-div col-4">
                    <button className="donateus-btn btn btn-md btn-primary">Donate Us</button>
                    <button className="login-btn btn btn-md btn-danger">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;