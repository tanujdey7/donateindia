import React from "react";
import ReactDOM from "react-dom";
import mockData from "./Statecitydata";
import "./styles.css";

class App extends React.Component {
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
        // Get all countries from data object which exists as keys
        // and set to the countrylist state
        const countryList = Object.keys(data);
        this.setState({
            countryList
        });
    }

    changeCountry(e) {
        // Based on country selection change options for state dropdown
        // and show it in result as well
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
        // Based on state selection change options for city dropdown
        // and show it in result as well
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
        // Based on city selection show it in result as well
        const selectedCity = e && e.target && e.target.value;
        this.setState({
            selectedCity
        });
    }

    render() {
        return (
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
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


