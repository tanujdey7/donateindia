import React, { useState } from "react";
import "./Login.css";
import Donationpic from "../Images/logindonate.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9000/login", user).then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("uid", res.data.user._id);
        localStorage.setItem("login", true);
        history.push("/Profile");
      });
    } else {
      alert("Invalid");
    }
  };
  return (
    <div className="login-section">
      <div className="login-form-wrapper-row row">
        <div className="login-form-wrappe-col col-xl-6 col-md-6 col-sm-12">
          <img src={Donationpic} alt="donation pic" />
        </div>
        <div className="signup-form-col col-xl-6 col-md-6 col-sm-12">
          <div className="login-form-div">
            <div className="login-head">
              <h2 className="login-title-text">Sign in</h2>
              <h5 className="switch-page-text">
                New User?
                <a href="http://localhost:3001/Register">
                  <button className="signup-into-btn btn-md">
                    <span className="h5">Sign Up</span>
                  </button>
                </a>
              </h5>
            </div>
            <div className="whole-login-sec-wrap">
              <div className="donor-login-form">
                <div className="form-wrap">
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
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
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
                      name="password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
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
                    <button
                      type="submit"
                      class="btn submit-donor mt-3"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
