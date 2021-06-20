import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-section">
            <div className="login-wrapper">
                <div className="login-wrapper-row row">
                    <div className="login-title-wrap">
                        <div className="login-title-div">
                            <h1>Login to Your Account</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="login-form-wrapper-row row">
                    <div className="login-col-wrap">
                        <div className="col bg-primary">
                            <div className="login-form-div">
                                <div className="login-switch-btns">
                                    <button>Login as Donor</button>
                                    <button>Login as Receiver</button>
                                </div>
                                <div className="donor-login-form">
                                    <form>
                                        <input type="text" placeholder="Enter email" />
                                        <input type="text" placeholder="Enter pass" />
                                        <button type="submit" class="btn btn-primary">Submit donor</button>
                                    </form>
                                </div>
                                <div className="receiver-login-form">
                                    <form>
                                        <input type="text" placeholder="Enter email" />
                                        <input type="text" placeholder="Enter pass" />
                                        <button type="submit" class="btn btn-primary">Submit receiver</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col bg-secondary">
                            <h1>Two row</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
