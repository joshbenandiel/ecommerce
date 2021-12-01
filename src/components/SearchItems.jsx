import React, { useState } from 'react'
import '../styles/SearchItems.css'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';

const SearchItems = ({searchTerm}) => {


  const productsData = useSelector((state) => state.product.products);

  return (
    <>
    <div className="search-items-container">
      {productsData.map((item,key) => {
          return (
            <div className="search-items-wrapper">
              <div className="search-items"key={key}>
                  <img src={item.img} alt="item-picture"/>
                  <h5>₱ {item.price}</h5>
                  <h5>{item.series}</h5>
                  <Button className="mt-3" variant="contained">Add to cart</Button>
              </div>
            </div>      
          )
      })}
    </div>
    </>
    
  )
}

export default SearchItems
