import React, { useState } from "react";
import Foodimg from "../Images/food.png";
import Foodimgone from "../Images/dish.png";
import Foodimgtwo from "../Images/fastfood.png";
import Foodimgthree from "../Images/tray.png";
import Foodimgfour from "../Images/volunteer.png";
import {IoMdArrowRoundBack} from "react-icons/io";
import "./Fooddonate.css";

const Fooddonate = () => {
  const [donor, setDonor] = useState(false);
  const [receive, setReceive] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [foodmenu, setfoodmenu] = useState(true);
  const [receiverlogin, setReceiverlogin] = useState(false);
  const [showreceiver, setShowreceiver] = useState(true);

  const showDonor = () => {
    setDonor(true);
    setVolunteer(false);
    setReceive(false);
    setRestaurant(false);
    setfoodmenu(false);
  };

  const regiReceiver = () => {
    setVolunteer(false);
    setReceive(true);
    setShowreceiver(true);
    setDonor(false);
    setRestaurant(false);
    setfoodmenu(false);
  };

  const viewReceiverlogin = () => {
    setReceiverlogin(true);
    setShowreceiver(false);
  };

  const receiverRegister = () => {
    setShowreceiver(true);
    setReceiverlogin(false);
  };
  const regiRest = () => {
    setVolunteer(false);
    setReceive(false);
    setDonor(false);
    setRestaurant(true);
    setfoodmenu(false);
  };

  const regiVolunteer = () => {
    setVolunteer(true);
    setReceive(false);
    setDonor(false);
    setRestaurant(false);
    setfoodmenu(false);
  };

  const hidemenu = () => {
    setVolunteer(false);
    setReceive(false);
    setDonor(false);
    setRestaurant(false);
    setfoodmenu(true);
  };

  return (
    <div className="FoodDonate-wrapper">
      <div className="container-fluid">
        <div className="Food-Main-wrapper">
          <div className="Food-menu-row row">
            <div className="col-6">
              <img src={Foodimg} width="700" />
            </div>
            <div className="Food-menu-col col-6">
              {foodmenu ? (
                <div className="Food-Menu-Wrap">
                  <div className="Food-Menu-Wrap-row row">
                    <div className="col">
                      <div className="Food-menu-btn-one-div">
                        <button
                          onClick={showDonor}
                          className="Food-menu-btn-one"
                        >
                          <h1 className="text-white">
                            <img src={Foodimgone} width="100" />
                          </h1>
                          <h4 className="mt-3">Food Donor</h4>
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <div className="Food-menu-btn">
                        <button
                          onClick={regiReceiver}
                          className="btn food-menu-btn-two"
                        >
                          <h1 className="text-white">
                            <img src={Foodimgtwo} width="100" />
                          </h1>
                          <h4 className="mt-3">Food Receiver</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="Food-Menu-Wrap-row-two row">
                    <div className="col">
                      <div className="Food-menu-btn">
                        <button
                          onClick={regiRest}
                          className="btn food-menu-btn-three"
                        >
                          <h1 className="text-white">
                            <img src={Foodimgthree} width="100" />
                          </h1>
                          <h4 className="mt-3">Restaurant</h4>
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <div className="Food-menu-btn">
                        <button
                          onClick={regiVolunteer}
                          className="btn food-menu-btn-four"
                        >
                          <h1 className="text-white">
                            <img src={Foodimgfour} width="100" />
                          </h1>
                          <h4 className="mt-3">Volunteer</h4>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {donor ? (
                <div className="food-donor-register card">
                  <div className="food-donor-register-card-header card-header">
                    <h4 className="food-btn-tagline">Register Your Food</h4>
                    <button onClick={hidemenu} className="btn back-menu-btn">
                      Back to Menu
                    </button>
                  </div>
                  <div className="food-donor-register-wrap card-body">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          maxLength="10"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Address
                        </label>
                        <input
                          type="textarea"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            State
                          </label>
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="input-half-div ml-2 mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            City
                          </label>
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Mobile
                          </label>
                          <input
                            type="tel"
                            maxLength="10"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="input-half-div ml-2 mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Fow how many
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                      
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Time and date of Food Preparation
                          </label>
                          <input
                            type="datetime-local"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="input-half-div ml-2 mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Time and date of Food Preparation
                          </label>
                          <input
                            type="datetime-local"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              ) : null}
              {receive ? (
                <div className="food-receiver-register card">
                  {receive && showreceiver == true ? (
                    <div>
                      <div className="food-receiver-register-card-header card-header">
                        <h4 className="food-btn-tagline">
                          Register as Receiver
                        </h4>
                        <button
                          onClick={hidemenu}
                          className="btn back-menu-btn"
                        >
                          Back to Menu
                        </button>
                      </div>
                      <div className="food-receiver-register-wrap card-body">
                        <form className="">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div class="mb-3 form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              Check me out
                            </label>
                          </div>
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                      <button
                        onClick={viewReceiverlogin}
                        className="btn btn-primary btn-md"
                      >
                        Login
                      </button>
                    </div>
                  ) : null}
                  {receive && receiverlogin == true ? (
                    <div>
                      <div className="food-receiver-register-card-header card-header">
                        <h4 className="food-btn-tagline">Login as Receiver</h4>
                        <button
                          onClick={hidemenu}
                          className="btn back-menu-btn"
                        >
                          Back to Menu
                        </button>
                      </div>
                      <div className="food-receiver-register-wrap card-body">
                        <form className="">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div class="mb-3 form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              Check me out
                            </label>
                          </div>
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </form>
                        <button
                          onClick={receiverRegister}
                          className="btn btn-lg btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {restaurant ? (
                <div className="food-restaurant-register card">
                  <div className="food-restaurant-register-card-header">
                    <button onClick={hidemenu} className="btn back-menu-btn">
                      <IoMdArrowRoundBack /> Back
                    </button>
                    <h3 className="food-btn-tagline mt-3">Restaurant</h3>
                  </div>
                  <div className="food-restaurant-register-wrap card-body">
                  <h5 className="text-center mb-3">[Donate food as Restaurant]</h5>
                    <form>
                      <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">
                          Restaurant Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">
                          Restaurant's Manager Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">
                          Restaurant's Address
                        </label>
                        <input
                          type="textarea"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          required
                        />
                      </div>
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-2">
                          <label for="exampleInputEmail1" class="form-label">
                            State
                          </label>
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="input-half-div ml-2 mb-2">
                          <label for="exampleInputEmail1" class="form-label">
                            City
                          </label>
                          <select
                            class="form-select form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-2">
                          <label for="exampleInputEmail1" class="form-label">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            maxLength="10"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="input-half-div ml-2 mb-2">
                          <label for="exampleInputEmail1" class="form-label">
                            Food for how many people?
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>
                      <div className="food-form-input-half">
                        <div class="input-half-div mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Time and date of Food Preparation
                          </label>
                          <input
                            type="datetime-local"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                        <div class="input-half-div ml-2 mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Time and date of Food Expiry
                          </label>
                          <input
                            type="datetime-local"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                          />
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                  <a href="#">See Available Volunteers</a>
                </div>
              ) : null}
              {volunteer ? (
                <div className="food-volunteer-register card">
                  <div className="volunteer-register-card-header card-header">
                    <h4 className="food-btn-tagline">Register as Volunteer</h4>
                    <button onClick={hidemenu} className="btn back-menu-btn">
                      Back to Menu
                    </button>
                  </div>
                  <div className="volunteer-register-wrap card-body">
                    <form className="">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" class="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooddonate;
