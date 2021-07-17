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
      <div className="login-form-wrapper-row row">
        <div className="login-form-wrappe-col col">
          <img src={Donationpic} alt="donation pic" />
        </div>

        <div className="signup-form-col col">
          {signup === false ? (
            <div className="login-form-div">
              <div className="login-head">
                <h1 className="login-title-text">Sign in</h1>
                <h5 className="switch-page-text">
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
                    className={`btn ${state ? "login-switch-donor-btn" : ""}${
                      state == false ? "disabled" : ""
                    }`}
                  >
                    I'm Receiver
                  </button>
                </div>
                {state === false ? (
                  <div className="donor-login-form">
                    <form className="form-wrap">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          class="form-control border-0"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="row w-100 ml-1">
                        <button type="submit" class="btn submit-donor mt-3">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                {state ? (
                  <div className="receiver-login-form">
                    <form className="form-wrap">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          class="form-control border-0"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="row w-100 ml-1">
                        <button type="submit" class="btn submit-donor mt-3">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                <div className="login-line mt-3">
                  <hr></hr>
                  <h6 className="mt-1 ml-2 mr-2">Or Continue With</h6>
                  <hr></hr>
                </div>
                <div className="social-login-div mt-3">
                  <a className="btn social-login-btn-google">
                    <h1 className="google-icon">
                      <FcGoogle />
                    </h1>
                  </a>
                  <a className="btn social-login-btn-facebook">
                    <h1 className="facebook-icon">
                      <SiFacebook />
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            // register section from here
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
                    className={`btn ${state ? "login-switch-donor-btn" : ""}${
                      state == false ? "disabled" : ""
                    }`}
                  >
                    I'm Receiver
                  </button>
                </div>
                {state === false ? (
                  <div className="donor-login-form">
                    <form className="form-wrap">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          required
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          class="form-control border-0"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="row w-100 ml-1">
                        <button type="submit" class="btn submit-donor mt-3">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                {state ? (
                  <div className="receiver-login-form">
                    <form className="form-wrap">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          class="form-control border-0"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          class="form-control border-0"
                          id="exampleInputEmail1"
                          required
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="row w-100 ml-1">
                        <button type="submit" class="btn submit-donor mt-3">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}
                <div className="login-line mt-3">
                  <hr></hr>
                  <h6 className="mt-1 ml-2 mr-2">Or Continue With</h6>
                  <hr></hr>
                </div>
                <div className="social-login-div mt-3">
                  <a className="btn social-login-btn-google">
                    <h1 className="google-icon">
                      <FcGoogle />
                    </h1>
                  </a>
                  <a className="btn social-login-btn-facebook">
                    <h1 className="facebook-icon">
                      <SiFacebook />
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
