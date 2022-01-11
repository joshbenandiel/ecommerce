import React , { useState , useEffect } from 'react'
import Keyboard from '../images/Tablets/ipad-accessories-keyboard-card1-202109.jpg'
import KeyboardImg from '../images/Tablets/MX3L2.png'
import Button from '@mui/material/Button';
import applePencil from '../images/Tablets/ipad-mini-accessory-pencil-card1_GEO_PH.jpg'
import pencilImage from '../images/Tablets/MU8F2.png'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/product'

const SmartKeyBoard = ({selectedVariant,setSelectedVariant,params,selectedProduct}) => {

  const [ipadButtonAdded, setIpadButtonAdded] = useState(false)
  const [smartButton, setSmartButton] = useState(false)
  const [activeButton, setActiveButton] = useState(48)
  const [activeButtonStorage, setActiveButtonStorage] = useState(false)
  const [activeButtonWifi, setActiveButtonWifi] = useState(false)
  const [buttonClose , setButtonClose] = useState(false)
  const [buttonCloseStorage , setButtonCloseStorage] = useState(false)
  const [buttonCloseWifi , setButtonCloseWifi] = useState(false)
  const [pencilButton, setPencilButton] = useState(false)
  const [pencilButtonAdded, setPencilButtonAdded] = useState(false)
  const [pencilPrice, setPencilPrice] = useState(0)
  const [getPrice, setGetPrice] = useState(0)
  const [keyBoardPrice, setKeyboardPrice] = useState(0)
  const [wifiPrice, setWifiPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(29990)
  const [pencil, setPencil] = useState('')
  const [keyboard, setKeyboard]= useState('')


  const dispatch = useDispatch()


  const handleStorage = (item) => {
    setActiveButtonStorage(item.storage)
    setButtonCloseStorage(true)
    setGetPrice(item.price)
  }

  const handleWifi = (itemWifi) => {
    setActiveButtonWifi(itemWifi)
    setButtonCloseWifi(true)  
    setWifiPrice(itemWifi.price) 
  }



  const price = wifiPrice + pencilPrice + keyBoardPrice

  useEffect(() => {

    if(price){
      setTotalPrice(price)
    }
  }, [price])

  useEffect(() => {
    ipadWifiConnectivity.forEach(item => {
      if(item.id === 2){
        item.price = getPrice + 9000
      } else {
        item.price = getPrice
      }
    })
    
  }, [buttonCloseStorage, getPrice])
  
  return (
    <div>
      <div className='ipad-header'>
        <h1 className='fs-4'>{selectedVariant.series}</h1>
        <h1 className='fs-4'>₱{totalPrice.toLocaleString()}</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="img-wrapper-ipad d-flex align-items-center flex-column col-6">
          <div className='img-ipad-sticky'>
            <img src={selectedVariant.img} alt='main'/>
            <div className='mt-5 text-center'>
              <i className="far fa-shipping-fast"></i>
              <p>Free Delivery</p>
            </div>
          </div>
        </div>
      <div className="details-ipad-wrapper d-flex align-items-start flex-column col-6">   
      <h1><strong>{selectedVariant.descriptionHeader}</strong></h1>
      {buttonClose === false && <div>
        <p className='mt-5'><strong>Finish</strong></p>
        <div className='button-wrapper'>
          {selectedProduct && selectedProduct.map(item => {
            return <button
            key={item.id}
            className={activeButton === item.id ? 'ipad-button-active' : 'ipad-button'}
            onClick={()=> {
              setSelectedVariant(item)
              setActiveButton(item.id)
              setButtonClose(true)
            }}
            >
            <img src={item.colorTag} alt='color'/>
            {item.color}
            </button>
          })}
        </div>
      </div>}
      {buttonClose === true && 
        <div className='button-close-wrapper'>
          <h1 className='fw-bolder fs-4'>{selectedVariant.color}</h1>
          <button 
          onClick={()=> setButtonClose(false)}
          className='change-button'>Change</button>
        </div>
      }
      {buttonCloseStorage === false && <>
        <p className='fw-bolder'>Storage</p>
        <div className='d-flex'>
        {ipadStorage.map((item, index) => {
          return <button 
          key={index}
          onClick={()=>{
            handleStorage(item)
          }}
          className={activeButtonStorage === item.storage ? 'button-storage-active' : 'button-storage'}>    
          <p className='m-0 fw-bolder fs-4'>{item.storage}</p> 
          <p className='m-0'>₱{item.price.toLocaleString()}</p> 
          </button>
        })}
        </div>
      </>}
      {buttonCloseStorage === true && 
            <div className='button-close-wrapper-storage'>
              <h1 className='fw-bolder fs-4'>{activeButtonStorage}</h1>
              <button 
              onClick={()=> setButtonCloseStorage(false)}
              className='change-button'>Change</button>
            </div>
      }   
      {buttonCloseWifi === false && 
      <>
      <p className='fw-bolder'>Connectivity</p>
      <div className='d-flex'>
        {ipadWifiConnectivity.map((itemWifi, index) => {
          return <button 
          key={index}
          onClick={()=>{
            handleWifi(itemWifi) 
          }}
          className={activeButtonWifi.wifi === itemWifi.wifi ? 'button-storage-active' : 'button-storage'}>    
          <p className='m-0 fw-bolder fs-5'>{itemWifi.wifi}</p> 
          <p>₱{itemWifi.price.toLocaleString()}</p>
          </button>
        })}
      </div>
      </>
      }
      {buttonCloseWifi === true && 
        <div className='button-close-wrapper-storage'>
          <h1 className='fw-bolder fs-4'>{activeButtonWifi.wifi}</h1>
          <button 
          onClick={()=> setButtonCloseWifi(false)}
          className='change-button'>Change</button>
        </div>
      } 
       <p className='fw-bold'>Apple Pencil {params.tag ==='ipad-mini' && 'and Smart Folio'}</p>
      {pencilButtonAdded === false && <div className='apple-pencil-wrapper'>
        <button
        onClick={() => setPencilButton(!pencilButton)} 
        className={pencilButton ? 'apple-pencil-button-active' : 'apple-pencil-button'}>
        <p className='fw-bold mt-3'>Apple Pencil</p>
        </button>
        {pencilButton && 
        <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
          <img className='pencil-img'src={applePencil} alt='pencil'/>
          <p className='fw-bold mt-3'>{pencilData.description}</p>
          <p className='fw-bold'>₱{pencilData.price.toLocaleString()}</p>
          <button
          onClick={()=> {
            setPencilButtonAdded(true)
            setPencilPrice(7990)
            setPencil(pencilData.description)
          }}
          className='pencil-button'>Add</button>
        </div>}
      </div>}
      {pencilButtonAdded === true && 
        <div>
          <div className='d-flex justify-content-between'>
            <p className='fw-bold m-0'>Apple Pencil</p>
            <button
            onClick={() => {
              setPencilButtonAdded(false)
              setPencilPrice(0)
              setPencil()
            }}
            className='edit-button fs-6'>Remove</button>
          </div>
          <div className='d-flex'>
            <img src={pencilImage} alt='pencil'/>
            <div className='d-flex flex-column justify-content-center'>
              <p className='fw-bold'>{pencilData.description}</p>
              <p className='fw-bold'>₱{pencilData.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      }
      {ipadButtonAdded === false && <div className='apple-pencil-wrapper'>
      <button
      onClick={()=> setSmartButton(!smartButton)} 
      className={smartButton ? 'apple-pencil-button-active' : 'apple-pencil-button'}>
      <p className='fw-bold mt-3'>Smart Keyboard</p>
      </button>
      {smartButton &&
      <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
        <img className='pencil-img'src={Keyboard} alt='keyboard'/>
        <p className='fw-bold mt-3'>{keyboardData.description}</p>
        <p className='fw-bold'>₱{keyboardData.price.toLocaleString()}</p>  
        <button
        onClick={() => {
          setIpadButtonAdded(true)
          setKeyboardPrice(8990)
          setKeyboard(keyboardData.description)
          }} 
        className='pencil-button mt-3'>Add</button>
      </div>} 
      </div>}
    {ipadButtonAdded === true && 
    <div>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold m-0'>Smart Keyboard</p>
        <button
        onClick={() => {
          setIpadButtonAdded(false)
          setKeyboardPrice(0)
          setKeyboard()
        }}
        className='edit-button fs-6'>Remove</button>
      </div>
      <div className='d-flex folio-wrapper'>
        <img className='m-2' src={KeyboardImg} alt='keyboard'/>
        <div className='d-flex flex-column justify-content-center m-3'>
          <p className='fw-bold'>{keyboardData.description}</p>
          <p className='fw-bold'>₱{keyboardData.price.toLocaleString()}</p>
        </div>
      </div>
    </div>} 
    <div className='iphone-footer mb-5'>
      <h1><strong>₱{totalPrice.toLocaleString()}</strong></h1>
      <div className='item-ships'>
        <i className="far fa-shipping-fast"></i>
        <div className='item-ships-desc'>
          <p><strong>Ships:</strong></p>
          <p>1-3 business days</p>
          <p>Free Shipping</p>
        </div>
      </div>
      <Button
        onClick={()=> {
          dispatch(addCart({
            id: selectedVariant.id,
            name: selectedVariant.series,
            img: selectedVariant.img,
            color: selectedVariant.color, 
            size: activeButtonStorage,
            price: price,
            pencil: pencil,
            keyboard: keyboard
          }))
        }} 
      variant='contained' className=''>Add to cart</Button>  
      </div>  
      </div>
      </div> 
    </div>
  </div>
  )
}

const ipadStorage = [
  {
    storage: '64gb',
    price: 29990
  },
  {
    storage: '256gb',
    price: 38990
  }
]
const ipadWifiConnectivity = [
  {
    id: 1,
    wifi: 'Wi-Fi',
    price: 29990
  },
  { 
    id: 2,
    wifi: 'Wi-Fi + Cellular',
    price: 38990
  }
]

const pencilData = {
  id: 1,
  description: 'Apple Pencil (2nd generation)',
  price: 7990
}

const keyboardData = {
  id: 1,
  description: 'Smart Keyboard',
  price: 8990
}
export default SmartKeyBoard
