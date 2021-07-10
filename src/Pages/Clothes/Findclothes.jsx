import React, { useEffect } from 'react';
import "./Findclothes.css";
import "bootstrap/js/dist/dropdown";
import mockData from "./Statecitydata";
import Rdata from "./Rdata";
import Blooddonor from "../Images/Blooddonor.png";

const Findclothes = () => {
    return (
        <div className="blood-container container-fluid">
            <div className="blood-wrapper pt-5 mb-5">
                <div className="Bloodcamp-row-two row">
                    <div className="col">
                        <div className="Bloodcamp-title-div">
                            <h1>Find Clothes Donors Near you</h1>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-two row w-100">
                    <div className="col">
                        <div className="dropdown-wrapper ml-auto mr-auto">
                            
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


export default Findclothes;
