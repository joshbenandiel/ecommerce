import React , { useState } from 'react'
import SearchNavbar from './SearchNavbar'
import Footer from './Footer'
import SearchCategories from './SearchCategories'
import SearchItems from './SearchItems'
import '../styles/Search.css'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'



const Search = ({searchTerm,searchFilter, searchTermNavbar, searchFilterNavbar}) => {



  const highestPrice = useSelector(state => {
    return state.price.highestPrice
  })

  const lowestPrice = useSelector(state => {
    return state.price.lowestPrice
  })

  const [value, setValue] = React.useState([lowestPrice, highestPrice]);

  const [availIsCheck, setAvailIsCheck] = useState(false);

  return (
    <div>
        <div className="search-main-wrapper d-flex p-5">
          <SearchCategories
          setAvailIsCheck={setAvailIsCheck}
          value={value}
          setValue={setValue}
          searchTerm={searchTerm}
          availIsCheck={availIsCheck}
          
          />
          <SearchItems
            value={value}
            setValue={setValue}
            searchTerm={searchTerm}
            availIsCheck={availIsCheck}
          />
        </div>
    </div>
  )
}

export default Search
