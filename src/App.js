import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/HeadFoot/Navbar";
import Home from "./Components/Home";
import Login from "./Pages/Loginpages/Login";
import Footer from "./Components/HeadFoot/Footer";
import Blooddonate from "./Pages/Blood/BloodDonate";
import Iamdonor from "./Pages/Blood/Donor";
import Receiver from "./Pages/Blood/Receiver";
import Bloodcamp from "./Pages/Blood/Bloodcamp";
import Fooddonate from "./Pages/Food/Fooddonate";
import Fooddonor from "./Pages/Food/Fooddonor";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/blooddonate" component={Blooddonate} />
          <Route exact path="/iamdonor" component={Iamdonor} />
          <Route exact path="/receiver" component={Receiver} />
          <Route exact path="/bloodcamp" component={Bloodcamp} />
          <Route exact path="/fooddonate" component={Fooddonate} />
          <Route exact path="/fooddonor" component={Fooddonor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
