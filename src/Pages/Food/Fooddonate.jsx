import React from "react";
import Foodimg from "../Images/food.png";
import Foodimgone from "../Images/dish.png";
import Foodimgtwo from "../Images/fastfood.png";
import Foodimgthree from "../Images/tray.png";
import Foodimgfour from "../Images/volunteer.png";
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
                    <div className="Food-menu-btn-one">
                      <a href="/fooddonor">
                        <h1 className="text-white"><img src={Foodimgone} width="100" /></h1>
                        <h4 className="mt-3">Food Donor</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-two">
                        <h1 className="text-white"><img src={Foodimgtwo} width="100" /></h1>
                        <h4 className="mt-3">Food Receiver</h4>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Food-Menu-Wrap-row-two row">
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-three">
                        <h1 className="text-white"><img src={Foodimgthree} width="100" /></h1>
                        <h4 className="mt-3">Restaurant</h4>
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className="Food-menu-btn">
                      <button className="btn food-menu-btn-four">
                        <h1 className="text-white"><img src={Foodimgfour} width="100" /></h1>
                        <h4 className="mt-3">Volunteer</h4>
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
