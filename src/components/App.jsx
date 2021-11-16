import React from "react";
import Navbar from "./Navbar"
import Slider from "./Slider"
import "../styles/App.css"
import Promo from "./Promo"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/product';

function App() {

  const state = useSelector((state) => state) 
  
  

  

  return (
    <>
      <button
      onClick={() => {
        console.log(state);    
      }} 
      className="text-black">CHECK GLOBAL STATE</button>
      <Navbar/>
      <div className="navbar-height"/>  
      <Slider/>
      <Promo/>
    </>
  );
}

export default App;
