import React from 'react'
import '../styles/SelectedProduct.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import Items from './Items';
import Button from '@mui/material/Button';



const SelectedProduct = () => {


  const products = useSelector((state) => {
    return state.product.products
  })

  const [selectedProduct , setSelectedProduct] = useState([])
  console.log(selectedProduct)

  const params = useParams()


  useEffect(() => {
    const selectedItem = []
      products.map(item => {
        if (item.variant && item.variant.length > 0){
          item.variant.map(itemVariant => {
            if(itemVariant.url == params.item){
              selectedItem.push(itemVariant)
            }
          })
        }
      })  
      setSelectedProduct(selectedItem) 
  }, [params])
    

  const [getMemory, setGetMemory] = useState('')
  const [getStorage, setGetStorage] = useState('')

  return (
    <>
    <div className='selected-product-item-container'>
      {selectedProduct.map(item => {
        return (
        <div className="mt-5 container">
          <div className="row">
            <div className="selected-items-details-first-column col-6">
              <img src={item.img} alt="" />
              <a href="" className=''>View Gallery</a>
              <i className="far fa-shipping-fast mt-5 fa-lg"></i>
              <p className='mt-2'>Free Delivery</p>
            </div>
            <div className="selected-items-details-second-column col-6">
              <div className='selected-items-details-wrapper'>
                <h3>Customize your MacBook Air - {item.name}</h3>
                {item.description.map(desc => {
                  return <p>{desc}</p>
                })}   
              </div>
              <div className='selected-items-memory-section m-3'>
                <p><strong>Memory</strong></p>
                {item.size.map(itemSize => {
                  return <button
                  name={itemSize}
                  onClick={(e) => {setGetMemory(e.target.name)}} 
                  className={getMemory == itemSize ? 'selected-items-memory-section-button-active' : 'selected-items-memory-section-button'}>{itemSize}</button>
                })}
              </div>
              <div className='selected-items-storage-section m-3'>
                <p><strong>Storage</strong></p>
                {item.storage.map(itemStorage => {
                  return <button 
                  name={itemStorage}
                  onClick={(e) => {setGetStorage(e.target.name)}} 
                  className={getStorage == itemStorage ? 'selected-items-storage-section-button-active' : 'selected-items-storage-section-button'}>{itemStorage}</button>
                })}
              </div>   
            </div>
            
          </div>  
        </div>
        )
      })}
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
        {selectedProduct.map(itemPrice => {return <h3 className='p-5'>{itemPrice.price}</h3>})}
        <Button variant='contained' className=''>Add to cart</Button> 
      </div>
    </div>
    </>
  )
}

export default SelectedProduct
