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
import Receiver from "./Pages/Blood/Findbloodbank";
import Bloodcamp from "./Pages/Blood/Bloodcamp";
import Fooddonate from "./Pages/Food/Fooddonate";
import Clothesdonor from "./Pages/Clothes/Clothesdonor";
import Booksdonor from "./Pages/Books/Booksdonor";
import Findblood from "./Pages/Blood/Findblood";
import Findfood from "./Pages/Food/Findfood";
import Findclothes from "./Pages/Clothes/Findclothes";
import Findbooks from "./Pages/Books/Findbooks";
import FindBloodcamp from "./Pages/Blood/Bloodcamp";
import FindBloodbank from "./Pages/Blood/Findbloodbank";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/blood/blooddonate" component={Blooddonate} />
          <Route exact path="/iamdonor" component={Iamdonor} />
          <Route exact path="/receiver" component={Receiver} />
          <Route exact path="/blood/bloodcamp" component={Bloodcamp} />
          <Route exact path="/food/fooddonate" component={Fooddonate} />
          <Route exact path="/clothes/clothesdonate" component={Clothesdonor} />
          <Route exact path="/books/booksdonate" component={Booksdonor} />
          <Route exact path="/blood/findblood" component={Findblood} />
          <Route exact path="/blood/findbloodbank" component={FindBloodbank} />
          <Route exact path="/blood/findbloodcamp" component={FindBloodcamp} />
          <Route exact path="/food/findfood" component={Findfood} />
          <Route exact path="/clothes/findclothes" component={Findclothes} />
          <Route exact path="/books/findbooks" component={Findbooks} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
