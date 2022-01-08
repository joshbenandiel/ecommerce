import React from "react";
import "../styles/App.css"
import Main from './Main'
import Search from './Search'
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector} from 'react-redux'
import SelectedProduct from './SelectedProduct'
import IphoneSelection from './IphoneSelection'
import SelectedMacbookAir from './SelectedMacbookAir'
import Bag from "./Bag";



function App() {


  const [searchTerm, setSearchTerm] = useState("")

  const searchFilter = (e) => {
    setSearchTerm(e.target.value);
  }

  const checkState = useSelector((state) => { return state})



  const [selectedProductMacbookPro, setSelectedProduct] = useState({})

  return (
    <div className='app-container'>
      <BrowserRouter>
        <button
        onClick={() => {
          console.log(checkState);
        } }
        >
          Check Global State

        </button>
        <Navbar
          searchTerm={searchTerm}
          searchFilter={searchFilter}
        />
        <Routes>
          <Route path="/" element={
          <Main
            searchTerm={searchTerm}
            searchFilter={searchFilter}
            setSearchTerm={setSearchTerm}
          />} />
          <Route path='/search' element={
          <Search
            searchTerm={searchTerm}
            searchFilter={searchFilter}
          />} />
          <Route exact path='/product/buy/:tag/:item/:id' element={
            <SelectedProduct
            selectedProductMacbookPro={selectedProductMacbookPro}
          />} />
          <Route exact path='/product/buy/:tag/:id' element={
            <SelectedMacbookAir
            selectedProductMacbookPro={selectedProductMacbookPro}
            />}
          />
          <Route exact path='/product/buy/:tag' element={
            <IphoneSelection
            macbookProSelectedProduct={setSelectedProduct}
          />} />
          <Route exact path='/product/shop/bag' element={
            <Bag
          />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
