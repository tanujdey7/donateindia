import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Donationpic from "../Images/logindonate.jpg";

const Login = () => {

  const [state, setstate] = useState(false);
  const [signup, setSignup] = useState(false);

  const Colors=['white','black','red'];

  return (

    <div className="login-section">
      <div className="login-wrapper">
        <div className="login-form-wrapper-row row">
          <div className="login-col-wrap">
            <div className="col">
              <img src={Donationpic} width="900" alt="donation pic" />
            </div>

            <div className="signup-form-col col">
              {signup === false ? (<div className="login-form-div">
                <div className="login-head">
                  <h1 className="login-title-text">Sign in</h1>
                  <h5>New User?<button className="signup-into-btn btn-md" onClick={() => setSignup(true)}>SignUp</button></h5>
                </div>
                <div className="whole-login-sec-wrap">
                  <div className="login-switch-btns" id="login-switch-btns">
                    <button
                      onClick={() => setstate(false)}
                      className="btn login-switch-donor-btn"
                      
                    >
                      I'm Donor
                    </button>
                    <button
                      onClick={() => setstate(true)}
                      className="btn login-switch-receiver-btn ml-3"
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
                          Submit donor
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
                        <button type="submit" class="btn btn-primary mt-2">
                          Submit Receiver
                        </button>
                      </form>
                    </div>
                  ) : null}
                  <div className="login-line mt-2">
                    <hr></hr><h6 className="mt-1 ml-2 mr-2">or</h6><hr></hr>
                  </div>
                  <div className="social-login-div mt-3">
                    <button className="btn social-login-btn-google">
                      <FcGoogle className="facebook-icon" size="25" /> Continue
                      with Google
                    </button>
                    <button className="btn social-login-btn-facebook">
                      <SiFacebook size="25" /> Continue with Facebook
                    </button>
                  </div>
                </div>
              </div>)
                :
                <div className="login-form-div">
                  <div className="login-head">
                    <h1 className="login-title-text">SignUp</h1>
                    <h5>New User?<button className="signup-into-btn btn-md" onClick={() => setSignup(false)}>Sign</button></h5>
                  </div>
                  <div className="whole-login-sec-wrap">
                    <div className="login-switch-btns">
                      <button
                        onClick={() => setstate(false)}
                        className="btn login-switch-donor-btn"
                      >
                        I'm Donor
                      </button>
                      <button
                        onClick={() => setstate(true)}
                        className="btn login-switch-receiver-btn ml-3"
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
                            Submit Receiver
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
                          <button type="submit submit-btn" class="btn btn-primary mt-2">
                            Submit Receiver
                          </button>
                        </form>
                      </div>
                    ) : null}
                    <div className="login-line mt-2">
                      <hr></hr><h6 className="mt-1 ml-2 mr-2">or</h6><hr></hr>
                    </div>
                    <div className="social-login-div mt-3">
                      <button className="btn social-login-btn-google">
                        <FcGoogle className="facebook-icon" size="25" /> Continue
                        with Google
                      </button>
                      <button className="btn social-login-btn-facebook">
                        <SiFacebook size="25" /> Continue with Facebook
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
