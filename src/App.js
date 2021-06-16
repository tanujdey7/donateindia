// import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "./Components/HeadFoot/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/HeadFoot/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
