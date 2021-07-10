import React, { useEffect } from 'react';
import "./Findclothes.css";
import "bootstrap/js/dist/dropdown";
import mockData from "./Statecitydata";
import Rdata from "./Rdata";
import Blooddonor from "../Images/Blooddonor.png";

class Findclothes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            stateList: [],
            cityList: [],
            selectedCountry: "",
            selectedState: "",
            selectedCity: ""
        };

        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }
    componentDidMount() {
        const { data } = mockData;
        const countryList = Object.keys(data);
        this.setState({
            countryList
        });
    }

    changeCountry(e) {
        const { data } = mockData;
        const selectedCountry = e && e.target && e.target.value;
        if (selectedCountry) {
            const stateList = Object.keys(data[selectedCountry].states);
            this.setState({
                stateList,
                selectedCountry,
                cityList: []
            });
        } else {
            this.setState({
                stateList: [],
                cityList: [],
                selectedCountry: "",
                selectedState: "",
                selectedCity: ""
            });
        }
    }

    changeState(e) {
        const { data } = mockData;
        const selectedState = e && e.target && e.target.value;
        if (selectedState) {
            const cityList =
                data[this.state.selectedCountry].states[selectedState].cities;
            this.setState({
                cityList,
                selectedState
            });
        } else {
            this.setState({
                cityList: [],
                selectedState: "",
                selectedCity: ""
            });
        }
    }

    changeCity(e) {
        const selectedCity = e && e.target && e.target.value;
        this.setState({
            selectedCity
        });
    }
    render() {
        return (
            <div className="blood-container container-fluid">
                <div className="blood-wrapper pt-5 mb-5">
                    <div className="Bloodcamp-row-two row">
                        <div className="col">
                            <div className="Bloodcamp-title-div">
                                <h1>Find Clothes Donors Near you</h1>
                            </div>
                        </div>
                    </div>
                    <div className="blood-wrapper-row-two row w-100">
                        <div className="col">
                            <div className="dropdown-wrapper ml-auto mr-auto">
                                <div className="App">
                                    <h1>Dynamic Select dropdown - ReactJS</h1>
                                    <div className="dynamic-dropdown">
                                        <select
                                            value={this.state.selectedCountry}
                                            onChange={this.changeCountry}
                                        >
                                            <option value="">Please select Country</option>
                                            {this.state.countryList.map((x, i) => {
                                                return <option key={i}>{x}</option>;
                                            })}
                                        </select>
                                        <br />
                                        <select value={this.state.selectedState} onChange={this.changeState}>
                                            <option value="">Please select State/Province</option>
                                            {this.state.stateList.map((x, i) => {
                                                return <option key={i}>{x}</option>;
                                            })}
                                        </select>
                                        <br />
                                        <select value={this.state.selectedCity} onChange={this.changeCity}>
                                            <option value="">Please select City</option>
                                            {this.state.cityList.map((x, i) => {
                                                return <option key={i}>{x}</option>;
                                            })}
                                        </select>
                                    </div>
                                    <div className="dynamic-dropdown-result">
                                        <h3>Selected Result:</h3>
                                        {this.state.selectedCountry}
                                        {this.state.selectedState ? ` | ${this.state.selectedState}` : ``}
                                        {this.state.selectedCity ? ` | ${this.state.selectedCity}` : ``}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blood-wrapper-row-three row">
                        <div className="blood-bank-col col-11">
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

                                    {Rdata.map(anydata => {
                                        return <tr className="receiver-data-tr">

                                            <td>{anydata.Srno}</td>
                                            <td>{anydata.Name}</td>
                                            <td>{anydata.Address}</td>
                                            <td>{anydata.Phone}</td>
                                            <td>{anydata.Email}</td>
                                            <td>{anydata.Age}</td>
                                            <td>{anydata.BloodGroup}</td>
                                            <td>{anydata.Gender}</td>
                                            <td>{anydata.Preference}</td></tr>
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Findclothes;
