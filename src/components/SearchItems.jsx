import React, { useState } from 'react'
import '../styles/SearchItems.css'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';

const SearchItems = ({searchTerm,searchFilter}) => {


  const productsData = useSelector((state) => state.product.products);
  const [sortMenu , setSortMenu] = useState(true);
  const [viewList , setViewList] = useState(false)
  const [viewGrid , setViewGrid] = useState(true)
  const [selectedSort , setSelectedSort] = useState('')


  let sortItems =  [
    {
      sortText: "Best Selling"
    },
    {
      sortText: "Price, low to high"
    },
    {
      sortText: "Price, high to low"
    },
    {
      sortText: "Alphabetically, A-Z"
    },
    {
      sortText: "Alphabetically, Z-A"
    }
    
    
  ]

  const [sortContent, setSortContent] = useState(sortItems[0].sortText)


  const sortItemsClick = (itemData) => {
    setSelectedSort(itemData.sortText);
  }
  

  return (
      <div className="search-items-wrapper">
          <h3 className='search-items-results'>Search Results for "{searchTerm}"</h3>
          <div className="search-container-items container">
            <div className="search-row row">
              <div className="search-show-product col">
                <p>Showing {productsData.length} products</p>
              </div>
              <div className="col-6">
                <div className="search-items-header"> 
                  {sortMenu ?
                    <div className="search-items-sort">
                      <button
                      onClick={() => {
                      setSortMenu(!sortMenu)
                      }} 
                      style={{background: "transparent", border: "none"}}>
                      <div className="sort-items-menu">
                        <p className="m-0">Sort by: {sortContent}
                        <i class="far fa-chevron-down fa-xs"></i>
                        </p>
                      </div>
                      </button>
                    </div> :                                  
                   <div className="search-items-sort">
                      <button
                      onClick={() => {
                        setSortMenu(!sortMenu)
                      }} 
                      style={{background: "transparent", border: "none"}}>
                      <div className="sort-items-menu">
                        <p className="m-0">Sort by: {sortContent}
                        <i class="far fa-chevron-up fa-xs"></i>
                        </p>
                      </div>
                      </button>
                      <div className="sortItem-open">
                        <div className="sort-item-wrapper">
                          {sortItems.map( item => {
                            return (
                              <div>
                                  <p
                                  onClick={() => {
                                      setSortContent(item.sortText);
                                      setSortMenu(!sortMenu)
                                      sortItemsClick(item)
                                  }}  
                                  className={selectedSort == item.sortText ? "sort-items-content-color p-2" : "sort-items-content p-2"}>{item.sortText}</p>
                              </div>
                            )
                            
                          })}
                        </div>
                      </div>
                    </div> } 
                    
                </div>
              </div>
              <div className="col">          
                <div className="view-wrapper">
                  <p className="m-0">View</p>
                    <button
                    onClick={() => {
                      setViewGrid(true)
                      setViewList(false)
                    }} 
                    className={viewGrid ? "view-grid m-2" : "m-2"} 
                    style={{background: "transparent", border: "none"}}><i class="fas fa-th"></i></button>
                    <button
                    onClick={() => {
                      setViewList(true)
                      setViewGrid(false)
                      
                    }} 
                    className={viewList && "view-list"}
                    style={{background: "transparent", border: "none"}}><i class="fas fa-list"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className={viewGrid && "search-items-container"}>
            {productsData.map((item,key) => {
                return (
                  <>
                  {viewList ?                     
                    <div className="search-items-container-list" key={key}>
                      <div className="container">
                        <div className="row">
                          <div className="view-list-img col">
                            <img src={item.img} alt="item-picture"/>
                          </div>
                          <div className="view-list-text col-6">
                            <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                            <h5>{item.series}</h5>
                          </div>
                          <div className="view-list-button col">
                            <Button className="mt-3" variant="contained">Add to cart</Button>
                            <Button className="mt-3" variant="outlined">Quick view</Button>
                          </div>
                        </div>
                      </div>
                    </div> 
                  :  
                    <div className="search-items" key={key}>
                        <img src={item.img} alt="item-picture"/>
                        <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                        <h5>{item.series}</h5>
                        <Button className="mt-3" variant="contained">Add to cart</Button>
                    </div>}            
                  </>     
                  )
              })}
          </div>
        </div>
    
  )
}

export default SearchItems
