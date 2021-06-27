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
                                        <input type="text" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input type="text" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="inputState">Gender</label>
                                        <select id="inputState" class="form-inputs">
                                            <option disabled>Choose One..</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">D.O.B</label>
                                        <input type="date" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="inputState">Blood Group</label>
                                        <select id="inputState" class="form-inputs">
                                            <option disabled>Choose One..</option>
                                            <option>AB</option>
                                            <option>B+</option>
                                        </select>
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Adhar Card No</label>
                                        <input type="tel" maxLength="12" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="exampleInputPassword1">Mobile No.</label>
                                        <input type="tel" maxLength="10" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="email" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                </div>
                                <div className="Donor-form-threehalf-div">
                                    <div class="form-group Donor-form-threehalf">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-inputs">
                                            <option selected>Choose...</option>
                                            <option>Gujarat</option>
                                            <option>UttarPradesh</option>
                                            <option>Maharastra</option>
                                            <option>Punjab</option>
                                            <option>Rajasthan</option>
                                        </select>
                                    </div>
                                    <div class="form-group Donor-form-threehalf ml-3">
                                        <label for="inputState">District</label>
                                        <select id="inputState" class="form-inputs">
                                            <option selected>Choose...</option>
                                            <option>Ahmedabad</option>
                                            <option>Lucknow</option>
                                            <option>Mumbai</option>
                                            <option>Chandigarh</option>
                                            <option>Jaipur</option>
                                        </select>
                                    </div>
                                    <div class="form-group Donor-form-threehalf ml-3">
                                        <label for="inputState">City</label>
                                        <select id="inputState" class="form-inputs">
                                            <option selected>Choose...</option>
                                            <option>Ahmedabad</option>
                                            <option>Lucknow</option>
                                            <option>Mumbai</option>
                                            <option>Chandigarh</option>
                                            <option>Jaipur</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" class="form-inputs" id="exampleInputPassword1" required />
                                    </div>
                                </div>
                                <div className="Donor-form-half-div">
                                    <div class="form-group donor-form-half">
                                        <label for="inputState">Preference</label>
                                        <select id="inputState" class="form-inputs">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group donor-form-half ml-3">
                                        <label for="inputState">Preference</label>
                                        <select id="inputState" class="form-inputs">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn Donor-reg-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Donor-desc-wrap">
                            <ul class="list-group">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">And a fifth one</li>
                            </ul>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Donor;
