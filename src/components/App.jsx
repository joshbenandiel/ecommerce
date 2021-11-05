import React from "react";
import Navbar from "./Navbar"
import Slider from "./Slider"
import "../styles/App.css"
import Promo from "./Promo"

function App() {
  return (
    <>
      <Navbar/>
      <div className="navbar-height">

      </div>
      <Slider/>
      <Promo/>
    </>
  );
}

export default App;
