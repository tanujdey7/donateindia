import React, { useState } from "react";
import "./Login.css";
import Donationpic from "../Images/logindonate.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = () => {
    const { name, phone, email, password, confirmpass } = user;
    if (name && phone && email && password && password === confirmpass) {
      axios.post("http://localhost:9000/register", user).then((res) => {
        alert(res.data.message);
        history.push("/Login");
      });
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
              <h2 className="login-title-text">Sign Up</h2>
              <h5>
                Already Registered?
                <a href="http://localhost:3001/Login">
                  <button className="signup-into-btn btn-md">
                    <span className="h5">Sign In</span>
                  </button>
                </a>
              </h5>
            </div>
            <div className="whole-login-sec-wrap">
              <div className="donor-login-form">
                <div className="form-wrap">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control "
                      name="name"
                      value={user.name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      class="form-control "
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      required
                      name="phone"
                      value={user.phone}
                      onChange={(e) => handleChange(e)}
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
                      name="password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
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
                      name="confirmpass"
                      value={user.confirmpass}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="row w-100 ml-1">
                    <button
                      type="submit"
                      class="btn submit-donor mt-3"
                      onClick={register}
                    >
                      Register
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

export default Register;
