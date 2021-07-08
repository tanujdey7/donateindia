import React from 'react';
import "./Findbloodbank.css";
import "bootstrap/js/dist/dropdown";
// import ReceiverData from "./Receiver";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import Rdata from "./Rdata";
import Blooddonor from "../Images/Blooddonor.png";

const Receiver = () => {
    return (
        <div className="blood-container container-fluid">
            <div className="blood-wrapper pt-5 mb-5">
                <div className="Bloodcamp-row-one row">
                    <div className="col">
                        <div className="Bloodcamp-img-div">
                            <img src={Blooddonor} width="600" />
                        </div>
                    </div>
                </div>
                <div className="Bloodcamp-row-two row">
                    <div className="col">
                        <div className="Bloodcamp-title-div">
                            <h1>Find Blood banks Near you</h1>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-two row w-100">
                    <div className="col">
                        <div className="dropdown-wrapper ml-auto mr-auto">
                            <div className="drop-div">
                                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                {/* <Dropdown options={optionstwo} onChange={this._onSelect} value={twoOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                {/* <Dropdown options={optionstwo} onChange={this._onSelect} value={twoOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                <button className="btn bank-search-btn text-white">Search</button>
                            </div>
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
            </div>

        </div>
    )
}

export default Receiver;
