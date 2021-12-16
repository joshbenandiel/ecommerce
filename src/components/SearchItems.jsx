import React, { useState ,useEffect } from 'react'
import '../styles/SearchItems.css'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { setHighestPrice , setLowestPrice} from '../redux/price'
import { addToCart } from '../redux/product.js'
import { increment } from '../redux/count'
import { Link } from 'react-router-dom'

const SearchItems = ({searchTerm, value, setValue, availIsCheck}) => {


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
  

  const searchIsVisible = useSelector((state) => { 
    return (
      state.search.searchIsVisible
    )
  })


  const searchResult = useSelector((state) => {
    return state.searchResult.searchResult
  })


  const selectedCheck = useSelector((state) => {

    return state.selectedCheckbox.selectedCheckbox
  })

  
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchIsVisible == false){

      const filteredItem = []
      productsData.map(items => {
        if(items.series.toLowerCase().includes(searchTerm.toLowerCase()) || items.name.toLowerCase().includes(searchTerm.toLowerCase())){
          filteredItem.push(items)
        }
      })
      setFilteredItems(filteredItem);
    } 

  }, [searchIsVisible])

  const [filteredItems , setFilteredItems] = useState([])


  const [catFilteredItems, setCatFilteredItems] = useState([])

  



  useEffect(() => {
   
    const highest = []
    filteredItems.map(items => {
        highest.push(items.price); 

    })
    
    if (highest.length >= 1) {
      const highestValue = highest.reduce((acc , val) => {
        if (val > acc) {
          acc = val;
        }
        return acc;
        
      })
      const lowestValue = highest.reduce((acc , val) => {
        if (val < acc) {
          acc = val;
        }
        return acc;
        
      }) 
      dispatch(setHighestPrice(highestValue))
      dispatch(setLowestPrice(lowestValue))
  
    }

    if (highest.length == 0) {
      dispatch(setHighestPrice(0))
      dispatch(setLowestPrice(0))
    }

  }, [filteredItems])




    
    
  
  


  useEffect(() => {

    const categoryFilteredItems = []
    productsData.map(items => {
      if(items.name.toLowerCase().includes(selectedCheck.toLowerCase())){
        categoryFilteredItems.push(items)
      }
    })

    setCatFilteredItems(categoryFilteredItems)

    const highestCat = []
    categoryFilteredItems.map(items => {
        highestCat.push(items.price); 
    })

    
    if (highestCat.length >= 1) {
      const highestValue = highestCat.reduce((acc , val) => {
        if (val > acc) {
          acc = val;
        }
        return acc;  
      })
      const lowestValue = highestCat.reduce((acc , val) => {
        if (val < acc) {
          acc = val;
        }
        return acc;
        
      }) 
      dispatch(setHighestPrice(highestValue))
      dispatch(setLowestPrice(lowestValue))

    }

  }, [selectedCheck])

  return (
    
      <div className="search-items-wrapper">
          {selectedCheck ?
            <h3 className='search-items-results'>Categories for "{selectedCheck}"</h3>  
          : <h3 className='search-items-results'>Search Results for "{searchResult}"</h3>}
          
          <div className={viewList ? "search-container-items-list container": "search-container-items container"}>
            <div className="search-row row">
              <div className="search-show-product col">
              {selectedCheck ?<p>Showing {catFilteredItems.length} products</p> : <p>Showing {filteredItems.length} products</p>}
                
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
            {filteredItems.length == 0 &&
            <div className='search-no-match d-flex justify-content-center align-items-center mt-5'>
              <p>Sorry, no products matched the keyword</p>
            </div>
            }
            {selectedCheck  ? 

             <>
            {catFilteredItems.map((item,key) => {
            if(availIsCheck == true & item.quantity >= 1) {
              if (value[1] >= item.price) {
                if(value[0] <= item.price) {                
                   return (
                  <>
                  {viewList ?                     
                    <div className="search-items-container-list" key={key}>
                      <div className="container">
                        <div className="row">                                   
                            <div className="view-list-img col">
                              <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                              <img src={item.img} alt="item-picture"/>
                              </Link>
                            </div>     
                            <div className="view-list-text col-6">
                              <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'>
                                <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                                <h5>{item.series}</h5>
                              </Link>
                            </div>
                          <div className="view-list-button col">
                            {item.quantity == 0 

                            ? 
                            
                             <Button 
                             onClick={()=> {
                              dispatch(addToCart(item))
                              dispatch(increment())
                             }}
                             className="mt-3" variant="contained" disabled>Out of stock</Button> 
                            :
                            <>
                              <Button 
                              onClick={()=> {
                                dispatch(addToCart(item))
                                dispatch(increment())
                               }}
                              className="mt-3" variant="contained">Add to cart</Button>
                              <Button 
                              onClick={()=> {
                                dispatch(addToCart(item))
                                dispatch(increment())
                               }}
                              className="mt-3" variant="outlined">Quick view</Button>
                            </>
                            }
                          </div>
                        </div>
                      </div>
                    </div> 
                  :  
                    <div className="search-items" key={key}> 
                          <>        
                          <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'>    
                            <img src={item.img} alt="item-picture"/>
                            <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                            <h5>{item.series}</h5>
                          </Link>
                          </>
                        {item.quantity == 0 ? 
                           
                           <Button 
                           onClick={()=> {
                            dispatch(addToCart(item))
                            dispatch(increment())
                           }}
                           className="mt-3" variant="contained" disabled>Out of stock</Button>        
                            :                 
                           <Button
                           onClick={()=> {
                            dispatch(addToCart(item))
                            dispatch(increment())
                           }} 
                           className="mt-3" variant="contained">Add to cart</Button>
                           }
                    </div>}            
                  </>     
                  )
                   }
                }
              } else {

                if(availIsCheck == false) {
                  if (value[1] >= item.price) {
                    if(value[0] <= item.price) {                
                       return (
                      <>
                      {viewList ?                     
                        <div className="search-items-container-list" key={key}>
                          <div className="container">
                            <div className="row">
                              <div className="view-list-img col">
                              <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                                <img src={item.img} alt="item-picture"/>
                              </Link>
                              </div>
                              <div className="view-list-text col-6">
                              <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                                <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                                <h5>{item.series}</h5>
                              </Link>
                              </div>
                              <div className="view-list-button col">
                                {item.quantity == 0 
    
                                ? 
                                
                                <Button 
                                onClick={()=> {
                                 dispatch(addToCart(item))
                                 dispatch(increment())
                                }}
                                className="mt-3" variant="contained" disabled>Out of stock</Button> 
                               :
                               <>
                                 <Button 
                                 onClick={()=> {
                                   dispatch(addToCart(item))
                                   dispatch(increment())
                                  }}
                                 className="mt-3" variant="contained">Add to cart</Button>
                                 <Button 
                                 onClick={()=> {
                                   dispatch(addToCart(item))
                                   dispatch(increment())
                                  }}
                                 className="mt-3" variant="outlined">Quick view</Button>
                                </>
                                }
                              </div>
                            </div>
                          </div>
                        </div> 
                      :  
                        <div className="search-items" key={key}>
                          <>
                          <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                            <img src={item.img} alt="item-picture"/>
                            <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                            <h5>{item.series}</h5>
                          </Link>
                          </>
                            {item.quantity == 0 ? 
                               
                               <Button 
                                onClick={()=> {
                                  dispatch(addToCart(item))
                                  dispatch(increment())
                                }}
                                className="mt-3" variant="contained" disabled>Out of stock</Button>        
                                  :                 
                                <Button
                                onClick={()=> {
                                  dispatch(addToCart(item))
                                  dispatch(increment())
                                }} 
                                className="mt-3" variant="contained">Add to cart</Button>
                                    }
                        </div>}            
                      </>     
                      )
                       }
                    }
                  }
              }
              })}

            </>
            :      
            <>
            
            {filteredItems.map((item,key) => {

              if(availIsCheck == true & item.quantity >= 1) {
                if (value[1] >= item.price) {
                  if(value[0] <= item.price) {
                  return (
                    <>
                      {viewList ?                     
                      <div className="search-items-container-list" key={key}>
                        <div className="container">
                          <div className="row">
                            <div className="view-list-img col">
                            <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                              <img src={item.img} alt="item-picture"/>
                            </Link>
                            </div>
                            <div className="view-list-text col-6">
                            <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                              <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                              <h5>{item.series}</h5>
                            </Link>
                            </div>
                            <div className="view-list-button col">
                            {item.quantity == 0 

                              ? 

                              <Button 
                              onClick={()=> {
                               dispatch(addToCart(item))
                               dispatch(increment())
                              }}
                              className="mt-3" variant="contained" disabled>Out of stock</Button> 
                             :
                             <>
                               <Button 
                               onClick={()=> {
                                 dispatch(addToCart(item))
                                 dispatch(increment())
                                }}
                               className="mt-3" variant="contained">Add to cart</Button>
                               <Button 
                               onClick={()=> {
                                 dispatch(addToCart(item))
                                 dispatch(increment())
                                }}
                               className="mt-3" variant="outlined">Quick view</Button>
                              </>
                              }
                            </div>
                          </div>
                        </div>
                      </div> 
                    :  
                      <div className="search-items" key={key}>
                        <>
                        <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                          <img src={item.img} alt="item-picture"/>
                          <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                          <h5>{item.series}</h5>
                        </Link>
                        </>
                          {item.quantity == 0 ? 
                           
                           <Button 
                           onClick={()=> {
                             dispatch(addToCart(item))
                             dispatch(increment())
                           }}
                           className="mt-3" variant="contained" disabled>Out of stock</Button>        
                             :                 
                           <Button
                           onClick={()=> {
                             dispatch(addToCart(item))
                             dispatch(increment())
                           }} 
                           className="mt-3" variant="contained">Add to cart</Button>
                          }
                      </div>}                                                
                    </>                      
                    )
                  }
                }
              } else {
              if(availIsCheck == false) {
                if (value[1] >= item.price) {
                  if(value[0] <= item.price) {
                  return (
                    <>
                      {viewList ?                     
                      <div className="search-items-container-list" key={key}>
                        <div className="container">
                          <div className="row">
                            <div className="view-list-img col">
                            <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                              <img src={item.img} alt="item-picture"/>
                            </Link>
                            </div>
                            <div className="view-list-text col-6">
                            <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                              <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                              <h5>{item.series}</h5>
                            </Link>
                            </div>
                            <div className="view-list-button col">
                            {item.quantity == 0 

                              ? 

                              <Button 
                              onClick={()=> {
                               dispatch(addToCart(item))
                               dispatch(increment())
                              }}
                              className="mt-3" variant="contained" disabled>Out of stock</Button> 
                             :
                             <>
                               <Button 
                               onClick={()=> {
                                 dispatch(addToCart(item))
                                 dispatch(increment())
                                }}
                               className="mt-3" variant="contained">Add to cart</Button>
                               <Button 
                               onClick={()=> {
                                 dispatch(addToCart(item))
                                 dispatch(increment())
                                }}
                               className="mt-3" variant="outlined">Quick view</Button>
                               </>
                              }
                            </div>
                          </div>
                        </div>
                      </div> 
                    :  
                      <div className="search-items" key={key}>
                        <>
                        <Link style={{textDecoration: 'none', color: 'black'}} to ='/product?'> 
                          <img src={item.img} alt="item-picture"/>
                          <h5 style={{color: "blue"}}>₱ {item.price}</h5>
                          <h5>{item.series}</h5>
                        </Link>
                        </>
                          {item.quantity == 0 ? 
                           
                           <Button 
                           onClick={()=> {
                             dispatch(addToCart(item))
                             dispatch(increment())
                           }}
                           className="mt-3" variant="contained" disabled>Out of stock</Button>        
                             :                 
                           <Button
                           onClick={()=> {
                             dispatch(addToCart(item))
                             dispatch(increment())
                           }} 
                           className="mt-3" variant="contained">Add to cart</Button>
                          }
                      </div>}                                                
                    </>                      
                    )
                  }
                }
              }


              }
              })}

            </>
            }
          </div>
        </div>
    
  )
}




export default SearchItems
