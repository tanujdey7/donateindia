import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// import Shodata from "./Showdata";
import Navbar from "./Components/HeadFoot/Navbar";
import Home from "./Components/Home";
import Login from "./Pages/Loginpages/Login";
import Register from "./Pages/Loginpages/Register";
import Footer from "./Components/HeadFoot/Footer";
// blood
import Blooddonate from "./Pages/Blood/BloodDonate";
import FindBloodcamp from "./Pages/Blood/Findpages/FindBloodCamp";
import FindBloodbank from "./Pages/Blood/Findpages/FindBloodBank";
import FindBloodDonor from "./Pages/Blood/Findpages/FindBloodDonor";

//add blood
import BloodDonor from "./Pages/Blood/AddPages/BloodDonor";
import BloodCamps from "./Pages/Blood/AddPages/BloodCamps";
import BloodBanks from "./Pages/Blood/AddPages/BloodBanks";

import Fooddonate from "./Pages/Food/Fooddonate";
import FindFoodDonor from "./Pages/Food/FindFoodDonor";
import Clothesdonor from "./Pages/Clothes/ClothesDonate";
import Findbooks from "./Pages/Books/Findbooks";
import Booksdonor from "./Pages/Books/BooksDonate";
import Findclothes from "./Pages/Clothes/FindClothesDonor";
import Profile from "./Components/Profile/Profile";

function App() {
  const [user, setLoginUser] = useState({}, []);
  let history = useHistory();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          {/* <Route exact path="/showdata" component={Shodata} /> */}
          {/* Food */}
          <Route
            exact
            path="/food/fooddonate/findfood"
            component={FindFoodDonor}
          />
          <Route exact path="/food/fooddonate">
            {localStorage.getItem("login") ? (
              <Fooddonate />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          {/* Clothes */}
          <Route exact path="/clothes/clothesdonate" component={Clothesdonor} />
          <Route
            exact
            path="/clothes/clothesdonate/findclothes"
            component={Findclothes}
          />
          {/* blood */}
          <Route exact path="/blood/blooddonate">
            {localStorage.getItem("login") ? (
              <Blooddonate />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route
            exact
            path="/blood/blooddonate/findblooddonor"
            component={FindBloodDonor}
          />
          <Route
            exact
            path="/blood/blooddonate/findbloodbank"
            component={FindBloodbank}
          />
          <Route
            exact
            path="/blood/blooddonate/findbloodcamp"
            component={FindBloodcamp}
          />

          {/* Add blood */}
          <Route
            exact
            path="/blood/AddPages/BloodDonor"
            component={BloodDonor}
          />
          <Route
            exact
            path="/blood/AddPages/BloodBanks"
            component={BloodBanks}
          />
          <Route
            exact
            path="/blood/AddPages/BloodCamps"
            component={BloodCamps}
          />
          {/* Books */}
          <Route
            exact
            path="/books/booksdonate/findbooks"
            component={Findbooks}
          />
          <Route exact path="/books/booksdonate" component={Booksdonor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
