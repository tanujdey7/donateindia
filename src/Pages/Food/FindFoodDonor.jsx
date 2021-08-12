import React from "react";
import "./FindFoodDonor.css";
import "bootstrap/js/dist/dropdown";
import { useState, useEffect } from "react";
import { getFoodDonor } from "../../Service/api";

const FindBloodDonor = () => {
  const [foodDonor, setUsers] = useState([]);
  useEffect(() => {
    getAllFood();
  }, []);
  const getAllFood = async () => {
    const response = await getFoodDonor();
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
    <div className="FindBloodDonor-container container-fluid">
      <div className="FindBloodDonor-wrapper pt-5 mb-5">
        <div className="FindBloodDonorcamp-row-two row">
          <div className="col">
            <div className="FindBloodDonorcamp-title-div">
              <h1>Find Food Donors Near you</h1>
            </div>
          </div>
        </div>
        <div className="FindBloodDonor-wrapper-row-two row w-100">
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
        <div className="FindBloodDonor-wrapper-row-three row">
          <div className="FindBloodDonor-bank-col">
            <table class="table receiver-data-table">
              <thead className="thead-dark">
                <tr>
                  <th>Sr</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Quantity</th>
                  <th>Preparation Time</th>
                  <th>Best Before</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {foodDonor.map((anydata) => {
                  return (
                    <tr className="receiver-data-tr">
                      <td>{anydata.Srno}</td>
                      <td>{anydata.Name}</td>
                      <td>{anydata.Address}</td>
                      <td>{anydata.city}</td>
                      <td>{anydata.Phone}</td>
                      <td>{anydata.Email}</td>
                      <td>{anydata.Quantity}</td>
                      <td>{anydata.time}</td>
                      <td>{anydata.expire}</td>
                      <td>{anydata.type}</td>
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

export default FindBloodDonor;
