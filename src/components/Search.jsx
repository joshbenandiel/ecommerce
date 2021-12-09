import React , { useState } from 'react'
import SearchNavbar from './SearchNavbar'
import Footer from './Footer'
import SearchCategories from './SearchCategories'
import SearchItems from './SearchItems'
import '../styles/Search.css'



const Search = ({searchTerm,searchFilter}) => {
  return (
    <div>
        <SearchNavbar
          searchTerm={searchTerm}
          searchFilter={searchFilter}
        />
        <div className="search-main-wrapper d-flex p-5">
        <SearchCategories/>
        <SearchItems
          searchTerm={searchTerm}
          searchFilter={searchFilter}
        />
      </div>
      <Footer/>   
    </div>
  )
}

export default Search
