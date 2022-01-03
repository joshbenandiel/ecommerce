import React , { useState} from 'react'
import darkLavender from '../images/Tablets/MM6L3_SW_COLOR.jpg'
import electricOrange from '../images/Tablets/MM6J3_SW_COLOR.jpg'
import darkCherry from '../images/Tablets/MM6K3_SW_COLOR.jpg'
import black from '../images/Tablets/MM6G3_SW_COLOR.jpg'
import white from '../images/Tablets/MM6H3_SW_COLOR.jpg'
import smartFolio from '../images/Tablets/ipad-mini-accessory-folio-card1.jpg'
import folioLavender from '../images/Tablets/MM6L3_DEFAULT_FV1.png'
import folioElectricOrange from '../images/Tablets/MM6J3_DEFAULT_FV1.png'
import folioDarkCherry from '../images/Tablets/MM6K3_DEFAULT_FV1.png'
import folioBlack from '../images/Tablets/MM6G3_DEFAULT_FV1.png'
import folioWhite from '../images/Tablets/MM6H3_DEFAULT_FV1.png'
import Button from '@mui/material/Button'
import applePencil from '../images/Tablets/ipad-mini-accessory-pencil-card1_GEO_PH.jpg'
import pencil from '../images/Tablets/MU8F2.png'


