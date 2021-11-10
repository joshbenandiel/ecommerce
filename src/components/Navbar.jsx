import React , { useState } from 'react'
import "../styles/Navbar.css"
import Login from "./Login"


const Navbar = () => {

  const [activeLogin, setActiveLogin] = useState(false)

  

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
                <h5 
                onClick={()=> {
                  setActiveLogin(!activeLogin);
                }}
                className="account">My Account <i class="fas fa-chevron-down"></i></h5>
              </div>
              <div className="cart-wrapper">
                <div className="cart-wrap">
                  <i className="far fa-shopping-cart"></i>
                  <div className="cart-count">
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
      </div>
    
  )
}

export default Navbar
