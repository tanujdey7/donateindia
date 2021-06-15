import React from 'react';
import "./Donationcount.css";
import Happygirl from "../Images/icons/happygirl.png";
import { FiCloud } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";

const Donationcount = () => {
    return (
        <div className="donationcount-wrapper">
            <div className="donation-count-row row">
                <div className="donation-count-row-wrap">
                    <div className="donation-count-col-one col-2">
                        <div className="donation-count-cloud">
                            <FiCloud size={150} className="text-white" />
                        </div>
                    </div>
                    <div className="donation-count-col-two col-7">
                        <div className="donation-count-col-two-wrap">
                            <div className="donation-count-col-two-rowone row">
                                <h1>We're on a mission of Big changes.</h1>
                                <h1>To help people and the world.</h1>
                            </div>
                            <div className="donation-count-col-two-rowtwo row">
                                <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</h6>
                            </div>
                            <div className="donation-count-col-two-rowthree row">
                                <div className="donation-count-card"><h1 className="text-warning"><FaRupeeSign size={45} />50K</h1><h6 className="text-warning">Raised</h6></div>
                                <div className="donation-count-card"><h1>300+</h1><h6>Volunteers</h6></div>
                                <div className="donation-count-card"><h1>200+</h1><h6>Organizations</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className="donation-count-col-three col-3">
                        <div className="donation-count-girl">
                            <img src={Happygirl} width="370" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Donationcount;
