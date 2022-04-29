import React from 'react'
import Items from "./Items"
import Promo from "./Promo"
import Slider from "./Slider"
import Navbar from './Navbar'
import Footer from './Footer'


const Main = ({searchTerm, searchFilter}) => {

  return (
    <div>
      <Navbar searchTerm={searchTerm} searchFilter={searchFilter}/>
        <Slider/>
        <Promo/>
        <Items/>
      <Footer/>
    </div>
  )
}

export default Main
