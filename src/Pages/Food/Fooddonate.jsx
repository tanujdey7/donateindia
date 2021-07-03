import React from "react";
import Foodimg from "../Images/food.png";
import "./Fooddonate.css";

const Fooddonate = () => {
  return (
    <div className="FoodDonate-wrapper">
      <div className="container-fluid">
        <div className="Food-Main-wrapper">
          <div className="Food-menu-row row">
            <div className="col-6">
              <img src={Foodimg} width="700" />
            </div>
            <div className="Food-menu-col col-6">
              <div className="Food-Menu-Wrap">
                <div className="Food-Menu-Wrap-row row">
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-one btn-danger">
                        btn one
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-two btn-warning">
                        btn two
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Food-Menu-Wrap-row-two row">
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-three btn-info">
                        btn three
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-four btn-primary">
                        btn four
                      </button>
                    </div>
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

export default Fooddonate;
