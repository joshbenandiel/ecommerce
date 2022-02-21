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
import apple from '../images/Watches/applelogogadgetspage-15753501854p8cl.jpg'

const Navbar = ({searchFilter,searchTerm}) => {
  
  const [activeLogin, setActiveLogin] = useState(false)
  const [activeCart, setActiveCart] = useState(false);
  const productsInCart = useSelector((state) => state.product.cart);
  const productsData = useSelector((state) => state.product.products);
  const [searchEmpty , setSearchEmpty] = useState(false)
  const [filteredResult, setFilteredResult] = useState([])
  const searchIsVisible = useSelector((state) => { 
    return (
      state.search.searchIsVisible
    )
  })
  

  const dispatch = useDispatch();
  
  useEffect(() => {
      const items = []
      if(productsData) {
      productsData.forEach(item => {
        if(item.searchTag){
          if (item.searchTag.toLowerCase().includes(searchTerm.toLowerCase())){
            items.push(item)
            setSearchEmpty(false);
          } else if (items.length === 0){
            setSearchEmpty(true);
          } else {
            return null;
          }
        } else {
          return null;
        }
      })
      } else {
        return null;
      }
      setFilteredResult(items)
      dispatch(setSearchisClose(true));
  }, [searchTerm, dispatch, productsData])

  return (
      <div className="navbar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col logo">
            <Link style={{textDecoration: 'none'}}to='/'>
            <div className='d-flex'>
              <h1 className="logo-name fw-bold">SOJJ</h1>
              <img className='logo-image'src={apple} alt="" />
            </div>
            </Link>
            </div>
            <div className="col-6 d-flex align-items-center"> 
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
                    <i className="far fa-search"></i>
                  </div>
                </Link>
                
                {searchIsVisible && 
                  <div>
                    {searchTerm === ""  ? 
                      null
                    : 
                    <div className="search-item mt-2">
                    <p className="search-header">PRODUCTS</p>
                    {searchEmpty && 
                        <p className="p-2">Sorry, nothing found for "{searchTerm}"</p>
                    }
                    {filteredResult.map((searchItem , index) => {
                      return (
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/buy/${searchItem.tag}`}>                          
                          <div
                          onClick={() => {
                            dispatch(setSearchisClose(false))
                            dispatch(getProductItem(searchItem))
                          }} 
                          key={index}>
                            <div className="search-wrapper">
                              <div className="search-container d-flex">
                                <img className="search-img mt-2" src={searchItem.img} alt="item-img"></img>
                                <div className="search-details">
                                  {/* <Link style={{textDecoration: 'none', color: 'black'}} to={searchItem.inch ? `/product/${searchItem.tag}/${searchItem.inch}/item` : `/product/${searchItem.tag}`}>  */}
                                    <p className="search-series-header">{searchItem.series}</p>
                                    <p>{searchItem.name}</p>
                                    <p>₱ {searchItem.price}</p>
                                  {/* </Link>          */}
                                </div>        
                              </div>
                            </div>
                          </div>
                        </Link>
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
                    My Account <i className="fas fa-chevron-down"></i>
                  </h5>
                </button>
              </div>
              <div className="cart-wrapper">
                <div className="cart-wrap position-relative">
                  <i className="cart-nav far fa-shopping-cart"></i>
                  <div
                    onClick={() => {
                        setActiveCart(!activeCart)
                        if (activeLogin) {
                          setActiveLogin(!activeLogin);
                        }
                    }} 
                    className="cart-count">
                    <h5>{productsInCart.length}</h5>
                  </div>
                  <Cart
                    activeCart={activeCart}
                  />
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
      </div>

  )
  
}

export default Navbar
