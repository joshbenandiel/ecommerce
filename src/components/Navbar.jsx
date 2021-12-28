import React , { useState , useEffect } from 'react'
import "../styles/Navbar.css"
import Login from "./Login"
import Cart from "./Cart"
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from 'react-redux'
import { setSearchisClose } from '../redux/SearchClose'
import { handleSearchResult } from '../redux/SearchResult'
import { setSelectedCheckbox } from '../redux/SelectedCheckBox'
import { getProductItem } from '../redux/productItem'

const Navbar = ({searchFilter,searchTerm}) => {
  
  const [activeLogin, setActiveLogin] = useState(false)
  const [activeCart, setActiveCart] = useState(false);


  const productsData = useSelector((state) => state.product.products);

  const productsInCart = useSelector((state) => state.product.cart);

  const getCartTotal = () => {
    let finalCount = 0;

    productsInCart.map((item) => {
      finalCount = finalCount + item.count
    });

    return finalCount;
  }

  const [searchEmpty , setSearchEmpty] = useState(false)

  const [filteredResult, setFilteredResult] = useState([])

  const [searchIsClick , setSearchIsClick] = useState(false)


  const searchIsVisible = useSelector((state) => { 
    return (
      state.search.searchIsVisible
    )
  })
  

  const dispatch = useDispatch();


  const selectedUrl = useSelector(state => {
    return state.selectedProduct.selectedPhone
  })
  
  useEffect(() => {
      const items = []
      productsData.map(item => {
        if(item.searchTag){
          if (item.searchTag.toLowerCase().includes(searchTerm.toLowerCase()) || item.searchTag.toLowerCase().includes(searchTerm.toLowerCase())){
            items.push(item)
            setSearchEmpty(false);
          } else if (items.length == 0){
            setSearchEmpty(true);
          }
        }
      })
      setFilteredResult(items)
      dispatch(setSearchisClose(true));
  }, [searchTerm])


  const selectedProduct = useSelector(state => {
    return state.productItem.productItem;

    
  })
  
  

  return (
      <div className="navbar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col logo">
            <Link to='/'>
            <h1 className="logo-name">JOSH SHOPEE</h1>
            </Link>
            </div>
            <div className="col-6"> 
              <div className="search-wrapper">
                <input
                onChange={searchFilter}
                placeholder='Search...' className="search-input"></input>
                <Link 
                  to={searchTerm && `/search?q=${searchTerm}`}
                  onClick={() => {
                    dispatch(setSearchisClose(false))
                    dispatch(handleSearchResult(searchTerm))
                    dispatch(setSelectedCheckbox(''))
                  }}
                >
                  <div
                  className="search-btn">
                    <i class="far fa-search"></i>
                  </div>
                </Link>
                
                {searchIsVisible && 
                  <div>
                    {searchTerm == ""  ? 
                      null
                    : 
                    <div className="search-item mt-2">
                    <p className="search-header">PRODUCTS</p>
                    {searchEmpty && 
                        <p className="p-2">Sorry, nothing found for "{searchTerm}"</p>
                    }
                    {filteredResult.map((searchItem , index) => {
                      return (
                        <div
                        onClick={() => {
                          dispatch(setSearchisClose(false))
                          dispatch(getProductItem(searchItem))
                          console.log(selectedProduct)
                        }} 
                        key={index}>
                          <div className="search-wrapper">
                            <div className="search-container d-flex">
                              <Link style={{textDecoration: 'none', color: 'black'}} to={
                                searchItem.searchTag == 'Iphone'
                                ? `/product/${searchItem.tag}/${selectedUrl}`
                                : searchItem.inch ? `/product/${searchItem.tag}/${searchItem.inch}/item` : `/product/${searchItem.tag}` 
                              }>                         
                                <img className="search-img mt-2" src={searchItem.img} alt="item-img"></img>
                              </Link> 
                              <div className="search-details">
                                <Link style={{textDecoration: 'none', color: 'black'}} to={searchItem.inch ? `/product/${searchItem.tag}/${searchItem.inch}/item` : `/product/${searchItem.tag}`}> 
                                  <p className="search-series-header">{searchItem.series}</p>
                                  <p>{searchItem.name}</p>
                                  <p>₱ {searchItem.price}</p>
                                </Link>         
                              </div>        
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    </div>   
                    } 
                  </div>          
                }       
              </div>
            </div>
            <div className="col login">
              <div className="login-wrapper">
                <h5 className="login-signup">Login / Signup</h5>
                <button
                  style={{ border: 0, background: 'transparent' }}
                  onClick={() => {
                    setActiveLogin(!activeLogin)
                    if (activeCart) {
                      setActiveCart(!activeCart);
                    }
                  }}
                  type="button">
                  <h5 className="account">
                    My Account <i class="fas fa-chevron-down"></i>
                  </h5>
                </button>
              </div>
              <div className="cart-wrapper">
                <div className="cart-wrap">
                  <i className="cart-nav far fa-shopping-cart"></i>
                  <div
                    onClick={() => {
                        console.log(productsInCart);
                        setActiveCart(!activeCart)
                        if (activeLogin) {
                          setActiveLogin(!activeLogin);
                        }

                    }} 
                    className="cart-count">
                    <h5>{getCartTotal()}</h5>
                  </div>
                </div>      
                <h5 className="cart-name">Cart</h5>
              </div>
            </div>
          </div>
        </div>  
          <Login
            activeLogin={activeLogin}
            setActiveLogin={setActiveLogin}
          />
          <Cart
          activeCart={activeCart}
          />
      </div>

  )
  
}

export default Navbar
