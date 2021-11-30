import React from 'react'
import '../styles/SearchItems.css'
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import Slider from '@mui/material/Slider';





const SearchItems = () => {

  const [categoriesDropDown , setCategoriesDropDown] = useState(false);
  const [priceDropDown , setpriceDropDown] = useState(false);
  const [availDropDown , setAvailDropDown] = useState(false);

  const [value, setValue] = React.useState([1, 99]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="search-main-container">
      <div className="filters-sections">
        <h1 className="mb-3">Filters</h1>
        {categoriesDropDown ?
        <div className="categories-wrapper">
          <div
          onClick={()=> {
            setCategoriesDropDown(!categoriesDropDown);
          }} 
          className="categories-section d-flex">
            <span><i class="fas fa-caret-up"></i></span>
            <p className="categories-text">CATEGORIES</p>
          </div>      
        </div>
        :    
        <div className="categories-wrapper">
          <div
          onClick={()=> {
            setCategoriesDropDown(!categoriesDropDown);
          }} 
          className="categories-section d-flex">
            <span><i class="fas fa-caret-down"></i></span>
            <p className="categories-text">CATEGORIES</p>
          </div>
          <div className="categories-checkbox-items">
            <li><input type="checkbox"/> Laptop</li>
            <li><input type="checkbox"/> Mobile</li>
            <li><input type="checkbox"/> Tablets</li>
            <li><input type="checkbox"/> Watch</li>
          </div>       
        </div>
        }
        {priceDropDown ?
         <div className="price-wrapper">
          <div
          onClick={() => {
            setpriceDropDown(!priceDropDown);
          }} 
          className="price-section d-flex mt-2">
              <span><i class="fas fa-caret-up"></i></span>
              <p className="categories-text">PRICE</p>
          </div>
         </div>
        : 
        <div className="price-wrapper"> 
          <div
          onClick={() => {
            setpriceDropDown(!priceDropDown);
          }} 
          className="price-section d-flex mt-2">
              <span><i class="fas fa-caret-down"></i></span>
              <p className="categories-text">PRICE</p>
          </div>
          <div className="d-flex justify-content-between align-items-center price-range">
            <input className="range-input" value={value[0]}></input>
            <h1 className="mt-2 text-black">-</h1>
            <input className="range-input" value={value[1]}></input>
          </div>
          <Slider
            getAriaLabel={() => ''}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </div>
        }
        {availDropDown ?
        
        <div className="avail-wrapper">
          <div
          onClick={()=> {
            setAvailDropDown(!availDropDown)
          }}
          className="available-section d-flex mt-2">
            <span><i class="fas fa-caret-down"></i></span>
            <p className="categories-text">AVAILABILITY</p>
          </div>
        </div>        
        : 
               
        <div className="avail-wrapper">
          <div
          onClick={()=> {
            setAvailDropDown(!availDropDown)
          }}
          className="available-section d-flex mt-2">
            <span><i class="fas fa-caret-down"></i></span>
            <p className="categories-text">AVAILABILITY</p>
          </div>
          <div className="avail-list">
            <li><input type="checkbox"/> In Stock Only</li>
          </div>
        </div>
        }
     
      </div>  
    </div>
  )
}

export default SearchItems
