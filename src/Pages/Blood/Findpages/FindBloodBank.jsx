import React from "react";
import "./FindBloodBank.css";
import "bootstrap/js/dist/dropdown";
import { useState, useEffect } from "react";
import { getBanks } from "../../../Service/api";

const FindBloodBank = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllBanks();
  }, []);
  const getAllBanks = async () => {
    const response = await getBanks();
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
              <h1>Find Blood Banks Near you</h1>
            </div>
          </div>
        </div>
        <div className="FindBloodDonor-wrapper-row-two row">
          <div className="dropdown-wrapper">
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
        <div className="FindBloodDonor-wrapper-row-three row">
          <div className="FindBloodDonor-bank-col">
            <table class="table receiver-data-table">
              <thead className="thead-dark">
                <tr>
                  <th>Sr</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {users.map((anydata) => {
                  return (
                    <tr className="receiver-data-tr">
                      <td>
                        <h6>{anydata.id}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgName}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgCity}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgState}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgAddress}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgPhone}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgEmail}</h6>
                      </td>
                      <td>
                        <h6>{anydata.orgCategory}</h6>
                      </td>
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

export default FindBloodBank;
