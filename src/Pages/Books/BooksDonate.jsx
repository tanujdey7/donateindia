import React, { useState } from "react";
import Booksimg from "../Images/donation/bookdonation.png";
import Learning from "../Images/icons/learning.png";
import Books from "../Images/icons/books.png";
import Foodimgfour from "../Images/volunteer.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import "../AllMainPages.css";

const Booksdonor = () => {
  // new
  const allstates = ["Gujarat", "Maharastra", "UttarPradesh"];
  const [selected, setSelected] = React.useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const gujState = ["Ahmedabad", "Rajkot", "Vadodara"];
  const mhState = ["Mumbai", "Pune", "Nashik"];

  const upState = ["Lko", "GKP", "Noida"];

  let type = null;
  let options = null;
  if (selected === "Gujarat") {
    type = gujState;
  } else if (selected === "Maharastra") {
    type = mhState;
  } else if (selected === "UttarPradesh") {
    type = upState;
  }
  if (type) {
    options = type.map((el) => (
      <option className="" key={el}>
        {el}
      </option>
    ));
  }

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
    <div className="BooksDonate-wrapper">
      <div className="Blood-menu-row row">
        <div className="Blood-img-col col-xl-6 col-sm-12">
          <img src={Booksimg} className="books-image img-fluid" />
        </div>
        <div className="Blood-menu-col col-xl-6 col-sm-12">
          {foodmenu ? (
            <div className="Menu-Wrap">
              <div className="Menu-Wrap-row row">
                <div className="Menu-col col">
                  <button onClick={showDonor} className="Menu-main-btn">
                    <h1 className="blood-all-icons">
                      <img src={Books} alt="images" />
                    </h1>
                    <h4 className="mt-3">I'm Donor</h4>
                  </button>
                </div>
                <div className="Menu-col col">
                  <a href="/books/booksdonate/findbooks">
                    <button className="Menu-main-btn">
                      <h1 className="blood-all-icons">
                        <img src={Learning} alt="images" />
                      </h1>
                      <h4 className="mt-3">I'm Receiver</h4>
                    </button>
                  </a>
                </div>
              </div>
              <div className="Menu-Wrap-row row">
                <div className="Menu-col col">
                  <button onClick={regiRest} className="Menu-main-btn">
                    <h1 className="blood-all-icons">
                      <VscOrganization className="Books-org-icon" size="100" />
                    </h1>
                    <h4 className="mt-3">Organization</h4>
                  </button>
                </div>
                <div className="Menu-col col">
                  <button onClick={regiVolunteer} className="Menu-main-btn">
                    <h1 className="blood-all-icons">
                      <img src={Foodimgfour} width="100" alt="images" />
                    </h1>
                    <h4 className="mt-3">Volunteer</h4>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {donor ? (
            <div className="Register-card card">
              <div className="Register-card-header">
                <button onClick={hidemenu} className="btn back-menu-btn">
                  <IoMdArrowRoundBack /> Back
                </button>
                <h3 className="Blood-btn-tagline mt-3">Books Donor</h3>
              </div>
              <div className="Register-card-body card-body">
                <h5 className="text-center mb-3">
                  [Donate Books as Individual]
                </h5>
                <form>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>FullName</h6>
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
                      <h6>Email Address</h6>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>Address</h6>
                    </label>
                    <input
                      type="textarea"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>State</h6>
                      </label>
                      <select
                        onChange={changeSelectOptionHandler}
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>Choose State</option>
                        {allstates.map((st) => (
                          <option className="" key={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>City</h6>
                      </label>

                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        {options}
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Mobile Number</h6>
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
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Gender</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>D.O.B</h6>
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Blood Group</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">A+</option>
                        <option value="2">B+</option>
                        <option value="3">AB+</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Adhar Number</h6>
                      </label>
                      <input
                        type="tel"
                        maxLength="12"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Preference</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">Only in Emergency</option>
                        <option value="2">Only in 3 Months</option>
                        {/* <option value="3">AB+</option> */}
                      </select>
                    </div>
                  </div>
                  <button type="submit" class="btn Register-submit-btn">
                    <h6 className="mt-1">Submit</h6>
                  </button>
                  <button type="reset" class="btn ml-2 Register-submit-btn">
                    <h6 className="mt-1">Reset</h6>
                  </button>
                </form>
              </div>
            </div>
          ) : null}

          {restaurant ? (
            <div className="Register-card card">
              <div className="Register-card-header">
                <button onClick={hidemenu} className="btn back-menu-btn">
                  <IoMdArrowRoundBack /> Back
                </button>
                <h3 className="Blood-btn-tagline mt-3">Restaurant</h3>
              </div>
                <a className="see-vol-btn" href="/blood/findbloodbank/">
                  <h6 className="mt-1 text-white">See Nearby Book Donation</h6>
                </a>
              <h5 className="text-center mb-2">OR</h5>
              <div className="Register-card-body card-body">
                <h5 className="text-center mb-3">
                  [Donate Books as Restaurant]
                </h5>
                <form>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>FullName</h6>
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
                      <h6>Email Address</h6>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>Address</h6>
                    </label>
                    <input
                      type="textarea"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>State</h6>
                      </label>
                      <select
                        onChange={changeSelectOptionHandler}
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>Choose State</option>
                        {allstates.map((st) => (
                          <option className="" key={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>City</h6>
                      </label>

                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        {options}
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Mobile Number</h6>
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
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Gender</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>D.O.B</h6>
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Blood Group</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">A+</option>
                        <option value="2">B+</option>
                        <option value="3">AB+</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Adhar Number</h6>
                      </label>
                      <input
                        type="tel"
                        maxLength="12"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Preference</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">Only in Emergency</option>
                        <option value="2">Only in 3 Months</option>
                        {/* <option value="3">AB+</option> */}
                      </select>
                    </div>
                  </div>
                  <button type="submit" class="btn Register-submit-btn">
                    <h6 className="mt-1">Submit</h6>
                  </button>
                  <button type="reset" class="btn ml-2 Register-submit-btn">
                    <h6 className="mt-1">Reset</h6>
                  </button>
                </form>
              </div>
            </div>
          ) : null}
          {volunteer ? (
            <div className="Register-card card">
              <div className="Register-card-header">
                <button onClick={hidemenu} className="btn back-menu-btn">
                  <IoMdArrowRoundBack /> Back
                </button>
                <h3 className="Blood-btn-tagline mt-3">Restaurant</h3>
              </div>
              <div className="Register-card-body card-body">
                <h5 className="text-center mb-3">
                  [Donate Books as Restaurant]
                </h5>
                <form>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>FullName</h6>
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
                      <h6>Email Address</h6>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">
                      <h6>Address</h6>
                    </label>
                    <input
                      type="textarea"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>State</h6>
                      </label>
                      <select
                        onChange={changeSelectOptionHandler}
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>Choose State</option>
                        {allstates.map((st) => (
                          <option className="" key={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>City</h6>
                      </label>

                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        {options}
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Mobile Number</h6>
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
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Gender</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>D.O.B</h6>
                      </label>
                      <input
                        type="datetime-local"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Blood Group</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">A+</option>
                        <option value="2">B+</option>
                        <option value="3">AB+</option>
                      </select>
                    </div>
                  </div>
                  <div className="Blood-form-input-half">
                    <div class="input-half-div w-100 mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Adhar Number</h6>
                      </label>
                      <input
                        type="tel"
                        maxLength="12"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div class="input-half-div input-half-div-sec w-100 mb-2">
                      <label for="exampleInputEmail1" class="form-label">
                        <h6>Preference</h6>
                      </label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">Only in Emergency</option>
                        <option value="2">Only in 3 Months</option>
                        {/* <option value="3">AB+</option> */}
                      </select>
                    </div>
                  </div>
                  <button type="submit" class="btn Register-submit-btn">
                    <h6 className="mt-1">Submit</h6>
                  </button>
                  <button type="reset" class="btn ml-2 Register-submit-btn">
                    <h6 className="mt-1">Reset</h6>
                  </button>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Booksdonor;
