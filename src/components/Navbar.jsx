import React , { useState } from 'react'
import "../styles/Navbar.css"
import Login from "./Login"
import Cart from "./Cart"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import productData from '../components/data/RecomendationsData'
import Chip from '@mui/material/Chip';

import { useSelector } from 'react-redux'

const Navbar = () => {

  const [activeLogin, setActiveLogin] = useState(false)
  const [activeCart, setActiveCart] = useState(false);


  const productsInCart = useSelector((state) => state.product.cart);

  const getCartTotal = () => {
    let finalCount = 0;

    productsInCart.map((item) => {
      finalCount = finalCount + item.count
    });

    return finalCount;
  }

  return (
      <div className="navbar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col logo">
            <h1 className="logo-name">JOSH SHOPEE</h1>
            </div>
            <div className="col-6"> 
           
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
