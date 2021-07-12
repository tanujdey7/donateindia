import React from "react";
import "./FindBloodDonor.css";
import "bootstrap/js/dist/dropdown";
import Rdata from "../Rdata";

const FindBloodDonor = () => {

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
              <h1>Find Blood Donors Near you</h1>
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
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Blood Group</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Preference</th>
                </tr>
              </thead>
              <tbody>
                {Rdata.map((anydata) => {
                  return (
                    <tr className="receiver-data-tr">
                      <td>{anydata.Srno}</td>
                      <td>{anydata.Name}</td>
                      <td>{anydata.Address}</td>
                      <td>{anydata.Phone}</td>
                      <td>{anydata.Email}</td>
                      <td>{anydata.Age}</td>
                      <td>{anydata.BloodGroup}</td>
                      <td>{anydata.Gender}</td>
                      <td>{anydata.Preference}</td>
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
