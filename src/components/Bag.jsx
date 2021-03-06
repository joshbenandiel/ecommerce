import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/Bag.css'
import BagCard from './BagCard';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Bag = ({searchTerm, searchFilter}) => {

  
  const productsInCart = useSelector((state) => state.product.cart);
  
  const [totalPrice, setTotalPrice] = useState([])
  
  useEffect(() => {
    let price = []
    productsInCart.map(item => {
      return price.push(item.totalPrice)
    })
    const total = price.reduce((a, b) => a + b, 0)
    setTotalPrice(total)
  }, [productsInCart])

  return (
    <>
    <Navbar searchTerm={searchTerm} searchFilter={searchFilter}/>
    {productsInCart.length === 0 ? 
      <div className='d-flex flex-column align-items-center p-5'>
        <h1 className='fw-bold mt-4'>Your bag is empty.</h1>
        <Link to='/'>
          <Button
            className='mt-4 bag-button' 
            variant='contained' color='info' >Continue Shopping
          </Button>
        </Link>
      </div> 
    : 
    <div className='bag-container d-flex flex-column align-items-center justify-content-center'>
      <div className='bag-header-wrapper pb-5 d-flex flex-column align-items-center justify-content-center'>
        <h1 className='fw-bold mt-4'>Your bag total is ₱ {totalPrice.toLocaleString()}.00</h1>
        <p className='m-0 mt-3 fw-bold'>Get free delivery on all products.</p>
        <Button
          className='mt-4 bag-button' 
          variant='contained' size='medium'>Check Out
        </Button>
      </div>
      {productsInCart.map((item, index) => {
        return <BagCard
        key={index}
        item={item}
        index={index}
        />
      })}
    </div> 
    }
    <Footer/>
    </>
  )
}


export default Bag
