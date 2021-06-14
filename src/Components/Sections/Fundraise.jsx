import React from 'react';
import "./Fundraise.css";
import Bird from "../Images/icons/bird.svg";
import Volunteer from "../Images/icons/user.svg";
import Heart from "../Images/icons/heart.svg";
import Support from "../Images/icons/support.svg";
import Imgone from "../Images/icons/fathdaught.jpg";
import Imgtwo from "../Images/icons/girlreading.jpg";
import Imgthree from "../Images/icons/books.jpg";
// import Imgfour from "../Images/icons/man.png";

const Fundraise = () => {

    const bardata=60;
    return (
        <div className="fundraise-wrapper">

            <div className="fundraise-row row">
                <div className="fundraise-row-one-wrapper">
                    <div className="fundraise-col col">
                        <div className="fundraise-div fundraise-div-one">
                            <img src={Bird} /><h4 className="fundraise-div-text">Inspiration</h4>
                        </div>
                    </div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divtwo">
                        <img src={Volunteer} /><h4 className="fundraise-div-text">Volunteering</h4>
                    </div></div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divthree">
                        <img src={Heart} /> <h4 className="fundraise-div-text">Donations</h4>
                    </div></div>
                    <div className="fundraise-col col"><div className="fundraise-div fundraise-divfour">
                        <img src={Support} /> <h4 className="fundraise-div-text">Support</h4>
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
                            <div className="card-header">
                                <img src={Imgone} className="card-img-top" width="100" />
                            </div>
                            <div className="card-body">
                                <h5>Money</h5>
                                <h5>Money</h5>
                                <h5>Money</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-md fundraise-btn">Donate now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"><div className="fundraise-card card">
                        <div className="card-header">
                            <img src={Imgtwo} className="card-img-top" width="100" />
                        </div>
                        <div className="card-body">
                            <h5>Money</h5>
                            <h5>Money</h5>
                            <h5>Money</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-md fundraise-btn">Donate now</button>
                        </div>
                    </div></div>
                    <div className="col-3"><div className="fundraise-card card">
                        <div className="card-header">
                            <img src={Imgthree} className="card-img-top" width="100" />
                        </div>
                        <div className="card-body">
                            <h5>Money</h5>
                            <h5>Money</h5>
                            <h5>Money</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-md fundraise-btn">Donate now</button>
                        </div>
                    </div></div>
                    <div className="col-3">
                        <div className="fundraise-card card">
                            <div className="card-header">
                                <img src={Imgtwo} className="card-img-top" width="100" />
                            </div>
                            <div className="fundraise-card-body card-body">
                                <h5>Money</h5>
                                <ProgressBar bardata={now} label={`${bardata}%`} />;
                                <h5>Money</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-md fundraise-btn">Donate now</button>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Fundraise;
