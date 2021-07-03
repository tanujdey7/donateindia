import React from 'react';
import "./Bloodcamp.css";
import "bootstrap/js/dist/dropdown";
// import ReceiverData from "./Receiver";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import Rdata from "./Rdata";
import Bloodcampimg from "../Images/bloodcamp.png";


const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];
const optionstwo = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
        type: 'group', name: 'group1', items: [
            { value: 'three', label: 'Three', className: 'myOptionClassName' },
            { value: 'four', label: 'Four' }
        ]
    },
    {
        type: 'group', name: 'group2', items: [
            { value: 'five', label: 'Five' },
            { value: 'six', label: 'Six' }
        ]
    }
];

const defaultOption = options[0];
const twoOption = optionstwo[0];

const Bloodcamp = () => {
    return (
        <div className="bloodcamp-container">
            <div className="Bloodcamp-wrapper">
                <div className="Bloodcamp-row-one row">
                    <div className="col">
                    <div className="Bloodcamp-img-div">
                        <img src={Bloodcampimg} />
                        </div>
                    </div>
                </div>
                <div className="Bloodcamp-row-two row">
                    <div className="col">
                        <div className="Bloodcamp-title-div">
                            <h1>This is Blood camps</h1>
                        </div>
                    </div>
                </div>
                <div className="Bloodcamp-row-three row">
                    <div className="col">
                        <div className="Bloodcamp-dropdown-wrapper ml-auto mr-auto">
                            <div className="drop-div">
                                {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                {/* <Dropdown options={optionstwo} onChange={this._onSelect} value={twoOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                {/* <Dropdown options={optionstwo} onChange={this._onSelect} value={twoOption} placeholder="Select an option" /> */}
                            </div>
                            <div className="drop-div">
                                <button className="btn bank-search-btn text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Bloodcamp-row-four row">
                    <div className="Bloodcamp-row-four-col col">
                        <table class="table Bloodcamp-data-table">
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
                                    return <tr className="Bloodbank-data-tr">

                                        <td>{anydata.Srno}</td>
                                        <td>{anydata.Name}</td>
                                        <td>{anydata.Gender}</td>
                                        <td>{anydata.Age}</td>
                                        <td>{anydata.BloodGroup}</td>
                                        <td>{anydata.Phone}</td>
                                        <td>{anydata.Email}</td>
                                        <td>{anydata.Address}</td>
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

export default Bloodcamp;
