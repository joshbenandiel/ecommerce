import React , { useEffect, useState , useRef} from 'react'
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
import pencilImage from '../images/Tablets/MU8F2.png'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/product'


const Ipad = ({params,selectedProduct}) => {

  console.log()
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
  const [getPrice, setGetPrice] = useState(29990);
  const [wifiPrice, setWifiPrice] = useState(0)
  const [pencil, setPencil] = useState('')
  const [folio, setFolio] = useState('')
  const [selectedColor, setSelectedColor] = useState({})

  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState(29990)


  const price = wifiPrice + pencilPrice + folioPrice

  const temp = useRef()

  const handleWifiPrice = () => {
    ipadConnectivity.forEach((item) => {
      if(item.id === 2){
        item.price = getPrice + 9000
      } else {
        item.price = getPrice
      }
    })
  }

  temp.current = handleWifiPrice
  useEffect(() => {
    if(price){
      setTotalPrice(price)
    }
  }, [price])

  useEffect(() => {
    temp.current()
    
  }, [buttonCloseStorage])

  useEffect(() => {
    setSelectedColor(selectedProduct[0])
  },[selectedProduct])

  const handleWifiSection = (item) => {
    setActiveButtonWifi(item)
    setButtonCloseWifi(true)
    setWifiPrice(item.price)
  }

  const handleStorageSection = (item) => {
    setActiveButtonStorage(item.storage)
    setButtonCloseStorage(true)
    setGetPrice(item.price)
   
  }
  return (
    <>
    <div>
      <div className='ipad-header'>
        <h1 className='fs-4'>{selectedColor && selectedColor.series}</h1>
        <h1 className='fs-4'>₱{totalPrice.toLocaleString()}</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="img-wrapper-ipad d-flex align-items-center flex-column col-6">
          <div className='img-ipad-sticky'>
            <img src={selectedColor && selectedColor.img} alt='ipad'/>
            <div className='mt-5 text-center'>
              <i className="far fa-shipping-fast"></i>
              <p>Free Delivery</p>
            </div>
          </div>
        </div>
        <div className="details-ipad-wrapper d-flex align-items-start flex-column col-6">   
        <h1><strong>{selectedColor && selectedColor.descriptionHeader}</strong></h1>
        {buttonClose === false && <div>
          <p className='mt-5'><strong>Finish</strong></p>
          <div className='button-wrapper'>
            {selectedProduct && selectedProduct.map(item => {
              return <button
              key={item.id}
              className={activeButton === item.id ? 'ipad-button-active' : 'ipad-button'}
              onClick={()=> {
                setSelectedColor(item)
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
            <h1 className='fw-bolder fs-4'>{selectedColor.color}</h1>
            <button 
            onClick={()=> setButtonClose(false)}
            className='change-button'>Change</button>
          </div>
        }
        
        {buttonCloseStorage === false && <>
          <p className='fw-bolder'>Storage</p>
          <div className='d-flex'>
          {ipadMiniStorage.map((item, index) => {
            return <button 
            key={index}
            onClick={()=>{
              handleStorageSection(item)
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
          {ipadConnectivity.map((itemWifi,index) => {
            return <button 
            key={index}
            onClick={()=>{
              handleWifiSection(itemWifi)
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
        <p className='fw-bold mt-3'>Smart Folio</p>
        </button>
        {smartButton &&
        <div className='pencil-img-wrapper d-flex justify-content-center flex-column'>
        <img className='pencil-img'src={smartFolio} alt='folio'/>
        <p className='fw-bold mt-3'>{folioData.description}</p>
        <p className='fw-bold'>₱{folioData.price.toLocaleString()}</p>
        <p>Color - {smartFolioButton}</p>
        <div className='d-flex'>  
        {smartFolioData.map((itemButton, index) => {
          return <button
          key={index}
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
          setFolio({folio: folioData.description, folioColor: smartFolioButton})
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
            setFolio()
          }}
          className='edit-button fs-6'>Remove</button>
        </div>
        <div className='d-flex folio-wrapper'>
          <img src={getFolioImg.colorFolio} alt='folio'/>
          <div className='d-flex flex-column justify-content-center'>
            <p className='fw-bold'>{getFolioImg.color}</p>
            <p className='fw-bold'>₱{folioData.price.toLocaleString()}</p>
          </div>
        </div>
      </div>} 
      <div className='iphone-footer'>
        <h1><strong>₱{totalPrice.toLocaleString()}</strong></h1>
        <div className='item-ships d-flex mt-5'>
          <i className="far fa-shipping-fast"></i>
          <div className='item-ships-desc'>
            <p className='ms-1 m-0'><strong>Ships:</strong></p>
            <p className='ms-1 m-0'>3-4w business days</p>
            <p className='ms-1 m-0'>Free Shipping</p>
          </div>
        </div>
        <Button
        onClick={()=> {
          dispatch(addCart({
            id: selectedColor.id,
            name: selectedColor.series,
            img: selectedColor.img,
            color: selectedColor.color, 
            size: activeButtonStorage,
            price: totalPrice,
            pencil: pencil,
            folio: folio
          }))
        }}
        variant='contained' className=''>Add to cart</Button>  
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
    id: 1,
    wifi: 'Wi-Fi',
    price: 29990,
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

const folioData = {
  id: 1,
  description: 'Smart Folio for iPad mini',
  price: 3990
}


export default Ipad
