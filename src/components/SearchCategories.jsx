import React from 'react'
import '../styles/SearchCategories.css'
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCheckbox } from '../redux/SelectedCheckBox'
import { Link } from "react-router-dom";




const SearchItemsCategories = ({value, setValue, searchTerm,setAvailIsCheck,availIsCheck}) => {

  const [categoriesDropDown , setCategoriesDropDown] = useState(false);
  const [priceDropDown , setpriceDropDown] = useState(false);
  const [availDropDown , setAvailDropDown] = useState(false);


  


  const highestPrice = useSelector(state => {
    return state.price.highestPrice
  })

  const lowestPrice = useSelector(state => {
    return state.price.lowestPrice
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
    
  };

  useEffect(() => {
    setValue([lowestPrice, highestPrice]);
  }, [highestPrice, lowestPrice])


  const checkboxes = [
    { 
      name: 'macbook', 
      label: 'Laptop' 
    },
    { 
      name: 'iphone', 
      label: 'Mobile' 
    },
    { name: 'ipad', 
      label: 'Tablet' 
    },
  ]

  const selectedCheck = useSelector((state) => {

    return state.selectedCheckbox.selectedCheckbox
  })

  const dispatch = useDispatch()

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
          <ul
            className="categories-checkbox-items">
            { checkboxes.map((checkbox) => {
              return (
                // <Link
                //   to={`/search?q=${searchTerm}&categories=${checkbox.name}`}
                // >
                  <li
                    
                    key={checkbox.name} 
                    className="container text-black">
                    <div className="row">
                      <div className="col-2">
                        <input
                          checked={selectedCheck == checkbox.name}
                          onChange={(e) => {
                            dispatch(setSelectedCheckbox(e.target.name))
                          }}
                          name={checkbox.name}
                          id={checkbox.name} 
                          type="checkbox"/> 
                      </div>
                      <div className="col-10">
                        <label htmlFor={checkbox.key}>{checkbox.label}</label>
                      </div>
                    </div>
                  </li>
                // </Link>
              ) 
            })
            }
          </ul>       
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
            max={highestPrice}
            min={lowestPrice}
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
            <span><i class="fas fa-caret-up"></i></span>
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
            <li>
              <input
              checked={availIsCheck}
              onChange={() => {
                setAvailIsCheck(!availIsCheck)
                console.log(availIsCheck)
              }}
              name='isCheck'
              type="checkbox"/> In Stock Only
            </li>
          </div>
        </div>
        }
     
      </div>  
    </div>
  )
}


export default SearchItemsCategories
