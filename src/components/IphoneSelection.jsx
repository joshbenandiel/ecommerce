import React, { useState, useEffect} from 'react'
import '../styles/IphoneSelection.css'
import { useSelector , useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TabletSelection from './TabletSelection'
import MacbookSelection  from './MacbookSelection';
import MacbookProSelection  from './MacbookProSelection';
import { addCart } from '../redux/product';


const IphoneSelection = ({macbookProSelectedProduct}) => {
  const params = useParams()
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
  const storage128 = selectedVariant.price  + 3000;
  const storageIphone256 = selectedVariant.price  + 6000;
  const storage256 = selectedVariant.price  + 9000;
  const storageIphone512 = selectedVariant.price  + 18000;
  const storageTb = selectedVariant.price + 31000
  const [getSize, setGetSize] = useState('')
  const products = useSelector((state) => {
    return state.product.products
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const items = []
    products.forEach(item => {
      if(params.tag === item.tag)
      items.push(item)
    })
    setSelectedProduct(items)
    setSelectedVariant(items[0])
    setPrice(items[0].price)
    setHeader(items[0].descriptionHeader)
  }, [params, products])


  
  return (
    <>
    {params.tag.includes('iphone') && <div className='iphone-container-select container'>
      <div className="row">
        <div className="image-container col-6">
          <div className='image-container-sticky'>
            <img className={buttonIphone12 ? 'image-iphone-12' : null}src={selectedVariant.img} alt='main'></img>
            <div className='mt-5 text-center'>
              <i className="far fa-shipping-fast"></i>
              <p>Free Delivery</p>
            </div>
          </div>
        </div>
        <div className="details-container col-6">
         <h1 className='mt-5'><strong>{header}</strong></h1>
          {(params.tag === 'iphone-12' || params.tag === 'iphone-13') && 
            <>
            <p><strong>Choose your model.</strong></p>
            <button 
            onClick={(e) => {
              setButtonIphoneMini(!buttonIphoneMini)
              setButtonIphone12(false)
              console.log(e.target.innerText)
            }}
            className={buttonIphoneMini ? 'iphone-12-button-active' : 'iphone-12-button'}><p className='fw-bold m-0'>{params.tag === 'iphone-13' ? 'Iphone 13' : 'Iphone 12 mini'}</p><p className='m-0'>{params.tag === 'iphone-13' ? '6.1-inch display' : '5.4-inch display'}</p></button>
            <button
            onClick={(e) => {
              setButtonIphone12(!buttonIphone12)
              setButtonIphoneMini(false)
            }} 
            className={buttonIphone12 ? 'iphone-12-button-active' : 'iphone-12-button'} ><p className='fw-bold m-0'>{params.tag === 'iphone-13' ? 'Iphone 13 Pro Max' : 'Iphone 12'}</p><p className='m-0'>{params.tag === 'iphone-13' ? '6.7-inch display' : '6.1-inch display'}</p></button>
            </>
          }    
          <p><strong>Choose your finish.</strong></p>
          <div className='button-wrapper-iphone'>
            {selectedProduct.map((item, index) => {
              if (item.size === '64gb'){
                return <button
                key={index}
                className={selectedVariant.color === item.color ? 'button-iphone-active' : 'button-iphone'}
                onClick={()=> setSelectedVariant(item) }
                ><img className='button-circle-color'src={item.colorTag} alt='button'/>{item.color}</button>
              } else {
                return null;
              }
            })}
         </div>
         <p><strong>Choose your capacity.</strong></p>
         <div className='storage-button-wrapper'>
          <button 
          className={storageIsClick ? 'storage-iphone-button-active' :'storage-iphone-button'}
          onClick={(e) => {
            setPrice(selectedVariant.price)
            setStorageIsClick(!storageIsClick)
            setStorageIsClickSecond(false)
            setStorageIsClickThird(false)
            setStorageIsClickFourth(false)
            setGetSize(e.target.innerText)
          }}><h3 className='fw-bold'>{params.tag === 'iphone-13' ? '128GB' : '64GB'}</h3><p className='button-price'>₱{selectedVariant.price && selectedVariant.price.toLocaleString()}.00</p></button>
          <button 
          className={storageIsClickSecond ? 'storage-iphone-button-active' :'storage-iphone-button'}
          onClick={(e) => {
            if (params.tag === 'iphone-13') {
              setPrice(selectedVariant.price + 6000)
            } else {
              setPrice(selectedVariant.price + 3000)
            }   
            setStorageIsClickSecond(!storageIsClickSecond)
            setStorageIsClick(false)
            setStorageIsClickThird(false)
            setStorageIsClickFourth(false)
            setGetSize(e.target.innerText)
          }}><h3 className='fw-bold'>{params.tag === 'iphone-13' ? '256GB' : '128GB'}</h3><p className='button-price'>₱
          {params.tag ==='iphone-13' ? storageIphone256.toLocaleString() : storage128.toLocaleString()}.00</p>
          </button>
          {(params.tag === 'iphone-12' || params.tag === 'iphone-13') && 
           <button 
           className={storageIsClickThird ? 'storage-iphone-button-active' :'storage-iphone-button'}
           onClick={(e) => {
            if (params.tag === 'iphone-13') {
              setPrice(selectedVariant.price + 18000)
            } else {
              setPrice(selectedVariant.price + 9000)
            } 
             setStorageIsClickThird(!storageIsClickThird)
             setStorageIsClick(false)
             setStorageIsClickSecond(false)
             setStorageIsClickFourth(false)
             setGetSize(e.target.innerText)
           }}><h3><strong>{params.tag === 'iphone-13' ? '512GB' : '256GB'}</strong></h3><p className='button-price'>₱{params.tag === 'iphone-13' ? storageIphone512.toLocaleString() : storage256.toLocaleString()}.00</p></button>
          }
          {params.tag === 'iphone-13' && 
           <button 
           className={storageIsClickFourth ? 'storage-iphone-button-active' :'storage-iphone-button'}
           onClick={(e) => {
             setPrice(selectedVariant.price + 31000)
             setStorageIsClickFourth(!storageIsClickFourth)
             setStorageIsClick(false)
             setStorageIsClickSecond(false)
             setStorageIsClickThird(false)
             setGetSize(e.target.innerText)
           }}><h3><strong>1TB</strong></h3><p className='button-price'>₱{storageTb.toLocaleString()}.00</p></button>
          }
         </div>
         <div className='iphone-footer'>
          <h1><strong>₱{price.toLocaleString()}.00</strong></h1>
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
                id: selectedVariant.id,
                name: selectedVariant.series,
                img: selectedVariant.img,
                color: selectedVariant.color,
                size: getSize,
                price: price
              }))
            }}
            variant='contained'>Add to bag</Button>  
         </div>
        </div>
      </div>
    </div>
    }
    {params.tag.includes('ipad') && 
      <>
        <TabletSelection/>
      </>
    }
    {params.tag === 'macbook-air' && 
      <>
        <MacbookSelection
        macbookProSelectedProduct={macbookProSelectedProduct}
        />
      </>
    }
    {params.tag === 'macbook-pro' && 
      <>
        <MacbookProSelection
        macbookProSelectedProduct={macbookProSelectedProduct}
        />   
      </>
    }
    </>
  )
}

export default IphoneSelection
