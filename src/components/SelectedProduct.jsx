import { Button } from '@mui/material'
import React , { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import '../styles/SelectedProduct.css'
import { macbookMemory, macbookStorage } from './data/RecomendationsData'


const SelectedProduct = ({selectedProductMacbookPro}) => {

  const [memory, setMemory] = useState('8GB unified memory')
  const [storage, setStorage] = useState('256GB SSD storage')
  const [memoryPrice, setMemoryPrice] = useState(0)
  const [storagePrice, setStoragePrice] = useState(0)
   
  const displayImage = useSelector((state => state.image.image))

  const handleMemory = (item) => {
    setMemory(item.memory)
    setMemoryPrice(item.price)
  }

  const handleStorage = (item) => {
    setStorage(item.storage)
    setStoragePrice(item.price)
  }

  const totalPrice = selectedProductMacbookPro.price + memoryPrice + storagePrice
  console.log(totalPrice)
  return (
    <div className='position-relative'>
    <div className="container">
      <div className="row">
        <div className="position-relative d-flex flex-column align-items-center p-5 col-6">
          <div className='position-sticky top-0'>
            <img className='selected-image'src={displayImage.image} alt="" />
            <div className='mt-5 text-center'>
                <i class="far fa-shipping-fast"></i>
                <p>Free Delivery</p>
            </div>
          </div>
        </div>
        <div className="p-5 col-6">
          <div className='header-selected-item'>
            <h2 className='fw-bolder text-justify w-75'>Customize your {displayImage.inch} {selectedProductMacbookPro.series} - {displayImage.color}</h2>
            {selectedProductMacbookPro.description && selectedProductMacbookPro.description.map(item => {
              return <p className='m-2'>{item}</p>
            })}
          </div>
          <div className='memory-section-selected-item'>
            <p className='fw-bold p-2'>Memory</p>
            {macbookMemory.map(itemMemory => {
              return <button
              onClick={() => handleMemory(itemMemory)}
              className={`${memory == itemMemory.memory ? 'button-macbook-active' : 'button-macbook'} d-flex mb-2`}
              ><p className='fw-bold m-0'>{itemMemory.memory}</p>
               {itemMemory.price > 0 && <p className='fw-bold m-0'>₱{itemMemory.price.toLocaleString()}</p>}
              </button>
            })}
          </div>
          <div className='storage-macbook-selection d-flex flex-column'>
          <p className='fw-bold p-2'>Storage</p>
            {macbookStorage.map(itemStorage => {
              return <button
              onClick={() => handleStorage(itemStorage)}
              className={`${storage == itemStorage.storage ? 'button-macbook-active' : 'button-macbook'} d-flex mb-2`}
              ><p className='fw-bold m-0'>{itemStorage.storage}</p>
              {itemStorage.price > 0 && <p className='fw-bold m-0'>₱{itemStorage.price.toLocaleString()}</p>}
              </button>
            })}
          </div>
        </div>
      </div>
    </div>
    <div className='macbook-footer position-fixed bottom-0'>
      <div className='footer-wrapper-selected'>
        <div className='item-ships'>
          <i class="far fa-shipping-fast"></i>
          <div className='item-ships-desc'>
            <p><strong>Ships:</strong></p>
            <p>1-3 business days</p>
            <p>Free Shipping</p>
          </div>
        </div>
        <h4 className='fw-bold ps-5'>₱{totalPrice.toLocaleString()}</h4>
        <Button variant='contained' className=''>Add to cart</Button> 
      </div>
    </div>
  </div>
  )
}

export default SelectedProduct
