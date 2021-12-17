import React from 'react'
import '../styles/SelectedProduct.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import Button from '@mui/material/Button';



const SelectedProduct = () => {


  const params = useParams()
  const products = useSelector((state) => {
    return state.product.products
  })

  const [selectedProduct , setSelectedProduct] = useState({})
  console.log(selectedProduct)



  useEffect(() => {
    products.map(item => {
      if (item.variant && item.variant.length > 0){
        item.variant.map(itemVariant => {
          if(itemVariant.url == params.item){
            console.log({ itemVariant })
            setSelectedProduct(itemVariant)
          }
        })
      }
    })  
  }, [params])
    

  const [getMemory, setGetMemory] = useState('8GB unified storage')
  const [getStorage, setGetStorage] = useState('256GB SSD Storage')
  const [getFee, setFee] = useState('')
  const [getFeeStorage, setFeeStorage] = useState('')
  
  const [total, setTotal] = useState(0)

  const [storage, setStorage] = useState(0)
  const [memory, setMemory] = useState(0)


  useEffect(() => {
   setTotal(selectedProduct.price);
   
  }, [selectedProduct])



  return (
    <>
    <div className='selected-product-item-container'>
      <div className="mt-5 container">
        <div className="row">
          <div className="selected-items-details-first-column col-6">
            <img src={selectedProduct.img} alt="" />
            <a href="" className=''>View Gallery</a>
            <i className="far fa-shipping-fast mt-5 fa-lg"></i>
            <p className='mt-2'>Free Delivery</p>
          </div>
          <div className="selected-items-details-second-column col-6">
            <div className='selected-items-details-wrapper'>
              <h3>Customize your MacBook Air - {selectedProduct.name}</h3>
              {selectedProduct.description && selectedProduct.description.map(desc => {
                return <p>{desc}</p>
              })}   
            </div>
            <div className='selected-items-memory-section m-3'>
              <p><strong>Memory</strong></p>
              {selectedProduct.size && selectedProduct.size.map(itemSize => {
                return(
                  <div className='selected-items-button-wrapper'>
                    <button
                      name={itemSize.memory}
                      id={itemSize.fee}
                      onClick={(e) => {
                        setGetMemory(e.target.name)
                        setMemory(itemSize.fee)

                      }} 
                      className={getMemory == itemSize.memory ? 'selected-items-memory-section-button-active' : 'selected-items-memory-section-button'}>
                      {itemSize.memory}
                      {getMemory == itemSize.memory 
                        ? null 
                        : <span className='item-memory-fee'>
                            { `${(itemSize.fee == 0 ? '' : `₱${itemSize.fee.toLocaleString()}`)}` }
                          </span>
                        }
                    </button>
                  </div>
                ) 
              })}
            </div>
            <div className='selected-items-storage-section m-3'>
              <p><strong>Storage</strong></p>
              {selectedProduct.storage && selectedProduct.storage.map(itemStorage => {
                return (
                <div className='selected-items-button-wrapper'>
                  <button 
                    name={itemStorage.storage}
                    onClick={(e) => {
                      setGetStorage(e.target.name)
                      setStorage(itemStorage.fee)
                    }} 
                    className={getStorage == itemStorage.storage 
                    ? 'selected-items-storage-section-button-active' 
                    : 'selected-items-storage-section-button'}>
                      {itemStorage.storage}{getStorage == itemStorage.storage 
                      ? null 
                      : <span className='item-memory-fee'>
                          { `${(itemStorage.fee == 0 ? '' : `₱${itemStorage.fee.toLocaleString()}`)}` }
                        </span>}</button>
                </div>
              ) 
              })}
            </div>   
          </div>
          
        </div>  
      </div>
    </div>

    <div className='selected-items-footer'>
      <div className='selected-items-footer-wrapper'>
        <div className='item-ships'>
          <i class="far fa-shipping-fast"></i>
          <div className='item-ships-desc'>
            <p><strong>Ships:</strong></p>
            <p>1-3 business days</p>
            <p>Free Shipping</p>
          </div>
        </div>
       
        <h3 className='p-5'>₱{parseInt(selectedProduct.price + storage + memory).toLocaleString() }</h3>
     
        <Button variant='contained' className=''>Add to cart</Button> 
      </div>
    </div>
    </>
  )
}

export default SelectedProduct
