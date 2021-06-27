import React from 'react';
import "./BloodDonate.css";
import "bootstrap/js/dist/dropdown";
import Bloodbankdetails from "./Data";
import { AiOutlineCloud, AiFillBank } from "react-icons/ai";
// import { BiShapeCircle } from "react-icons/bi";
import { BsCommand } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
import { GiCampingTent, GiReceiveMoney } from "react-icons/gi";
// import DonorOne from "../Images/blooddonateiconone.png";
// import DonorTwo from "../Images/blooddonationtwo.png";

// import Statedata from "./Statedata";
// import Citydata from "./CityData";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];
const optionstwo = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];

const defaultOption = options[0];
const twoOption = optionstwo[0];

const BloodDonate = () => {
    return (
        <div className="blood-container container-fluid">
            <div className="blood-main-wrapper w-100">
                <div className="blood-donate-row row">
                    <div className="col-4">
                        <div className="icon-div-one">
                            <h1 className="text-light main-icons-h1"><BsCommand size={180} /></h1>
                        </div>
                    </div>
                    <div className="box-col-main col-4">
                        <div className="box-row-one row w-100">
                            <div className="col">
                                <a href="/iamdonor">
                                    <div className="box-one">
                                        <h1 className="icon-h1 pt-4">
                                            <BiDonateBlood size={100} />
                                        </h1>
                                        <h4 className="text-light mt-4">I'm Donor</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="box-two">
                                        <h1 className="icon-h1 pt-4">
                                            <GiReceiveMoney size={100} />
                                        </h1>
                                        <h4 className="text-light mt-4">I'm Receiver</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="box-row-two row w-100">
                            <div className="col">
                                <a href="#">
                                    <div className="box-three">
                                        <h1 className="icon-h1 pt-4">
                                            <AiFillBank size={100} />
                                        </h1>
                                        <h4 className="text-light mt-4">Blood Bank</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#">
                                    <div className="box-four">
                                        <h1 className="icon-h1 pt-4">
                                            <GiCampingTent size={100} />
                                        </h1>
                                        <h4 className="text-light mt-4">Donation Camp</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bg-transparent">
                            {/* <img src={DonorTwo} alt="Donor" width="400" /> */}
                            <h1 className="text-light"><BsCommand size={180} /></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blood-wrapper-two pt-5 mb-5">
                <div className="blood-wrapper-row-one row w-100">
                    <div className="col">
                        <div className="display-4">
                            <h1>Find Blood Banks near you</h1>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-two row w-100">
                    <div className="col">
                        <div className="dropdown-wrapper ml-auto mr-auto">
                            <div className="drop-div">
                                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                            </div>
                            <div className="drop-div">
                                <Dropdown options={optionstwo} onChange={this._onSelect} value={twoOption} placeholder="Select an option" />
                            </div>
                            <div className="drop-div">
                                <button className="btn bank-search-btn text-white">Search</button>
                            </div>
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
            </div>

        </div>
    )
}

export default BloodDonate;
