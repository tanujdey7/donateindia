import React, { useState } from "react";
import "./Login.css";
import Donationpic from "../Images/logindonate.jpg";
const Login = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="login-section">
      <div className="login-form-wrapper-row row">
        <div className="login-form-wrappe-col col-xl-6 col-md-6 col-sm-12">
          <img src={Donationpic} alt="donation pic" />
        </div>
        <div className="signup-form-col col-xl-6 col-md-6 col-sm-12">
          {signup === false ? (
            <div className="login-form-div">
              <div className="login-head">
                <h2 className="login-title-text">Sign in</h2>
                <h5 className="switch-page-text">
                  New User?
                  <button
                    className="signup-into-btn btn-md"
                    onClick={() => setSignup(true)}
                  >
                    <span className="h5">SignUp</span>
                  </button>
                </h5>
              </div>
              <div className="whole-login-sec-wrap">
                <div className="donor-login-form">
                  <form className="form-wrap">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        class="form-control "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        class="form-control "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="input-group mt-2">
                      <div className="row w-100">
                        <div className="col-xl-6 col-sm-12">
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-xl-6 col-sm-12">
                          <a href="#" className="frgt-pass">
                            Forget Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row w-100 ml-1">
                      <button type="submit" class="btn submit-donor mt-3">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            // register section from here
            <div className="login-form-div">
              <div className="login-head">
                <h2 className="login-title-text">SignUp</h2>
                <h5>
                  Already Registered?
                  <button
                    className="signup-into-btn btn-md"
                    onClick={() => setSignup(false)}
                  >
                    <span className="h5">SignIn</span>
                  </button>
                </h5>
              </div>
              <div className="whole-login-sec-wrap">
                <div className="donor-login-form">
                  <form className="form-wrap">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        class="form-control "
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
                        class="form-control"
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
                        class="form-control"
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
                        class="form-control"
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
