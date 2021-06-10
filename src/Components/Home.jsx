import React from 'react';
import Poverty from "../Images/poverty.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Home=()=> {
    return (
        <div className="home-wrapper">
            <div className="hero-section">
                <div className="row">
                    <div className="col bg-info"><h1>One</h1></div>
                    <div className="col bg-secondary">
                        <div>
                            <div className="card w-50">
                                <div className="card-body">
                                    <img src={Poverty} width="400" className="rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
