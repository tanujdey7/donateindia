import React, { useState } from "react";
import "./Login.css";
import {FcGoogle} from "react-icons/fc";
import {SiFacebook} from "react-icons/si";

const Login = () => {
  const [state, setstate] = useState(false);

  return (
    <div className="login-section">
      <div className="login-wrapper">
        <div className="login-wrapper-row row">
          <div className="login-title-wrap">
            <div className="login-title-div">
              <h1>Login to Your Account</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className="login-form-wrapper-row row">
          <div className="login-col-wrap">
            <div className="col">
              <div className="login-form-div">
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
                  <div className="donor-login-form">
                    <form>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Enter email"
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
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
                        className="form-control mt-3"
                        placeholder="Enter email"
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Enter pass"
                      />
                      <button type="submit" class="btn btn-primary mt-2">
                        Submit Receiver
                      </button>
                    </form>
                  </div>
                ) : null}

                <div className="social-login-div mt-3">
                    <button className="btn social-login-btn-google"><FcGoogle className="facebook-icon" size="25" /> Continue with Google</button>
                    <button className="btn social-login-btn-facebook"><SiFacebook size="25" /> Continue with Facebook</button>
                </div>
              </div>
            </div>
            <div className="col bg-secondary">
              <h1>col 2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
