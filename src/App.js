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
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/blooddonate" component={Blooddonate} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
