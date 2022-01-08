import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'

const Cart = ({activeCart}) => {


  const productsInCart = useSelector((state) => state.product.cart);


  return (
    <>
    {activeCart && 
      <div className='cart-container'>
        <div className='cart-item-wrapper'>
          {productsInCart.map((item, index) => {
            return (
              <div
              key={index}
              className='d-flex align-items-center mb-3'>
                <img className='cart-image' src={item.img} alt='cart-image' />
                <div className='d-flex flex-column'>
                  <p className='m-0'>{item.name} {item.color} {item.size}</p>
                  <p className='m-0'>₱{item.price.toLocaleString()}</p>
                </div>
              </div>
            )
          })}
        </div>
        <Button
        className='mt-4' 
        variant='contained' fullWidth='true'>Check Out</Button>
        <Link className='bag-button w-100' to='/product/shop/bag'>
          <Button
          className='mt-2' 
          variant='outlined' fullWidth='true'>View Bag</Button>
        </Link>
      </div>
    }
    </>
  )
}

export default Cart
