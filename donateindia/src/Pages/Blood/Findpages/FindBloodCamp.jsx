import React from "react";
import "./FindBloodDonor.css";
import "bootstrap/js/dist/dropdown";
import { useState, useEffect } from "react";
import { getCamps } from "../../../Service/api";

const FindBloodCamp = () => {
  const [camps, setUsers] = useState([]);
  useEffect(() => {
    getAllCamps();
  }, []);
  const getAllCamps = async () => {
    const response = await getCamps();
    console.log(response.data);
    setUsers(response.data);
  };

  const allstates = ["Gujarat", "Maharastra", "UttarPradesh"];
  const [selected, setSelected] = React.useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const gujState = ["Ahmedabad", "Rajkot", "Vadodara"];
  const mhState = ["Mumbai", "Pune", "Nashik"];

  const upState = ["Lko", "GKP", "Noida"];

  let type = null;
  let options = null;
  if (selected === "Gujarat") {
    type = gujState;
  } else if (selected === "Maharastra") {
    type = mhState;
  } else if (selected === "UttarPradesh") {
    type = upState;
  }
  if (type) {
    options = type.map((el) => (
      <option className="" key={el}>
        {el}
      </option>
    ));
  }
  return (
    <div className="FindFoodDonor-container container-fluid">
      <div className="FindFoodDonor-wrapper pt-5 mb-5">
        <div className="FindFoodDonorcamp-row-two row">
          <div className="col">
            <div className="FindFoodDonorcamp-title-div">
              <h1>Find Food Camp Near you</h1>
            </div>
          </div>
        </div>
        <div className="FindFoodDonor-wrapper-row-two row w-100">
          <div className="col">
            <div className="dropdown-wrapper ml-auto mr-auto">
              <form className="dropdown-wrapper-form">
                <div class="input-half-div mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <h6>State</h6>
                  </label>
                  <select
                    onChange={changeSelectOptionHandler}
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option>Choose State</option>
                    {allstates.map((st) => (
                      <option className="" key={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="input-half-div ml-3 mb-2">
                  <label for="exampleInputEmail1" class="form-label">
                    <h6>City</h6>
                  </label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    {options}
                  </select>
                </div>
                <div class="input-half-div ml-3 mb-2">
                  <label for="exampleInputEmail1" class="form-label">
                    <h6>City</h6>
                  </label>
                  <input
                    type="submit"
                    value="Search"
                    className="form-control"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="FindFoodDonor-wrapper-row-three row">
          <div className="FindFoodDonor-bank-col">
            <table class="table receiver-data-table">
              <thead className="thead-dark">
                <tr>
                  <th>Sr</th>
                  <th>Camp Name</th>
                  <th>Organized By</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {camps.map((anydata) => {
                  return (
                    <tr className="receiver-data-tr">
                      <td>{anydata.id}</td>
                      <td>{anydata.campName}</td>
                      <td>{anydata.campOrganizedBy}</td>
                      <td>{anydata.campPhone}</td>
                      <td>{anydata.campAddress}</td>
                      <td>{anydata.campCity}</td>
                      <td>{anydata.campState}</td>
                      <td>{anydata.campDate}</td>
                      <td>{anydata.campTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBloodCamp;
