import React, { useState } from "react";
import Bloodimg from "../Images/donation/blooddonation.png";
import { IoMdArrowRoundBack } from "react-icons/io";
// icons
import Bdonor from "../Images/icons/bdonate.png";
import Breceive from "../Images/icons/breceive.png";
import Bbank from "../Images/icons/bbank.png";
import Bcamp from "../Images/icons/camp.png";

import "../AllMainPages.css";
import { useHistory } from "react-router-dom";

const initialBloodOrgValues = {
  orgName: "",
  orgAddress: "",
  orgEmail: "",
  orgState: "",
  orgCity: "",
  orgEmail: "",
  orgPhone: "",
  orgCategory: "",
};
const initialBloodCampValues = {
  campName: "",
  campOrganizedBy: "",
  campAddress: "",
  campState: "",
  campCity: "",
  campPhone: "",
  campDate: "",
  campTime: "",
};

const Blooddonate = () => {
  const [donor, setDonor] = useState(false);
  const [receive, setReceive] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [foodmenu, setfoodmenu] = useState(true);
  const [receiverlogin, setReceiverlogin] = useState(false);
  const [showreceiver, setShowreceiver] = useState(true);

  const history = useHistory();

  const [orgDonorValue, setOrg] = useState(initialBloodOrgValues);
  const [campDonorValue, setCamp] = useState(initialBloodCampValues);

  const {
    orgName,
    orgAddress,
    orgState,
    orgCity,
    orgEmail,
    orgPhone,
    orgCategory,
  } = orgDonorValue;

  const {
    campName,
    campAddress,
    campState,
    campCity,
    campPhone,
    campOrganizedBy,
    campTime,
    campDate,
  } = campDonorValue;

  return (
    <div className="BloodDonate-wrapper">
      <div className="Blood-menu-row row">
        <div className="Blood-img-col col-xl-6 col-sm-12">
          <img src={Bloodimg} className="blood-image img-fluid" />
        </div>
        <div className="Blood-menu-col  col-xl-6 col-sm-12">
          {foodmenu ? (
            <div className="Menu-Wrap ">
              <div className="Menu-Wrap-row row">
                <div className="Menu-col col">
                  <a href="/blood/AddPages/BloodDonor">
                    <button className="Menu-main-btn">
                      <h1 className="blood-all-icons">
                        <img src={Bdonor} alt="DonorImg" />
                      </h1>
                      <h4 className="mt-3">I'm Donor</h4>
                    </button>
                  </a>
                </div>
                <div className="Menu-col  col">
                  <a href="/blood/blooddonate/findblooddonor">
                    <button className="Menu-main-btn">
                      <h1 className="blood-all-icons">
                        <img src={Breceive} alt="DonorImg" />
                      </h1>
                      <h4 className="mt-3">I'm Receiver</h4>
                    </button>
                  </a>
                </div>
              </div>
              <div className="Menu-Wrap-row row">
                <div className="Menu-col  col">
                  <button className="Menu-main-btn">
                    <h1 className="blood-all-icons">
                      <img src={Bbank} alt="DonorImg" />
                    </h1>
                    <h4 className="mt-3">Blood Bank</h4>
                  </button>
                </div>
                <div className="Menu-col  col">
                  <button className="Menu-main-btn">
                    <h1 className="blood-all-icons">
                      <img src={Bcamp} alt="DonorImg" />
                    </h1>
                    <h4 className="mt-3">Blood Camps</h4>
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Blooddonate;
