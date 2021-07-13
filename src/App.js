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
// blood
import Blooddonate from "./Pages/Blood/BloodDonate";
import FindBloodcamp from "./Pages/Blood/Findpages/FindBloodCamp";
import FindBloodbank from "./Pages/Blood/Findpages/FindBloodBank";
import FindBloodDonor from "./Pages/Blood/Findpages/FindBloodDonor";

import Fooddonate from "./Pages/Food/Fooddonate";
import FindFoodDonor from "./Pages/Food/FindFoodDonor";
import Clothesdonor from "./Pages/Clothes/ClothesDonate";
import Findbooks from "./Pages/Books/Findbooks";
import Booksdonor from "./Pages/Books/Booksdonor";
import Findclothes from "./Pages/Clothes/FindClothesDonor";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          
          {/* Food */}
          <Route exact path="/food/fooddonate/findfood" component={FindFoodDonor} />
          <Route exact path="/food/fooddonate" component={Fooddonate} />
          {/* Clothes */}
          <Route exact path="/clothes/clothesdonate" component={Clothesdonor} />
          <Route exact path="/clothes/clothesdonate/findclothes" component={Findclothes} />
          {/* blood */}
          <Route exact path="/blood/blooddonate" component={Blooddonate} />
          <Route exact path="/blood/blooddonate/findblooddonor" component={FindBloodDonor} />
          <Route exact path="/blood/blooddonate/findbloodbank" component={FindBloodbank} />
          <Route exact path="/blood/blooddonate/findbloodcamp" component={FindBloodcamp} />
          {/* Books */}
          <Route exact path="/books/booksdonate/findbooks" component={Findbooks} />
          <Route exact path="/books/booksdonate" component={Booksdonor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
