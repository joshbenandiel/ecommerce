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
import ProductPage from './ProductPage'
import SelectedProduct from './SelectedProduct'


function App() {


  const [searchTerm, setSearchTerm] = useState("")

  const searchFilter = (e) => {
    setSearchTerm(e.target.value);
  }

  const checkState = useSelector((state) => { return state})



  return (
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
        <Route exact path='/product/:tag' element={
          <ProductPage
        />} />
        <Route exact path='/product/:tag/:item' element={
          <SelectedProduct
        />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
