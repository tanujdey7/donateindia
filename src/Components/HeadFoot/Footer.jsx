import React from 'react';
import "./Footer.css";
import { FaGgCircle} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { GrFacebookOption,GrTwitter} from "react-icons/gr";

const Footer=()=> {
    return (
        <div className="footer-wrapper">
            <div className="footer-row-one row">
                <div className="footer-row-col-one col-9">
                    <h1>Don’t turn away, Give today!</h1>
                </div>
                <div className="footer-row-col-two col-3">
                    <button className="btn footer-btn">Contact Us</button>
                </div>
            </div>
            <div className="footer-line">
            {/* <h1>.</h1> */}
            </div>
            <div className="footer-row-two row">
                <div className="footer-row-col-three col-8">
                    <h6><FaGgCircle size={40} />  Privacy polic - Modern Day Statement - Social Impact Statement</h6>
                </div>
                <div className="footer-row-col-four col-4">
                    <div className="footer-icons-div">
                        <h6 className="mt-1">enquiry@donateindia.com</h6>
                        <a href="#"><GrFacebookOption size={25} /></a>
                        <a href="#"><FaInstagram size={25} /></a>
                        <a href="#"><GrTwitter size={25} /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
