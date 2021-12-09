
import React , { useState , useEffect } from 'react'
import "../styles/Navbar.css"
import Login from "./Login"
import Cart from "./Cart"
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'

const SearchNavbar = ({searchTerm}) => {


  const [searchTermNavbar, setSearchTermNavbar] = useState("")

  const searchFilterNavbar = (e) => {
    setSearchTermNavbar(e.target.value);
  }


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



  const [filteredResult, setFilteredResult] = useState([])
  
  useEffect(() => {
      const items = []
      productsData.map(item => {
        if (item.series.toLowerCase().includes(searchTermNavbar)){
          items.push(item)
        } 
      })
      setFilteredResult(items)
  }, [searchTermNavbar])
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="row">
          <div className="col logo">
          <h1 className="logo-name">JOSH SHOPEE</h1>
          </div>
          <div className="col-6"> 
            <div className="search-wrapper">
              <input
              onChange={searchFilterNavbar}
              placeholder='Search...' className="search-input"></input>
              <Link to="/search">
                <div
                className="search-btn">
                  <i class="far fa-search"></i>
                </div>
              </Link>
              {searchTermNavbar == ""  ? 
                null
               : 
              <div className="search-item mt-2">
               <p className="search-header">PRODUCTS</p>
               {filteredResult.map((searchItem , index) => {
                 return (
                   <div key={index}>
                     <div className="search-wrapper">
                       <div className="search-container d-flex">
                         <img className="search-img mt-2" src={searchItem.img} alt="item-img"></img>
                         <div className="search-details">
                           <p className="search-series-header">{searchItem.series}</p>
                           <p>{searchItem.name}</p>
                           <p>₱ {searchItem.price}</p>        
                         </div>   
                         
                       </div>
                     </div>
                   </div>
                 )
               })}
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


export default SearchNavbar
