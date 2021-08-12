import React from "react";
import "./Newsletter.css";
import Man from "../Images/icons/man.png";
import { FaHandsHelping } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="subscribe-row row">
        <div className="col-xl-6 col-sm-12">
          <div className="subscribe-img-div">
            <img src={Man} alt="Man"  />
          </div>
        </div>
        <div className="col-xl-6 col-sm-12">
          <div className="subscribe-title-div">
            <div className="helping-hand-icon-div">
              <h1 className="helping-hand-icon"><FaHandsHelping  size={100} /></h1>
            </div>
            <div className="subscribe-title-text">
              <h1>Subscribe our</h1>
              <h1>newsletter and keep</h1>
              <h1>up with our latest news</h1>
            </div>
            <form class="form-inline">
              <div class="form-group ">
                <input
                  type="email"
                  class="email-form"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn subscribe-btn mx-sm-3">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
