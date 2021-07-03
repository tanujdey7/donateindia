import React, { useState } from "react";
import "./BloodDonate.css";
import "./Bloodcamp.css";
import "./Receiver.css";
import Jdata from "./State.json";
import "bootstrap/js/dist/dropdown";
import Bloodbankdetails from "./Data";
import { AiFillBank } from "react-icons/ai";
import { BsCommand } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
import { GiCampingTent, GiReceiveMoney } from "react-icons/gi";
import "./Donor.css";
<<<<<<< Updated upstream
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import 'react-dropdown/style.css';
=======
import 'react-dropdown/style.css';
>>>>>>> Stashed changes
import Rdata from "./Rdata";

const BloodDonate = () => {


    const [donor, setDonor] = useState(false);
    const [receive, setReceive] = useState(false);
    const [bloodbank, setBloodbank] = useState(false);
    const [bloodcamp, setBloodcamp] = useState(false);


    const showDonor = () => {
        setDonor(true);
        setReceive(false);
        setBloodbank(false);
        setBloodcamp(false);
    };

    const showReceiver = () => {
        setDonor(false);
        setReceive(true);
        setBloodbank(false);
        setBloodcamp(false);
    };
    const showBank = () => {
        setDonor(false);
        setReceive(false);
        setBloodbank(true);
        setBloodcamp(false);
    };

    const showCamp = () => {
        setDonor(false);
        setReceive(false);
        setBloodbank(false);
        setBloodcamp(true);
    };



    return (

        <div className="blood-container container-fluid">
            <div className="blood-main-wrapper">
                <div className="blood-donate-row row">
                    <div className="col-4">
                        <div className="icon-div-one">
                            <h1 className="text-light main-icons-h1">
                                <BsCommand size={180} /></h1>
                        </div>
                    </div>
                    <div className="box-col-main col-4">
                        <div className="box-row-one row w-100">
                            <div className="col">
                                <button className="box-row-one-btn" onClick={showDonor}>
                                    <h1 className="icon-h1">
                                        <BiDonateBlood size={100} />
                                    </h1>
                                    <h4 className="text-light mt-4">I'm Donor</h4>
                                </button>
                            </div>
                            <div className="col">
                                <button className="box-row-one-btn" onClick={showReceiver}>
                                    <h1 className="icon-h1">
                                        <GiReceiveMoney size={100} />
                                    </h1>
                                    <h4 className="text-light mt-4">I'm Receiver</h4>
                                </button>
                            </div>
                        </div>
                        <div className="box-row-two row w-100">
                            <div className="col">
                                <button className="box-row-one-btn" onClick={showBank}>
                                    <h1 className="icon-h1">
                                        <AiFillBank size={100} />
                                    </h1>
                                    <h4 className="text-light mt-4">Blood Bank</h4>
                                </button>
                            </div>
                            <div className="col">
                                <button className="box-row-one-btn" onClick={showCamp}>
                                    <h1 className="icon-h1">
                                        <GiCampingTent size={100} />
                                    </h1>
                                    <h4 className="text-light mt-4">Donation Camp</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bg-transparent">
                            <h1 className="text-light"><BsCommand size={180} /></h1>
                        </div>
                    </div>
                </div>
            </div>
            {donor ? (
                <div className="Donor-wrapper w-100">
                    <div className="Bloodcamp-row-two row w-100">
                        <div className="col">
                            <div className="Bloodcamp-title-div">
                                <h1>Register as Blood Donor</h1>
                            </div>
                        </div>
                    </div>
                    <div className="Donor-row row w-75 ml-auto mr-auto">
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
                                <ul class="list-group text-left">
                                    <li class="list-group-item bg-transparent border-0">“A life may depend on a gesture from you, a bottle of Blood.”</li>
                                    <li class="list-group-item bg-transparent border-0">“Tears of a mother cannot save her Child. But your Blood can.”</li>
                                    <li class="list-group-item bg-transparent border-0">“The Blood Donor of today may be recipient of tomorrow.”</li>
                                    <li class="list-group-item bg-transparent border-0">“It feels good, It makes me Proud, I am a blood donor.”</li>
                                    <li class="list-group-item bg-transparent border-0">“Your blood donation is the best social help!”</li>
                                </ul>
                            </div></div>
                    </div>
                </div>) : null}

            {receive ? (
                <div className="blood-wrapper">
                    <div className="Bloodcamp-row-two row">
                        <div className="col">
                            <div className="Bloodcamp-title-div">
                                <h1>Find Blood Donors Near you</h1>
                            </div>
                        </div>
                    </div>
                    <div className="blood-wrapper-row-two row w-100">
                        <div className="col">
                            <div className="dropdown-wrapper ml-auto mr-auto">
                                <form name="myform" id="myForm">
                                    <select id="countySel" size="1">
                                        {Jdata.DStates.map(function (role, i) { <option value="" Key={i} selected="selected">{role.DStates}</option> })}
                                    </select>


                                    <select id="stateSel" size="1">
                                        <option value="" selected="selected">-- Select State--</option>
                                    </select>

                                    <select id="citySel" size="1">
                                        <option value="" selected="selected">-- Select City--</option>
                                    </select>

                                    <select id="zipSel" size="1">
                                        <option value="" selected="selected">-- Select Zip--</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="blood-wrapper-row-three row">
                        <div className="blood-bank-col col-11">
                            <table class="table receiver-data-table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sr</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Blood Group</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Preference</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {Rdata.map(anydata => {
                                        return <tr className="receiver-data-tr">

                                            <td>{anydata.Srno}</td>
                                            <td>{anydata.Name}</td>
                                            <td>{anydata.Address}</td>
                                            <td>{anydata.Phone}</td>
                                            <td>{anydata.Email}</td>
                                            <td>{anydata.Age}</td>
                                            <td>{anydata.BloodGroup}</td>
                                            <td>{anydata.Gender}</td>
                                            <td>{anydata.Preference}</td></tr>
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>


                </div>) : null}
            {/* blood bank */}

            {bloodbank ? (<div className="blood-wrapper-two">
                <div className="Bloodcamp-row-two row w-100">
                    <div className="col">
                        <div className="Bloodcamp-title-div">
                            <h1>Find Blood Banks</h1>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-two row w-100">
                    <div className="col">
                        <div className="dropdown-wrapper ml-auto mr-auto">
                            <form name="myform" id="myForm">
                                <select id="countySel" size="1">
                                    <option value="" selected="selected">-- Select Country --</option>
                                </select>


                                <select id="stateSel" size="1">
                                    <option value="" selected="selected">-- Select State--</option>
                                </select>

                                <select id="citySel" size="1">
                                    <option value="" selected="selected">-- Select City--</option>
                                </select>

                                <select id="zipSel" size="1">
                                    <option value="" selected="selected">-- Select Zip--</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-three row">
                    <div className="blood-bank-col col-11">
                        <table class="table blood-bank-data-table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Sr</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Services</th>
                                    <th>Type</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Bloodbankdetails.map(anydata => {
                                    return <tr>

                                        <td>{anydata.Srno}</td>
                                        <td>{anydata.Name}</td>
                                        <td>{anydata.Address}</td>
                                        <td>{anydata.Phone}</td>
                                        <td>{anydata.Email}</td>
                                        <td>{anydata.Category}</td>
                                        <td>{anydata.Services}</td>
                                        <td>{anydata.Type}</td></tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>) : null}

            {/* blood camp */}

            {bloodcamp ? (
                <div className="Bloodcamp-wrapper">
                    <div className="Bloodcamp-row-two row w-100">
                        <div className="col">
                            <div className="Bloodcamp-title-div">
                                <h1>Find Blood Camps</h1>
                            </div>
                        </div>
                    </div>
                    <div className="Bloodcamp-row-three row">
                        <div className="col">
                            <div className="Bloodcamp-dropdown-wrapper ml-auto mr-auto">
                                <form name="myform" id="myForm">
                                    <select id="countySel" size="1">
                                        <option value="" selected="selected">-- Select Country --</option>
                                    </select>


                                    <select id="stateSel" size="1">
                                        <option value="" selected="selected">-- Select State--</option>
                                    </select>

                                    <select id="citySel" size="1">
                                        <option value="" selected="selected">-- Select City--</option>
                                    </select>

                                    <select id="zipSel" size="1">
                                        <option value="" selected="selected">-- Select Zip--</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Bloodcamp-row-four row">
                        <div className="Bloodcamp-row-four-col col">
                            <table class="table Bloodcamp-data-table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sr</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Blood Group</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Preference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Rdata.map(anydata => {
                                        return <tr className="Bloodbank-data-tr">

                                            <td>{anydata.Srno}</td>
                                            <td>{anydata.Name}</td>
                                            <td>{anydata.Gender}</td>
                                            <td>{anydata.Age}</td>
                                            <td>{anydata.BloodGroup}</td>
                                            <td>{anydata.Phone}</td>
                                            <td>{anydata.Email}</td>
                                            <td>{anydata.Address}</td>
                                            <td>{anydata.Preference}</td></tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>) : null}
        </div>
    )
}

export default BloodDonate;
