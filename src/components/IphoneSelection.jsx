import React, { useState, useEffect} from 'react'
import '../styles/IphoneSelection.css'
import { useSelector } from 'react-redux'
import { useParams , useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const IphoneSelection = () => {

  const navigate = useNavigate()
  const params = useParams()
  const products = useSelector((state) => {
    return state.product.products
  })

  const [selectedProduct, setSelectedProduct] = useState([])
  const [selectedVariant, setSelectedVariant] = useState({})
  const [storageIsClick, setStorageIsClick] = useState(true)
  const [storageIsClickSecond, setStorageIsClickSecond] = useState(false)
  const [storageIsClickThird, setStorageIsClickThird] = useState(false)
  const [storageIsClickFourth, setStorageIsClickFourth] = useState(false)
  const [price, setPrice] = useState(0)
  const [header, setHeader] = useState('')
  const [buttonIphoneMini ,setButtonIphoneMini] = useState(true)
  const [buttonIphone12 ,setButtonIphone12] = useState(false)
 

  useEffect(() => {
    const items = []
    products.map(item => {
      if(params.tag == item.tag)
      items.push(item)
    })
    setSelectedProduct(items)
    setSelectedVariant(items[0])
    setPrice(items[0].price)
    setHeader(items[0].descriptionHeader)
  }, [params])

  const storage128 = selectedVariant.price  + 3000;
  const storageIphone256 = selectedVariant.price  + 6000;
  const storage256 = selectedVariant.price  + 9000;
  const storageIphone512 = selectedVariant.price  + 18000;
  const storageTb = selectedVariant.price + 31000


    
  console.log(params.tag)
  
  return (
    <div className='iphone-container-select container'>
      <div className="row">
        <div className="image-container col-6">
          <img className={buttonIphone12 && 'image-iphone-12'}src={selectedVariant.img}></img>
          <div className='mt-5 text-center'>
            <i class="far fa-shipping-fast"></i>
            <p>Free Delivery</p>
          </div>
        </div>
        <div className="details-container col-6">
         <h1 className='mt-5'><strong>{header}</strong></h1>
          {(params.tag == 'iphone-12' || params.tag == 'iphone-13') && 
            <>
            <p><strong>Choose your model.</strong></p>
            <button 
            onClick={() => {
              setButtonIphoneMini(!buttonIphoneMini)
              setButtonIphone12(false)
            }}
            className={buttonIphoneMini ? 'iphone-12-button-active' : 'iphone-12-button'} ><strong>{params.tag == 'iphone-13' ? 'Iphone 13' : 'Iphone 12 mini'}</strong><p className='m-0'>{params.tag == 'iphone-13' ? '6.1-inch display' : '5.4-inch display'}</p></button>
            <button
            onClick={() => {
              setButtonIphone12(!buttonIphone12)
              setButtonIphoneMini(false)
            }} 
            className={buttonIphone12 ? 'iphone-12-button-active' : 'iphone-12-button'} ><strong>{params.tag == 'iphone-13' ? 'Iphone 13 Pro Max' : 'Iphone 12'}</strong> <p className='m-0'>{params.tag == 'iphone-13' ? '6.7-inch display' : '6.1-inch display'}</p></button>
            </>
          }    
          <p><strong>Choose your finish.</strong></p>
          <div className='button-wrapper-iphone'>
            {selectedProduct.map(item => {
              if (item.size == '64gb'){
                return <button
                className={selectedVariant.color == item.color? 'button-iphone-active' : 'button-iphone'}
                onClick={()=> setSelectedVariant(item) }
                ><img className='button-circle-color'src={item.colorTag}/>{item.color}</button>
              }
            })}
         </div>
         <p><strong>Choose your capacity.</strong></p>
         <div className='storage-button-wrapper'>
          <button 
          className={storageIsClick ? 'storage-iphone-button-active' :'storage-iphone-button'}
          onClick={() => {
            setPrice(selectedVariant.price)
            setStorageIsClick(!storageIsClick)
            setStorageIsClickSecond(false)
            setStorageIsClickThird(false)
            setStorageIsClickFourth(false)
          }}><h3><strong>{params.tag == 'iphone-13' ? '128GB' : '64GB'}</strong></h3><p className='button-price'>₱{selectedVariant.price && selectedVariant.price.toLocaleString()}.00</p></button>
          <button 
          className={storageIsClickSecond ? 'storage-iphone-button-active' :'storage-iphone-button'}
          onClick={() => {
            if (params.tag == 'iphone-13') {
              setPrice(selectedVariant.price + 6000)
            } else {
              setPrice(selectedVariant.price + 3000)
            }   
            setStorageIsClickSecond(!storageIsClickSecond)
            setStorageIsClick(false)
            setStorageIsClickThird(false)
            setStorageIsClickFourth(false)
          }}><h3><strong>{params.tag == 'iphone-13' ? '256GB' : '128GB'}</strong></h3><p className='button-price'>₱
          {params.tag =='iphone-13' ? storageIphone256.toLocaleString() : storage128.toLocaleString()}.00</p></button>
          {(params.tag == 'iphone-12' || params.tag == 'iphone-13') && 
           <button 
           className={storageIsClickThird ? 'storage-iphone-button-active' :'storage-iphone-button'}
           onClick={() => {
            if (params.tag == 'iphone-13') {
              setPrice(selectedVariant.price + 18000)
            } else {
              setPrice(selectedVariant.price + 9000)
            } 
             setStorageIsClickThird(!storageIsClickThird)
             setStorageIsClick(false)
             setStorageIsClickSecond(false)
             setStorageIsClickFourth(false)
           }}><h3><strong>{params.tag == 'iphone-13' ? '512GB' : '256GB'}</strong></h3><p className='button-price'>₱{params.tag == 'iphone-13' ? storageIphone512.toLocaleString() : storage256.toLocaleString()}.00</p></button>
          }
          {params.tag == 'iphone-13' && 
           <button 
           className={storageIsClickFourth ? 'storage-iphone-button-active' :'storage-iphone-button'}
           onClick={() => {
             setPrice(selectedVariant.price + 31000)
             setStorageIsClickFourth(!storageIsClickFourth)
             setStorageIsClick(false)
             setStorageIsClickSecond(false)
             setStorageIsClickThird(false)
           }}><h3><strong>1TB</strong></h3><p className='button-price'>₱{storageTb.toLocaleString()}.00</p></button>
          }
         </div>
         <div className='iphone-footer'>
          <h1><strong>₱{price.toLocaleString()}.00</strong></h1>
          <div className='item-ships'>
            <i class="far fa-shipping-fast"></i>
            <div className='item-ships-desc'>
              <p><strong>Ships:</strong></p>
              <p>1-3 business days</p>
              <p>Free Shipping</p>
            </div>
          </div>
          <Button variant='contained' className=''>Add to cart</Button>  
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default IphoneSelection
