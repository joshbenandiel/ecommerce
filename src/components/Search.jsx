import React , { useState } from 'react'
import SearchCategories from './SearchCategories'
import SearchItems from './SearchItems'
import '../styles/Search.css'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'



const Search = ({searchTerm, searchFilter}) => {



  const highestPrice = useSelector(state => {
    return state.price.highestPrice
  })

  const lowestPrice = useSelector(state => {
    return state.price.lowestPrice
  })

  const [value, setValue] = React.useState([lowestPrice, highestPrice]);

  const [availIsCheck, setAvailIsCheck] = useState(false);

  return (
    <>
    <Navbar searchTerm={searchTerm} searchFilter={searchFilter}/>
      <div className="search-main-wrapper p-5 container-fluid px-0">
        <div className="row m-0">
          <div className="col-2">
            <SearchCategories
              setAvailIsCheck={setAvailIsCheck}
              value={value}
              setValue={setValue}
              searchTerm={searchTerm}
              availIsCheck={availIsCheck}
            />
          </div>
          <div className="col-10">
            <SearchItems
              searchTerm={searchTerm}
              value={value}
            />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Search
