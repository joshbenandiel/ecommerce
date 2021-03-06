import React , { useState , useEffect ,useRef } from 'react'
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
import { useOnClickOutside } from '../hooks/outsideClick';

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

  const state = useSelector((state) => state.search.searchIsVisible)
  console.log(state)
  
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
      if(document.activeElement === inputRef.current){
        dispatch(setSearchisClose(true));
      }
    }, [searchTerm, dispatch, productsData])
    
    
    
  const inputRef = useRef()
  const searchRef = useRef()
  const cartRef = useRef()
  const loginRef = useRef()
  


  useOnClickOutside(loginRef, () => setActiveLogin(false))
  useOnClickOutside(searchRef, () => dispatch(setSearchisClose(false)))
  useOnClickOutside(cartRef, () => setActiveCart(false))
 


  

  return (
      <div  className="navbar-wrapper">
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
                ref={inputRef}
                onChange={searchFilter}
                placeholder='Search...' className="search-input"></input>
                <Link 
                  to={searchTerm && `/search?q=${searchTerm}`}
                  onClick={() => {      
                    dispatch(handleSearchResult(searchTerm))
                    dispatch(setSelectedCheckbox(''))
                    // dispatch(setSearchisClose(false))
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
                    <div ref={searchRef} className="search-item mt-2">
                    <p className="search-header">PRODUCTS</p>
                    {searchEmpty && 
                        <p className="p-2">Sorry, nothing found for "{searchTerm}"</p>
                    }
                    {filteredResult.map((searchItem , index) => {
                      return (
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/buy/${searchItem.tag}`}>                          
                          <div
                          onClick={() => {
                            dispatch(getProductItem(searchItem))
                            // dispatch(setSearchisClose(false))
                          }} 
                          key={index}>
                            <div className="search-wrapper">
                              <div className="search-container d-flex">
                                <img className="search-img mt-2" src={searchItem.img} alt="item-img"></img>
                                <div className="search-details">
                                  {/* <Link style={{textDecoration: 'none', color: 'black'}} to={searchItem.inch ? `/product/${searchItem.tag}/${searchItem.inch}/item` : `/product/${searchItem.tag}`}>  */}
                                    <p className="search-series-header">{searchItem.series}</p>
                                    <p>{searchItem.name}</p>
                                    <p>??? {searchItem.price}</p>
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
              <div ref={loginRef} className="login-wrapper">
                <h5 className="login-signup">Login / Signup</h5>
                <button
                  style={{ border: 0, background: 'transparent' }}
                  onClick={() => {
                    setActiveLogin(true)
                    if (activeCart) {
                      setActiveCart(false);
                    }
                  }}
                  type="button">
                  <h5 className="account">
                    My Account <i className="fas fa-chevron-down"></i>
                  </h5>
                </button>
                <Login
                  activeLogin={activeLogin}
                  setActiveLogin={setActiveLogin}
                />
              </div>
              <div ref={cartRef} className="cart-wrapper">
                <div className="cart-wrap position-relative">
                  <i className="cart-nav far fa-shopping-cart"></i>
                  <div
                    onClick={() => {
                        setActiveCart(true)
                        if (activeLogin) {
                          setActiveLogin(false);
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
 
         
      </div>
  )
  
}

export default Navbar
