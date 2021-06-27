import React from 'react';
import "./Donor.css";
import "bootstrap/js/dist/dropdown";
// import { Formik, Field, Form } from 'formik';
// import Bloodbankdetails from "./Data";

const Donor = () => {
    return (
        <div className="Donor-container container-fluid">
            <div className="Donor-wrapper">
                <div className="Donor-row row">
                    <div className="col-8">
                        <div className="Donor-form-wrap">
                            <form className="Donor-reg-form text-left">
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="exampleInputPassword1">First Name</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="First Name" />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="inputState">Gender</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">D.O.B</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Date Of Birth" />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="exampleInputPassword1">Mobile No.</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="Donor-form-threehalf-div">
                                    <div class="form-group Donor-form-threehalf">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group Donor-form-threehalf ml-3">
                                        <label for="inputState">District</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group Donor-form-threehalf ml-3">
                                        <label for="inputState">City</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="inputState">Preference</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="inputState">Preference</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn Donor-reg-btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"><h2>One</h2></div>
                </div>
            </div>
        </div>
    )
}

export default Donor;
