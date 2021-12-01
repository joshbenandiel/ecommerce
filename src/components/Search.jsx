import React , { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchCategories from './SearchCategories'
import SearchItems from './SearchItems'
import '../styles/Search.css'



const Search = () => {

  return (
    <div>
      <Navbar
      />
      <div className="search-main-wrapper d-flex p-5">
        <SearchCategories/>
        <SearchItems
        />
      </div>
      <Footer/>   
    </div>
  )
}

export default Search
