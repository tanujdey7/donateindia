import React from 'react';
import "./BloodDonate.css";
import { AiOutlineCloud, AiFillBank} from "react-icons/ai";
import { BiDonateBlood} from "react-icons/bi";
import { GiCampingTent, GiReceiveMoney} from "react-icons/gi";
// import Donor from "../Images/solidarity.png";

const BloodDonate = () => {
    return (
        <div className="blood-container container-fluid">
            <div className="wrapper w-100">
                <div className="blood-donate-row row pt-5 pb-5">
                    <div className="col-4">
                        <div><h1 className="text-light"><AiOutlineCloud size={200} /></h1></div>
                    </div>
                    <div className="box-col-main col-4">
                        <div className="box-row-one row w-100">
                            <div className="col"><div className="box-one"><h1><BiDonateBlood size={120} /></h1>
                            <h4 className="text-light">Donor</h4></div></div>
                            <div className="col"><div className="box-two"><h1><GiReceiveMoney size={120} /></h1></div></div>
                        </div>
                        <div className="box-row-two row w-100">
                            <div className="col"><div className="box-three"><h1><AiFillBank size={120} /></h1></div></div>
                            <div className="col"><div className="box-four"><h1><GiCampingTent size={120} /></h1></div></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div><h1 className="text-light"><AiOutlineCloud size={200} /></h1></div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default BloodDonate;
