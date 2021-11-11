import React , { useState } from 'react'
import "../styles/Cart.css"
import Button from '@mui/material/Button';

const Cart = ({activeCart}) => {

  const [count, setCount] = useState(0);

  return (
    <>
    {activeCart &&
      <div className="active-cart">
          <div className="active-cart-wrap">
            <div className="active-cart-count-box">
              <button
              onClick={()=> {
                setCount(count - 1)
              }} 
              >
                -
              </button>
              <p>{count}</p>
              <button
               onClick={()=> {
                setCount(count + 1)
              }} 
              >
                +
              </button>
            </div>
          </div>
          <div className="total-wrap">
            <p className="">Total</p>
            <div className="button-wrap d-flex justify-content-between">
              <Button size='large' variant="contained">View cart</Button>
              <Button size='large' variant="contained">Checkout</Button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Cart
