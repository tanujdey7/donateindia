import React from "react";
import "./Volunteers.css";
import Users from "../Images/icons/user.svg";
import { AiOutlineMinus } from "react-icons/ai";

const Volunteers = () => {
  return (
    <div className="volunteers-wrapper">
      <div className="volunteers-title-div">
        <h1>Our volunteers say</h1>
      </div>
      <div className="volunteers-row row">
        <div className="volunteers-col volunteers-col-wrapone col-xl-6 col-sm-12">
          <div className="volunteers-card volunteers-card-one  card">
            <div className="volunteers-card-header card-header">
              <div className="row">
                <div className="col">
                  <img src={Users} className="vol-img" alt="Users" />
                </div>
                <div>
                  <h4 className="volunteers-card-header-text">
                    <AiOutlineMinus />
                    Raghvendra Singh, Developer
                  </h4>
                </div>
              </div>
            </div>
            <div className="volunteers-card-body card-body">
              <h6>
                "Been using the service for 4-5 year or more,<br></br>should've
                given a review earlier"
              </h6>
            </div>
          </div>
          <div className="volunteers-card volunteers-card-two card">
            <div className="volunteers-card-header card-header">
              <div className="row">
                <div className="col">
                  <img src={Users} className="vol-img" alt="Users" />
                </div>
                <div>
                  <h4 className="volunteers-card-header-text">
                    <AiOutlineMinus />
                    Raghvendra Singh, Developer
                  </h4>
                </div>
              </div>
            </div>
            <div className="volunteers-card-body card-body">
              <h6>
                "Been using the service for 4-5 year or more,<br></br>should've
                given a review earlier"
              </h6>
            </div>
          </div>
        </div>
        <div className="volunteers-col volunteers-col-wraptwo col-xl-6 col-sm-12">
          <div className="volunteers-card volunteers-card-three card">
            <div className="volunteers-card-header card-header">
              <div className="row">
                <div className="col">
                  <img src={Users} className="vol-img" alt="Users" />
                </div>
                <div>
                  <h4 className="volunteers-card-header-text">
                    <AiOutlineMinus />
                    Raghvendra Singh, Developer
                  </h4>
                </div>
              </div>
            </div>
            <div className="volunteers-card-body card-body">
              <h6>
                "Been using the service for 4-5 year or more,<br></br>
                should've given a review earlier"
              </h6>
            </div>
          </div>
          <div className="volunteers-card volunteers-card-four card">
            <div className="volunteers-card-header card-header">
              <div className="row">
                <div className="col">
                  <img src={Users} className="vol-img" alt="Users" />
                </div>
                <div>
                  <h4 className="volunteers-card-header-text">
                    <AiOutlineMinus />
                    Raghvendra Singh, Developer
                  </h4>
                </div>
              </div>
            </div>
            <div className="volunteers-card-body card-body">
              <h6>
                "Been using the service for 4-5 year or more,<br></br>
                should've given a review earlier"
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
