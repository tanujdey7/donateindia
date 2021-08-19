import React from "react";
import { BsCloud } from "react-icons/bs";
import "./Mission.css";
import Blooddrop from "../Images/health.svg";
import Books from "../Images/books.svg";
import Clothes from "../Images/clothes.svg";
import Food from "../Images/food.svg";

function Mission() {
  return (
    <div className="mission-row row">
      <div className="mission-col cloud-icon-col-one col-2">
        <h1 className="cloud-icon-one">
          <BsCloud className="cloud" size={200} />
        </h1>
      </div>
      <div className="mission-col col-4">
        <div className="mission-card card">
          <div className="mission-card-head card-head">
            <button className="btn">What we do</button>
          </div>
          <div className="mission-card-body card-body">
            <h1 className="mission-text">
              The mission and goals of our organization
            </h1>
            <h6 className="">
              Charity is the global movement encouraging the power of people and
              organization to transform their communities and the world. What
              can we do to make some changes?
            </h6>
          </div>
        </div>
        <div className="mission-card-footer card-footer">
          <button className="btn btn-lg donate-now-btn">Donate Now</button>
        </div>
      </div>
      <div className="mission-col col-4">
        <div className="mission-box-wrap">
          <div className="mission-box-row row">
            <div className="mission-box-col col-6">
              <a href="/blood/blooddonate">
                <div className="mission-box-one card">
                  <div className="mission-box-img card-body">
                    <img src={Blooddrop} alt="Blooddrop" width="120" />
                  </div>
                  <div className="mission-box-footer card-footer">
                    <h5>Blood Donation</h5>
                    <h6>Donate Now</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="mission-box-col col-6">
              <a href="/food/fooddonate">
                <div className="mission-box-two card">
                  <div className="mission-box-img card-body">
                    <img src={Food} alt="Food" width="120" />
                  </div>
                  <div className="mission-box-footer card-footer">
                    <h5>Food Donation</h5>
                    <h6>Donate Now</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mission-box-row-two row">
            <div className="mission-box-col col-6">
              <a href="/clothes/clothesdonate">
              <div className="mission-box-three card">
                <div className="mission-box-img card-body">
                  <img
                    className="svg-color"
                    src={Clothes}
                    alt="Clothes"
                    width="120"
                  />
                </div>
                <div className="mission-box-footer card-footer">
                  <h5>Clothes Donation</h5>
                  <h6>Donate Now</h6>
                </div>
              </div>
              </a>
            </div>
            <div className="mission-box-col  col-6">
              <a href="/books/booksdonate">
              <div className="mission-box-four card">
                <div className="mission-box-img card-body">
                  <img src={Books} alt="Books" width="110" />
                </div>
                <div className="mission-box-footer card-footer">
                  <h5>Books Donation</h5>
                  <h6>Donate Now</h6>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-col cloud-icon-col-two col-2">
        <h1 className="cloud-icon ">
          <BsCloud size={200} />
        </h1>
      </div>
    </div>
  );
}

export default Mission;