const Ipad = ({selectedVariant,setSelectedVariant,params,selectedProduct}) => {

  const [ipadButtonAdded, setIpadButtonAdded] = useState(false)
  const [smartButton, setSmartButton] = useState(false)
  const [smartFolioButton , setSmartFolioButton] = useState('')
  const [getFolioImg, setFolioImg] = useState('')
  const [folioPrice, setFolioPrice] = useState(0)
  const [activeButton, setActiveButton] = useState(44)
  const [activeButtonStorage, setActiveButtonStorage] = useState('')
  const [activeButtonWifi, setActiveButtonWifi] = useState(false)
  const [buttonClose , setButtonClose] = useState(false)
  const [buttonCloseStorage , setButtonCloseStorage] = useState(false)
  const [buttonCloseWifi , setButtonCloseWifi] = useState(false)
  const [pencilButton, setPencilButton] = useState(false)
  const [pencilButtonAdded, setPencilButtonAdded] = useState(false)
  const [pencilPrice, setPencilPrice] = useState(0);
  const [getPrice, setGetPrice] = useState(0);

  



  const totalPrice = getPrice + pencilPrice + folioPrice
  return (
    <>
    <div>
      <div className='ipad-header'>
        <h1 className='fs-4'>{selectedVariant.series}</h1>
        <h1 className='fs-4'>₱{totalPrice.toLocaleString()}</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="img-wrapper-ipad d-flex align-items-center flex-column col-6">
          <div className='img-ipad-sticky'>
            <img src={selectedVariant.img} alt='ipad'/>
            <div className='mt-5 text-center'>
              <i class="far fa-shipping-fast"></i>
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
              <img src={item.colorTag} alt='ipad'/>
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
          {ipadMiniStorage.map(item => {
            return <button 
            onClick={()=>{
              setActiveButtonStorage(item.storage)
              setButtonCloseStorage(true)
              setGetPrice(item.price)
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
          {ipadConnectivity.map(itemWifi => {
            return <button 
            onClick={()=>{
              setActiveButtonWifi(itemWifi.wifi)
              setButtonCloseWifi(true)

            }}
            className={activeButtonWifi === itemWifi.wifi ? 'button-storage-active' : 'button-storage'}>    
            <p className='m-0 fw-bolder fs-5'>{itemWifi.wifi}</p> 
            {buttonCloseStorage && <>
            {itemWifi.wifi === 'Wi-Fi' ? <p className='m-0'>₱{getPrice.toLocaleString()}</p> : <p className='m-0'>₱{(getPrice + 9000).toLocaleString()}</p>} 
            </>}
            </button>
          })}
        </div>
        </>
        }
        {buttonCloseWifi === true && 
          <div className='button-close-wrapper-storage'>
            <h1 className='fw-bolder fs-4'>{activeButtonWifi}</h1>
            <button 
            onClick={()=> {
              setButtonCloseWifi(false)
            }}
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
            <p className='fw-bold mt-3'>Apple Pencil (2nd generation)</p>
            <p className='fw-bold'>₱7,990</p>
            <button
            onClick={()=> {
              setPencilButtonAdded(true)
              setPencilPrice(7990)
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
              }}
              className='edit-button fs-6'>Remove</button>
            </div>
            <div className='d-flex'>
              <img src={pencil} alt='pencil'/>
              <div className='d-flex flex-column justify-content-center'>
                <p className='fw-bold'>Apple Pencil (2nd generation)</p>
                <p className='fw-bold'>₱7,990</p>
              </div>
            </div>
          </div>
        }
        {ipadButtonAdded === false && <div className='apple-pencil-wrapper'>
        <button
        onClick={()=> setSmartButton(!smartButton)} 
        className={smartButton ? 'apple-pencil-button-active' : 'apple-pencil-button'}>
        <p className='fw-bold mt-3'>Smart Folio</p>
        </button>
        {smartButton &&
        <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
        <img className='pencil-img'src={smartFolio} alt='folio'/>
        <p className='fw-bold mt-3'>Smart Folio for iPad mini</p>
        <p className='fw-bold'>₱3,990</p>
        <p>Color - {smartFolioButton}</p>
        <div className='d-flex'>  
        {smartFolioData.map(itemButton => {
          return <button
          onClick={() => {
            setSmartFolioButton(itemButton.color)
            setFolioImg(itemButton)
            }}
          className={smartFolioButton === itemButton.color ? 'smart-folio-button-active' : 'smart-folio-button'}>
            <img src={itemButton.colorImg} alt='button-color'/>
          </button>
        })}
        </div>    
        <button
        onClick={() => {
          setIpadButtonAdded(true)
          setFolioPrice(3990)
          }} 
        className='pencil-button mt-3'>Add</button>
        </div>} 
      </div>}
      {ipadButtonAdded === true && 
      <div>
        <div className='d-flex justify-content-between'>
          <p className='fw-bold m-0'>Smart Folio</p>
          <button
          onClick={() => {
            setIpadButtonAdded(false)
            setFolioPrice(0)
          }}
          className='edit-button fs-6'>Remove</button>
        </div>
        <div className='d-flex folio-wrapper'>
          <img src={getFolioImg.colorFolio} alt='folio'/>
          <div className='d-flex flex-column justify-content-center'>
            <p className='fw-bold'>{getFolioImg.color}</p>
            <p className='fw-bold'>₱3,990</p>
          </div>
        </div>
      </div>} 
      <div className='iphone-footer'>
        <h1><strong>₱{totalPrice.toLocaleString()}</strong></h1>
        <div className='item-ships d-flex mt-5'>
          <i class="far fa-shipping-fast"></i>
          <div className='item-ships-desc'>
            <p className='ms-1 m-0'><strong>Ships:</strong></p>
            <p className='ms-1 m-0'>3-4w business days</p>
            <p className='ms-1 m-0'>Free Shipping</p>
          </div>
        </div>
        <Button variant='contained' className=''>Add to cart</Button>  
      </div> 
      </div>
      </div> 
    </div>
    </div>
    </>
  )
}

const smartFolioData = [
  {
    color: 'Dark Lavender',
    colorImg: darkLavender,
    colorFolio: folioLavender
  },
  {
    color: 'Electric Orange',
    colorImg: electricOrange,
    colorFolio: folioElectricOrange
  },
  {
    color: 'Dark Cherry',
    colorImg: darkCherry,
    colorFolio: folioDarkCherry
  },
  {
    color: 'Black',
    colorImg: black,
    colorFolio: folioBlack
  },
  {
    color: 'White',
    colorImg: white,
    colorFolio: folioWhite
  }
]

const ipadMiniStorage = [
  {
    storage: '64gb',
    price: 29990
  },
  {
    storage: '128gb',
    price: 38990
  }
]
const ipadConnectivity = [
  {
    wifi: 'Wi-Fi',
  },
  {
    wifi: 'Wi-Fi + Cellular',
  }
]


export default Ipad
