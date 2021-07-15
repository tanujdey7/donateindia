import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Donationpic from "../Images/logindonate.jpg";

const Login = () => {
  const [state, setstate] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <div className="login-section">
      <div className="login-wrapper">
        <div className="login-form-wrapper-row row">
          <div className="login-col-wrap">
            <div className="col">
              <img src={Donationpic} width="900" alt="donation pic" />
            </div>

            <div className="signup-form-col col">
              {signup === false ? (
                <div className="login-form-div">
                  <div className="login-head">
                    <h1 className="login-title-text">Sign in</h1>
                    <h5>
                      New User?
                      <button
                        className="signup-into-btn btn-md"
                        onClick={() => setSignup(true)}
                      >
                        SignUp
                      </button>
                    </h5>
                  </div>
                  <div className="whole-login-sec-wrap">
                    <div className="login-switch-btns" id="login-switch-btns">
                      <button
                        onClick={() => setstate(false)}
                        className={`btn ${
                          state == false ? "login-switch-donor-btn " : ""
                        }${state ? "disabled" : ""}`}
                      >
                        I'm Donor
                      </button>
                      <button
                        onClick={() => setstate(true)}
                        className="btn  ml-3"
                        className={`btn ${
                          state ? "login-switch-donor-btn" : ""
                        }${state == false ? "disabled" : ""}`}
                      >
                        I'm Receiver
                      </button>
                    </div>
                    {state === false ? (
                      <div className="donor-login-form mt-2">
                        <form>
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter email"
                          />
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter pass"
                          />
                          <button type="submit" class="btn submit-donor mt-3">
                            Login
                          </button>
                        </form>
                      </div>
                    ) : null}
                    {state ? (
                      <div className="receiver-login-form">
                        <form>
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter email"
                          />
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter pass"
                          />
                          <button type="submit" class="btn submit-donor mt-3">
                            Login
                          </button>
                        </form>
                      </div>
                    ) : null}
                    <div className="login-line mt-2">
                      <hr></hr>
                      <h6 className="mt-1 ml-2 mr-2">or</h6>
                      <hr></hr>
                    </div>
                    <div className="social-login-div mt-3">
                      <button className="btn social-login-btn-google">
                        <FcGoogle className="facebook-icon" size="25" />{" "}
                        Continue with Google
                      </button>
                      <button className="btn social-login-btn-facebook">
                        <SiFacebook size="25" /> Continue with Facebook
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="login-form-div">
                  <div className="login-head">
                    <h1 className="login-title-text">SignUp</h1>
                    <h6>
                      Already Registered?
                      <button
                        className="signup-into-btn btn-md"
                        onClick={() => setSignup(false)}
                      >
                        <span className="h5">Sign</span>
                      </button>
                    </h6>
                  </div>
                  <div className="whole-login-sec-wrap">
                    <div className="login-switch-btns">
                      <button
                        onClick={() => setstate(false)}
                        className={`btn ${
                          state == false ? "login-switch-donor-btn " : ""
                        }${state ? "disabled" : ""}`}
                      >
                        I'm Donor
                      </button>
                      <button
                        onClick={() => setstate(true)}
                        className="btn  ml-3"
                        className={`btn ${
                          state ? "login-switch-donor-btn" : ""
                        }${state == false ? "disabled" : ""}`}
                      >
                        I'm Receiver
                      </button>
                    </div>
                    {state === false ? (
                      <div className="donor-login-form mt-2">
                        <form>
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter email"
                          />
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter pass"
                          />
                          <button type="submit" class="btn submit-donor mt-3">
                            Register
                          </button>
                        </form>
                      </div>
                    ) : null}
                    {state ? (
                      <div className="receiver-login-form">
                        <form>
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter email"
                          />
                          <input
                            type="text"
                            className="form-controls mt-3"
                            placeholder="Enter pass"
                          />
                          <button type="submit" class="btn submit-donor mt-3">
                            Register
                          </button>
                        </form>
                      </div>
                    ) : null}
                    <div className="login-line mt-2">
                      <hr></hr>
                      <h6 className="mt-1 ml-2 mr-2">or</h6>
                      <hr></hr>
                    </div>
                    <div className="social-login-div mt-3">
                      <button className="btn social-login-btn-google">
                        <FcGoogle className="facebook-icon" size="25" />{" "}
                        Continue with Google
                      </button>
                      <button className="btn social-login-btn-facebook">
                        <SiFacebook size="25" /> Continue with Facebook
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
