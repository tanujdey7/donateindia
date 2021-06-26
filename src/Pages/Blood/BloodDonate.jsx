import React from 'react';
import "./BloodDonate.css";
import "bootstrap/js/dist/dropdown";
import { AiOutlineCloud, AiFillBank } from "react-icons/ai";
import { BiShapeCircle } from "react-icons/bi";
import { BsCommand } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
import { GiCampingTent, GiReceiveMoney } from "react-icons/gi";
import DonorOne from "../Images/blooddonateiconone.png";
import DonorTwo from "../Images/blooddonationtwo.png";

import Statedata from "./Statedata";
import Citydata from "./CityData";

const BloodDonate = () => {
    return (
        <div className="blood-container container-fluid">
            <div className="wrapper w-100">
                <div className="blood-donate-row row">
                    <div className="col-4">
                        <div className="icon-div-one">
                            <h1 className="text-light main-icons-h1"><BsCommand size={180} /></h1>
                        </div>
                    </div>
                    <div className="box-col-main col-4">
                        <div className="box-row-one row w-100">
                            <div className="col">
                                <a href="#">
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
            <div className="blood-wrapper-two pt-5">
                <div className="blood-wrapper-row-one row w-100">
                    <div className="col">
                        <div className="display-4">
                            <h1>Find Blood Banks near you</h1>
                        </div>
                    </div>
                </div>
                <div className="blood-wrapper-row-two row w-100">
                    <div className="col">
                        <div className="drop-div ml-auto mr-auto w-50 bg-dark">
                            <div class="dropdown">
                                <button class="dropbtn">State</button>
                                <div class="dropdown-content">
                                    {Statedata.map((sdata) => (
                                        <a href="#">{sdata.Name}</a>
                                    ))}
                                </div>
                            </div>
                            <div class="dropdown ml-3">
                                <button class="dropbtn">State</button>
                                <div class="dropdown-content">
                                    {Citydata.map((cdata) => (
                                        <a href="#">{cdata.CityName}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BloodDonate;
