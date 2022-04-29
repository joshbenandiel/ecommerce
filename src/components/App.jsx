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
import SelectedProduct from './SelectedProduct'
import IphoneSelection from './IphoneSelection'
import SelectedMacbookAir from './SelectedMacbookAir'
import Bag from "./Bag";



function App() {


  const [searchTerm, setSearchTerm] = useState("")

  const searchFilter = (e) => {
    setSearchTerm(e.target.value);
  }



  const [selectedProductMacbookPro, setSelectedProduct] = useState({})

  return (
    <div className='app-container'>
      <BrowserRouter>
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
            searchTerm={searchTerm}
            searchFilter={searchFilter}
            selectedProductMacbookPro={selectedProductMacbookPro}
          />} />
          <Route exact path='/product/buy/:tag/:id' element={
            <SelectedMacbookAir
            searchTerm={searchTerm}
            searchFilter={searchFilter}
            selectedProductMacbookPro={selectedProductMacbookPro}
            />}
          />
          <Route exact path='/product/buy/:tag' element={
            <IphoneSelection
            searchTerm={searchTerm}
            searchFilter={searchFilter}
            macbookProSelectedProduct={setSelectedProduct}
          />} />
          <Route exact path='/product/shop/bag' element={
            <Bag
            searchTerm={searchTerm}
            searchFilter={searchFilter}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
