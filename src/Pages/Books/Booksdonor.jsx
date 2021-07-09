import React, { useState } from "react";
import Booksimg from "../Images/donation/bookdonation.png";
import Clothesreceiver from "../Images/clothesreceiver.png";
import Clothes from "../Images/clothes.png";
import Foodimgfour from "../Images/volunteer.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { VscOrganization } from "react-icons/vsc";
import "./Booksdonor.css";

const Booksdonor = () => {
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
            <div className="container-fluid">
                <div className="Books-Main-wrapper">
                    <div className="Books-menu-row row">
                        <div className="Books-img-col col">
                            <img src={Booksimg} width="850" />
                        </div>
                        <div className="Books-menu-col col">
                            {foodmenu ? (
                                <div className="Books-Menu-Wrap">
                                    <div className="Books-Menu-Wrap-row row">
                                        <div className="col">
                                            <div className="Books-menu-btn-one-div">
                                                <button
                                                    onClick={showDonor}
                                                    className="Books-menu-btn-one"
                                                >
                                                    <h1 className="">
                                                        <img src={Clothes} width="100" />
                                                    </h1>
                                                    <h4 className="mt-3">I'm Donor</h4>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="/findbooks">
                                                <div className="Books-menu-btn">
                                                    <button
                                                        // onClick={regiReceiver}
                                                        className="btn Books-menu-btn-two"
                                                    >
                                                        <h1 className="text-white">
                                                            <img src={Clothesreceiver} width="110" />
                                                        </h1>
                                                        <h4 className="mt-3">I'm Receiver</h4>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="Books-Menu-Wrap-row-two row">
                                        <div className="col">
                                            <div className="Books-menu-btn">
                                                <button
                                                    onClick={regiRest}
                                                    className="btn Books-menu-btn-three"
                                                >
                                                    <h1 className="text-white">
                                                        {/* <img src={Booksimgthree} width="100" /> */}
                                                        <VscOrganization className="Books-org-icon" size="100" />
                                                    </h1>
                                                    <h4 className="mt-3">Organization</h4>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="Books-menu-btn">
                                                <button
                                                    onClick={regiVolunteer}
                                                    className="btn Books-menu-btn-four"
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
                                <div className="Books-donor-register card">
                                    <div className="Books-restaurant-register-card-header">
                                        <button onClick={hidemenu} className="btn back-menu-btn">
                                            <IoMdArrowRoundBack /> Back
                                        </button>
                                        <h3 className="Books-btn-tagline mt-3">Books Donor</h3>
                                    </div>
                                    <div className="Books-restaurant-register-wrap card-body">
                                        <h5 className="text-center mb-3">[Donate Books as Individual]</h5>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>State</h6>
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>City</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Books for how many people?</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Time and date of Books Preparation</h6>
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
                                                        <h6>Time and date of Books Expiry</h6>
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" class="btn Books-restaurant-register-submit">
                                                <h6 className="mt-1">Submit</h6>
                                            </button>
                                            <button type="reset" class="btn ml-2 Books-restaurant-register-submit">
                                                <h6 className="mt-1">Reset</h6>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : null}
                            {/* {receive ? (
                                <div className="Books-receiver-register card">
                                    {receive && showreceiver == true ? (
                                        <div>
                                            <div className="Books-receiver-register-card-header card-header">
                                                <h4 className="Books-btn-tagline">
                                                    Register as Receiver
                                                </h4>
                                                <button
                                                    onClick={hidemenu}
                                                    className="btn back-menu-btn"
                                                >
                                                    Back to Menu
                                                </button>
                                            </div>
                                            <div className="Books-receiver-register-wrap card-body">
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
                                            <div className="Books-receiver-register-card-header card-header">
                                                <h4 className="Books-btn-tagline">Login as Receiver</h4>
                                                <button
                                                    onClick={hidemenu}
                                                    className="btn back-menu-btn"
                                                >
                                                    Back to Menu
                                                </button>
                                            </div>
                                            <div className="Books-receiver-register-wrap card-body">
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
                            ) : null} */}
                            {restaurant ? (
                                <div className="Books-restaurant-register card">
                                    <div className="Books-restaurant-register-card-header">
                                        <button onClick={hidemenu} className="btn back-menu-btn">
                                            <IoMdArrowRoundBack /> Back
                                        </button>
                                        <h3 className="Books-btn-tagline mt-3">Restaurant</h3>
                                    </div>
                                    <div className="Books-restaurant-register-wrap card-body">
                                        <h5 className="text-center mb-3">[Donate Books as Restaurant]</h5>
                                        <form>
                                            <div class="mb-2">
                                                <label for="exampleInputEmail1" class="form-label">
                                                    <h6>Restaurant Name</h6>
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
                                                    <h6>Restaurant's Manager Name</h6>
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
                                                    <h6>Restaurant's Address</h6>
                                                </label>
                                                <input
                                                    type="textarea"
                                                    class="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    required
                                                />
                                            </div>
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>State</h6>
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>City</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Books for how many people?</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Time and date of Books Preparation</h6>
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
                                                        <h6>Time and date of Books Expiry</h6>
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" class="btn Books-restaurant-register-submit">
                                                <h6 className="mt-1">Submit</h6>
                                            </button>
                                            <button type="reset" class="btn ml-2 Books-restaurant-register-submit">
                                                <h6 className="mt-1">Reset</h6>
                                            </button>
                                        </form>
                                    </div>
                                    <a className="see-vol-btn" href="#"><h6 className="mt-1">See Available Volunteers</h6></a>
                                </div>
                            ) : null}
                            {volunteer ? (
                                <div className="Books-volunteer-register card">
                                    <div className="Books-restaurant-register-card-header">
                                        <button onClick={hidemenu} className="btn back-menu-btn">
                                            <IoMdArrowRoundBack /> Back
                                        </button>
                                        <h3 className="Books-btn-tagline mt-3">Restaurant</h3>
                                    </div>
                                    <div className="Books-restaurant-register-wrap card-body">
                                        <h5 className="text-center mb-3">[Donate Books as Restaurant]</h5>
                                        <form>
                                            <div class="mb-2">
                                                <label for="exampleInputEmail1" class="form-label">
                                                    <h6>Restaurant Name</h6>
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
                                                    <h6>Restaurant's Manager Name</h6>
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
                                                    <h6>Restaurant's Address</h6>
                                                </label>
                                                <input
                                                    type="textarea"
                                                    class="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    required
                                                />
                                            </div>
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>State</h6>
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>City</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
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
                                                <div class="input-half-div ml-3 mb-2">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Books for how many people?</h6>
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
                                            <div className="Books-form-input-half">
                                                <div class="input-half-div mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">
                                                        <h6>Time and date of Books Preparation</h6>
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
                                                        <h6>Time and date of Books Expiry</h6>
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" class="btn Books-restaurant-register-submit">
                                                <h6 className="mt-1">Submit</h6>
                                            </button>
                                            <button type="reset" class="btn ml-2 Books-restaurant-register-submit">
                                                <h6 className="mt-1">Reset</h6>
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

export default Booksdonor;
