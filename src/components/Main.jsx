import React, { useEffect, useState } from 'react'
import Items from "./Items"
import Search from './Search'
import Promo from "./Promo"
import Navbar from "./Navbar"
import Slider from "./Slider"
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../service/product.service'
import productService from '../service/product.service';

const Main = ({searchTerm,searchFilter,setSearchTerm}) => {


  const state = useSelector((state) => state) 
  return (
    <div>
      <Slider/>
      <Promo/>
      <Items/>
    </div>
  )
}

export default Main
