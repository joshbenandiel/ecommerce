import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/MacbookAirCard.css'
import { buttonColor } from './data/RecomendationsData'
import { setDisplayItem } from '../redux/ImageForMacbook'

const MacbookAirCard = ({products, macbookProSelectedProduct}) => {

  const dispatch = useDispatch()
  const [color, setColor] = useState('Space Gray')
  const [image, setImage] = useState(buttonColor[0].itemImage)

  const handleButtonColor = (item) => {
    setColor(item.color)
    setImage(item.itemImage)
    dispatch(setDisplayItem(item))
  }

 
  return (
    <>
    <div className='macbook-card-container d-flex flex-column text-start'>
      <img src={image} alt="" />
      <p>{color}</p>
      <div className='d-flex mb-2'>
        {buttonColor.map((button,index) => {
          return <button
          key={index}
          onClick={()=> handleButtonColor(button)}
          className={color === button.color ? 'button-color-air-active' : 'button-color-air'}
          ><img src={button.colorImg} alt="" />
          </button>
        })}
      </div>
      <h5 className='fw-bold w-75'>{products.header}</h5>
      {products.description && products.description.map((item,index) => {
          return <p key={index} className='m-1'>{item}</p>
      })}
      <Link to={`/product/buy/${products.tag}/${products.id}`}>
        <Button
        onClick={() => macbookProSelectedProduct(products)} 
        variant='contained' fullWidth>Select</Button>
      </Link>
      <div className='item-ships d-flex mt-5'>
        <i className="far fa-shipping-fast"></i>
        <div className='item-ships-desc'>
          <p className='ms-1 m-0'><strong>Ships:</strong></p>
          <p className='ms-1 m-0'>3-4w business days</p>
          <p className='ms-1 m-0'>Free Shipping</p>
        </div>
      </div>  
    </div>
    
    </>
  )
}

export default MacbookAirCard
