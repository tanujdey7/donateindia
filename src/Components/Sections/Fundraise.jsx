import React from 'react';
import "./Fundraise.css";
import Bird from "../Images/icons/bird.svg";
import Volunteer from "../Images/icons/user.svg";
import Heart from "../Images/icons/heart.svg";
import Support from "../Images/icons/support.svg";
import Imgone from "../Images/icons/fathdaught.jpg";
import Imgtwo from "../Images/icons/girlreading.jpg";
import Imgthree from "../Images/icons/books.jpg";
import { ProgressBar } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
// import Imgfour from "../Images/icons/man.png";

const Fundraise = () => {

    const raised = 50000;
    const received = 37000;
    const receivedper = received / raised * 100;
    const now = receivedper;
    return (
        <div className="fundraise-wrapper">

            <div className="fundraise-row row">
                <div className="fundraise-row-one-wrapper">
                    <div className="fundraise-col col">
                        <div className="fundraise-div fundraise-div-one">
                            <img src={Bird} alt="Bird" /><h4 className="fundraise-div-text">Inspiration</h4>
                        </div>
                    </div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divtwo">
                        <img src={Volunteer} alt="Volunteers" /><h4 className="fundraise-div-text">Volunteering</h4>
                    </div></div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divthree">
                        <img src={Heart} alt="Heart" /> <h4 className="fundraise-div-text">Donations</h4>
                    </div></div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divfour">
                        <img src={Support} alt="Support" /> <h4 className="fundraise-div-text">Support</h4>
                    </div></div>
                </div>
            </div>
            <div className="fundraise-title-row row">
                <div className="fundraise-title">
                    <h1>You can help lots of people by donating little</h1>
                </div>
            </div>
            <div className="fundraise-card-row row">
                <div className="fundraise-card-wrap">
                    <div className="col-3">
                        <div className="fundraise-card card">
                            <div className="fundraise-card-header card-header">
                                <img src={Imgone} alt="Imgone" className="card-img-top" width="100" />
                            </div>
                            <div className="fundraise-card-body card-body">
                                <h6><FaRupeeSign />{received} of {raised}</h6>
                                <h6><ProgressBar variant="warning" now={now} label={`${now}%`} /></h6>
                                <h6>Children education donation</h6>
                            </div>
                            <div className="fundraise-card-footer card-footer">
                                <button className="btn btn-md fundraise-btn">Donate now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"><div className="fundraise-card card">
                        <div className="fundraise-card-header card-header">
                            <img src={Imgtwo} alt="Imgtwo" className="card-img-top" width="100" />
                        </div>
                        <div className="fundraise-card-body card-body">
                            <h6><FaRupeeSign />{received} of {raised}</h6>
                            <h6><ProgressBar variant="warning" now={now} label={`${now}%`} /></h6>
                            <h6>Give a donation, make a life!</h6>
                        </div>
                        <div className="fundraise-card-footer card-footer">
                            <button className="btn btn-md fundraise-btn">Donate now</button>
                        </div>
                    </div></div>
                    <div className="col-3"><div className="fundraise-card card">
                        <div className="fundraise-card-header card-header">
                            <img src={Imgthree} alt="Imgthree" className="card-img-top" width="100" />
                        </div>
                        <div className="fundraise-card-body card-body">
                            <h6><FaRupeeSign />{received} of {raised}</h6>
                            <h6><ProgressBar variant="warning" now={now} label={`${now}%`} /></h6>
                            <h6>Donate for olage homes..</h6>
                        </div>
                        <div className="fundraise-card-footer card-footer">
                            <button className="btn btn-md fundraise-btn">Donate now</button>
                        </div>
                    </div></div>
                    <div className="col-3">
                        <div className="fundraise-card card">
                            <div className="fundraise-card-header card-header">
                                <img src={Imgtwo} alt="Imgtwo" className="card-img-top" width="100" />
                            </div>
                            <div className="fundraise-card-body card-body">
                                <h6><FaRupeeSign />{received} of {raised}</h6>
                                <h6><ProgressBar variant="warning" now={now} label={`${now}%`} /></h6>
                                <h6>Emergency and food supply</h6>
                            </div>
                            <div className="fundraise-card-footer card-footer">
                                <button className="btn btn-md fundraise-btn">Donate now</button>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Fundraise;
