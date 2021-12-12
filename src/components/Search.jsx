import React , { useState } from 'react'
import SearchNavbar from './SearchNavbar'
import Footer from './Footer'
import SearchCategories from './SearchCategories'
import SearchItems from './SearchItems'
import '../styles/Search.css'
import Navbar from './Navbar'



const Search = ({searchTerm,searchFilter, searchTermNavbar, searchFilterNavbar}) => {

  return (
    <div>
        <div className="search-main-wrapper d-flex p-5">
          <SearchCategories/>
          <SearchItems
            searchTerm={searchTerm}
            searchFilter={searchFilter}
            searchTermNavbar={searchTermNavbar}
            searchFilterNavbar={searchFilterNavbar}
          />
        </div>
    </div>
  )
}

export default Search
