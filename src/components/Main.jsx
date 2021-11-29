import React from 'react'
import Items from "./Items"
import Footer from './Footer'
import Search from './Search'
import Promo from "./Promo"
import Navbar from "./Navbar"
import Slider from "./Slider"
import { useSelector, useDispatch } from 'react-redux'

const Main = () => {

  const state = useSelector((state) => state) 
  return (
    <div>
      <button
      onClick={() => {
        console.log(state);    
      }} 
      className="text-black">CHECK GLOBAL STATE</button>
      <Navbar/>
      <Slider/>
      <Promo/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default Main
