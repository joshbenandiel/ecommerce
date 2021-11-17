import React , { useState } from 'react'
import "../styles/Navbar.css"
import Login from "./Login"
import Cart from "./Cart"

const Navbar = () => {

  const [activeLogin, setActiveLogin] = useState(false)
  const [activeCart, setActiveCart] = useState(false);




  return (
      <div className="navbar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col logo">
            <h1 className="logo-name">JOSH SHOPEE</h1>
            </div>
            <div className="col-6 search"> 
              <div className="search-wrapper">
                <input type="text" placeholder="Search..."></input>
                <div className="search-btn">
                  <i className="fas fa-search"></i>
                </div>
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
                        setActiveCart(!activeCart)
                        if (activeLogin) {
                          setActiveLogin(!activeLogin);
                        }

                    }} 
                    className="cart-count">
                    <h5>0</h5>
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
