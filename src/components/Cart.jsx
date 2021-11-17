import React , { useState } from 'react'
import "../styles/Cart.css"
import Button from '@mui/material/Button';
import { useSelector , useDispatch } from 'react-redux'
import { removeToCart } from '../redux/product';

const Cart = ({activeCart}) => {

  


  const productsInCart = useSelector((state) => state.product.cart);



  return (
    <>
    {activeCart &&
      <div className="active-cart">   
          <div className="cart-adjust">
            { productsInCart.length > 0 ? (
              <>
                { productsInCart.map((item, index) => {
                  console.log(index, item);
                  return (
                    <CartItem 
                      key={index}
                      cartItem={item}
                    />
                  )
                }
                )}
              </>
            ) : (
              <div className="cart-empty">
                <i className="cart-active-container fal fa-shopping-cart"></i>
                <p>Your cart is empty</p>
              </div>
            ) }
          </div>
          {productsInCart.length > 0 ?
            <div className="total-wrap">
            <p className="">Total</p>
              <div className="button-wrap d-flex justify-content-between">
                <Button size='large' variant="contained">View cart</Button>
                <Button size='large' variant="contained">Checkout</Button>
              </div>
            </div>
          : 
          <div className="d-flex justify-content-center p-4">
            <Button fullWidth size='large' variant="contained">Shop our products</Button>
 
          </div>}
        </div>
      }
    </>
  )
}

const CartItem = ({cartItem}) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  return (
    <div className="active-cart-wrap"> 
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="cart-item" src={cartItem.img} alt="item-img"></img>
          </div>
          <div className="col">
            <p>{cartItem.series}</p>
            <p>{cartItem.price}</p>
          </div>
          <div className="col"> 
              <div className="button-remove">  
                <div className="active-cart-count-box">
                  <button
                  onClick={()=> {
                    if (count === 0){
                    } else {
                      setCount(count - 1)
                    }     
                  }} 
                  > - </button>    
                  <p>{count}</p>
                  <button
                  onClick={()=> {
                    setCount(count + 1)
                  }} 
                  > + </button>
                </div>  
              <button
              onClick={() => dispatch(removeToCart({ id: cartItem.id }))} 
              className="remove-button">Remove</button>
            </div>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default Cart
