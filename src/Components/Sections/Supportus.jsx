import React from 'react';
import { RiHeartAddLine} from "react-icons/ri";
import { FaHands, FaRibbon} from "react-icons/fa";
import "./Supportus.css";

const Supportus=()=> {
    return (
        <div className="supportus-wrapper">
            <div className="supportus-title-row row">
                <div className="supportus-title-div">
                    <div className="supportus-title-text">
                        <h1>How you can support us</h1>
                        <h6>Donate india is a organization that collaborate with volunteers hsgdj dsbgfkdsgfds sdgygd sdhdghd ashggs wteh k ahs kkdjb yruu s</h6>
                    </div>
                </div>
            </div>
            <div className="supportus-row-two row">
                {/* <div className="supportus-icons-div"> */}
                    <div className="col-xl-4 col-sm-12">
                        <div className="supportus-icons-card card">
                            <div className="supportus-icons-header card-header">
                                <div className="supportus-icons-heart" ><RiHeartAddLine className="mt-3" size={70} /></div>
                            </div>
                            <div className="supportus-icons-body card-body">
                                <h3>Give Love</h3>
                                <h6>Ragjjs thhgs ttagha jsjshhs klkkfkfk suahs sh sgvgdvg</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-12">
                        <div className="supportus-icons-card card">
                            <div className="supportus-icons-header card-header">
                                <div className="supportus-icons-hands" ><FaHands className="mt-3" size={70} /></div>
                            </div>
                            <div className="supportus-icons-body card-body">
                                <h3>Save the planet</h3>
                                <h6>Ragjjs thhgs ttagha jsjshhs klkkfkfk suahs sh sgvgdvg</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-12">
                        <div className="supportus-icons-card card">
                            <div className="supportus-icons-header card-header">
                                <div className="supportus-icons-ribbon" ><FaRibbon className="mt-3" size={70} /></div>
                            </div>
                            <div className="supportus-icons-body card-body">
                                <h3>Give Love</h3>
                                <h6>Ragjjs thhgs ttagha jsjshhs klkkfkfk suahs sh sgvgdvg</h6>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Supportus;
