import React , { useState } from 'react'
import Keyboard from '../images/Tablets/IpadAir/ipadair-accessory-magickeyboard-card2.jpg'
import KeyboardImg from '../images/Tablets/IpadAir/MXNL2.png'
import Button from '@mui/material/Button';
import applePencil from '../images/Tablets/ipad-mini-accessory-pencil-card1_GEO_PH.jpg'
import pencil from '../images/Tablets/MU8F2.png'
import KeyboardBlack from '../images/Tablets/IpadAir/MXQT2LL_DEFAULT_FV1.png'
import KeyboardWhite from '../images/Tablets/IpadAir/MJQJ3LL_DEFAULT_FV1.png'
import KeyboardButtonBlack from '../images/Tablets/IpadAir/MXQT2LL_SW_COLOR.jpg'
import KeyboardButtonWhite from '../images/Tablets/IpadAir/MJQJ3LL_SW_COLOR.jpg'
import KeyboardSmartImg from '../images/Tablets/IpadAir/ipadpro-accessory-smartkeyboard-card1.jpg'


const SmartKeyBoard = ({selectedVariant,setSelectedVariant,params,selectedProduct}) => {

  const [ipadButtonAdded, setIpadButtonAdded] = useState(false)
  const [smartButton, setSmartButton] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [activeButtonStorage, setActiveButtonStorage] = useState(false)
  const [activeButtonWifi, setActiveButtonWifi] = useState(false)
  const [buttonClose , setButtonClose] = useState(false)
  const [buttonCloseStorage , setButtonCloseStorage] = useState(false)
  const [buttonCloseWifi , setButtonCloseWifi] = useState(false)
  const [buttonCloseModel , setButtonCloseModel] = useState(false)
  const [pencilButton, setPencilButton] = useState(false)
  const [pencilButtonAdded, setPencilButtonAdded] = useState(false)
  const [pencilPrice, setPencilPrice] = useState(0)
  const [getPrice, setGetPrice] = useState(0)
  const [smartFolioButton , setSmartFolioButton] = useState('')
  const [getFolioImg, setFolioImg] = useState('')
  const [getKeyboard, setGetKeyboard] = useState({})
  const [editButtonClick , setEditButtonClick] = useState(false)
  const [editButtonClickSmart , setEditButtonClickSmart] = useState(false)
  const [modelButtonActive, setModelButtonActive] = useState('')
  const [keyBoardPrice , setKeyBoardPrice] = useState(0)
  const [magicKeyBoardPrice , setMagicKeyBoardPrice] = useState(0)

  console.log(modelButtonActive)

  const handleKeyboard = (key, value) => {
    setGetKeyboard({
      ...getKeyboard,
      [key]: value
    })
  }

  const handleDeleteKeyboard = (key) => {
    const newObj = getKeyboard;
    delete newObj[key];
    setGetKeyboard(newObj)
  }

  const totalPrice = getPrice + pencilPrice + keyBoardPrice + magicKeyBoardPrice


  console.log(getPrice)
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
            <img src={selectedVariant.img}/>
            <div className='mt-5 text-center'>
              <i class="far fa-shipping-fast"></i>
              <p>Free Delivery</p>
            </div>
          </div>
        </div>
      <div className="details-ipad-wrapper d-flex align-items-start flex-column col-6">   
      <h1><strong>{selectedVariant.descriptionHeader}</strong></h1>
        <p className='fw-bold'>Model</p>
        {buttonCloseModel == false && <div className='d-flex flex-column'>
          {modelData.map(modelButton => {
            return <button
            className={modelButtonActive == modelButton.type ? 'model-button-ipad-active m-2 ms-0 text-start ps-2': 'model-button-ipad m-2 ms-0 text-start ps-2'}
            onClick={()=> {
              setModelButtonActive(modelButton.type)
              setButtonCloseModel(true)
              setGetPrice(modelButton.price)
            }}> 
            <div className='d-flex justify-content-between'>
              <p className='m-0 p-4 fw-bold'>{modelButton.type}</p>
              <p className='m-0 p-4 fw-bold'>From ₱{modelButton.price}</p>
            </div>
            </button>
          })}
        </div>}
        {buttonCloseModel == true && 
        <div className='button-close-wrapper'>
          <h1 className='fw-bolder fs-4'>{modelButtonActive}</h1>
          <button 
          onClick={()=> setButtonCloseModel(false)}
          className='change-button'>Change</button>
        </div>
      }
      {buttonClose == false && <div>
        <p className='mt-5'><strong>Finish</strong></p>
        <div className='button-wrapper'>
          {selectedProduct && selectedProduct.map(item => {
            return <button
            key={item.id}
            className={activeButton == item.id ? 'ipad-button-active' : 'ipad-button'}
            onClick={()=> {
              setSelectedVariant(item)
              setActiveButton(item.id)
              setButtonClose(true)
            }}
            >
            <img src={item.colorTag}/>
            {item.color}
            </button>
          })}
        </div>
      </div>}
      {buttonClose == true && 
        <div className='button-close-wrapper-storage'>
          <h1 className='fw-bolder fs-4'>{selectedVariant.color}</h1>
          <button 
          onClick={()=> {
            setButtonClose(false)}
          }
          className='change-button'>Change</button>
        </div>
      }
      {buttonCloseStorage == false && <>
        <p className='fw-bolder'>Storage</p>
        <div className='d-flex flex-wrap'>
        {modelButtonActive.includes('11-inch') && ipadStorage.map(item => {
          return <button 
          onClick={()=>{
            setActiveButtonStorage(item.storage)
            setButtonCloseStorage(true)
            setGetPrice(item.price)
          }}
          className={activeButtonStorage == item.storage ? 'button-storage-active' : 'button-storage'}>    
          <p className='m-0 fw-bolder fs-4'>{item.storage}</p> 
          <p className='m-0'>₱{item.price.toLocaleString()}</p> 
          </button>
        })}
        {modelButtonActive.includes('12.9-inch') && ipadStorage12Inch.map(item => {
          return <button 
          onClick={()=>{
            setActiveButtonStorage(item.storage)
            setButtonCloseStorage(true)
            setGetPrice(item.price)
          }}
          className={activeButtonStorage == item.storage ? 'button-storage-active' : 'button-storage'}>    
          <p className='m-0 fw-bolder fs-4'>{item.storage}</p> 
          <p className='m-0'>₱{item.price.toLocaleString()}</p> 
          </button>
        })}
        </div>
      </>}
      {buttonCloseStorage == true && 
            <div className='button-close-wrapper-storage'>
              <h1 className='fw-bolder fs-4'>{activeButtonStorage}</h1>
              <button 
              onClick={()=> {
                setButtonCloseStorage(false)
              }}
              className='change-button'>Change</button>
            </div>
      }   
      {buttonCloseWifi == false && 
      <>
      <p className='fw-bolder'>Connectivity</p>
      <div className='d-flex'>
        {ipadWifiConnectivity.map(itemWifi => {
          return <button 
          onClick={()=>{
            setActiveButtonWifi(itemWifi.wifi)
            setButtonCloseWifi(true)    
          }}
          className={activeButtonWifi == itemWifi.wifi ? 'button-storage-active' : 'button-storage'}>    
          <p className='m-0 fw-bolder fs-5'>{itemWifi.wifi}</p> 
          {itemWifi.wifi == 'Wi-Fi' ? <p className='m-0'>₱{getPrice.toLocaleString()}</p> : <p className='m-0'>₱{(getPrice + 9000).toLocaleString()}</p>} 
          </button>
        })}
      </div>
      </>
      }
      {buttonCloseWifi == true && 
        <div className='button-close-wrapper-storage'>
          <h1 className='fw-bolder fs-4'>{activeButtonWifi}</h1>
          <button 
          onClick={()=> setButtonCloseWifi(false)}
          className='change-button'>Change</button>
        </div>
      } 
       <p className='fw-bold'>Apple Pencil {params.tag =='ipad-mini' && 'and Smart Folio'}</p>
      {pencilButtonAdded == false && <div className='apple-pencil-wrapper'>
        <button
        onClick={() => setPencilButton(!pencilButton)} 
        className={pencilButton ? 'apple-pencil-button-active' : 'apple-pencil-button'}>
        <p className='fw-bold mt-3'>Apple Pencil</p>
        </button>
        {pencilButton && 
        <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
          <img className='pencil-img'src={applePencil}/>
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
      {pencilButtonAdded == true && 
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
            <img src={pencil}/>
            <div className='d-flex flex-column justify-content-center'>
              <p className='fw-bold'>Apple Pencil (2nd generation)</p>
              <p className='fw-bold'>₱7,990</p>
            </div>
          </div>
        </div>
      }
      {ipadButtonAdded == false && <div className='apple-pencil-wrapper'>
      <button
      onClick={()=> setSmartButton(!smartButton)} 
      className={smartButton ? 'apple-pencil-button-active' : 'apple-pencil-button'}>
      <p className='fw-bold mt-3'>Keyboard</p>
      </button>
      {smartButton &&
      <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
        <img className='pencil-img'src={Keyboard}/>
        <p className='fw-bold mt-3'>Magic Keyboard for iPad Pro 11-inch</p>
        <p className='fw-bold'>₱16,990</p>  
        <p>Color - {smartFolioButton}</p>
        <div className='d-flex'>
          {smartFolioData.map(itemButton => {
            return <button
            onClick={() => {
              setSmartFolioButton(itemButton.color)
              setFolioImg(itemButton)
              }}
            className={smartFolioButton == itemButton.color ? 'smart-folio-button-active' : 'smart-folio-button'}>
              <img src={itemButton.colorImg}/>
            </button>
          })}
        </div>
        <div className='d-flex flex-column'>
        {editButtonClick && <button
          className='remove-button-smart text-start mt-2'
          onClick={() => {
            setEditButtonClick(false)
            handleDeleteKeyboard('path')
            setMagicKeyBoardPrice(0)
          }}
          >Remove</button>}
        <button
        onClick={() => {
          setIpadButtonAdded(true)
          handleKeyboard('path', getFolioImg.colorFolio)
          setEditButtonClick(true)
          setMagicKeyBoardPrice(16990)
          }} 
        className='pencil-button mt-3'>Add</button>
        </div>
        <div className='mt-4'>
          <img className='pencil-img'src={KeyboardSmartImg}/>
          <p className='fw-bold mt-3'>Smart Keyboard Folio for Ipad Pro 11-inch</p>
          <p className='fw-bold'>₱9,990</p>
          <div className='d-flex flex-column'>
            {editButtonClickSmart && <button
            className='remove-button-smart text-start'
            onClick={() => {
              setEditButtonClickSmart(false)
              handleDeleteKeyboard('image')
              setKeyBoardPrice(0)
            }}
            >Remove</button>}  
            <button
            onClick={() => {
              setIpadButtonAdded(true)
              handleKeyboard('image', KeyboardImg)
              setEditButtonClickSmart(true)
              setKeyBoardPrice(9990)
              }} 
            className='pencil-button mt-3'>Add</button>
          </div>
        </div>
      </div>}     
    </div>}
    {ipadButtonAdded == true && 
    <div>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold m-0'>Keyboard</p>
        <button
        onClick={() => {
          setIpadButtonAdded(false)
        }}
        className='edit-button fs-6'>Edit</button>
      </div>
      {getKeyboard.path && <div className=''>
        <div className='d-flex'>
         <img className='p-2' src={getKeyboard.path} alt="" />
         <div className='d-flex flex-column justify-content-center m-2'>
          <p className='mt-2 fw-bold'>Magic Keyboard for iPad Pro 11-inch</p>
          <p className='m-0 fw-bold'>₱16,990</p>
         </div>
        </div>
      </div>}
      {getKeyboard.image && <div>
        <div className='d-flex'>
         <img className='p-2' src={getKeyboard.image} alt="" />
         <div className='d-flex flex-column justify-content-center m-2'>
          <p className='mt-2 fw-bold'>Smart Keyboard Folio for iPad Pro 11-inch</p>
          <p className='m-0 fw-bold'>₱9,990</p>
         </div>
        </div>
      </div>}
    </div>}
    <div className='iphone-footer'>
      <h1><strong>₱.00</strong></h1>
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
  </div>
  )
}

const ipadStorage = [
  {
    storage: '128gb',
    price: 45990
  },
  {
    storage: '256gb',
    price: 51990
  },
  {
    storage: '512gb',
    price: 63990
  },
  {
    storage: '1TB',
    price: 87990
  },
  {
    storage: '2TB',
    price: 111990
  }
]

const ipadStorage12Inch = [
  {
    storage: '128gb',
    price: 62990
  },
  {
    storage: '256gb',
    price: 68990
  },
  {
    storage: '512gb',
    price: 80990
  },
  {
    storage: '1TB',
    price: 104990
  },
  {
    storage: '2TB',
    price: 128990
  }
]
const ipadWifiConnectivity = [
  {
    wifi: 'Wi-Fi',
  },
  {
    wifi: 'Wi-Fi + Cellular',
  }
]

const smartFolioData = [
  {
    color: 'Black',
    colorImg: KeyboardButtonBlack,
    colorFolio: KeyboardBlack
  },
  {
    color: 'White',
    colorImg: KeyboardButtonWhite,
    colorFolio: KeyboardWhite
  },
]
const modelData = [
  {type: '11-inch display', price: 45990},
  {type: '12.9-inch display', price: 62990}
]
export default SmartKeyBoard
