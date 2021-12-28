import React from 'react'
import '../styles/SelectedProduct.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import { setSelectedPhone } from '../redux/selectedProduct'
import { Link } from "react-router-dom";



const SelectedProduct = () => {


  const params = useParams()
  const products = useSelector((state) => {
    return state.product.products
  })

  const dispatch = useDispatch()

  const selectedUrl = useSelector(state => {
    return state.selectedProduct.selectedPhone
  })

  const [selectedProduct , setSelectedProduct] = useState({})
  const [selectedPhone, setSelectedPhoneItem] = useState({})
  const [phonePrice, setPhonePrice] = useState(31990)
  const [getStoragePhone, setGetStoragePhone] = useState('64gb')
  const [phoneColor, setPhoneColor] = useState('purple')



  useEffect(() => {
    products.map(item => {
      if (item.variant && item.variant.length > 0){
        item.variant.map(itemVariant => {
          if(itemVariant.url == params.item){
            setSelectedProduct(itemVariant)
          }
        })
      }      
    }) 
    products.map(item => {
      if (item.searchUrl == params.item){
        setSelectedPhoneItem(item)   
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
            {params.tag.includes('iphone') &&
            <div className='phone-wrapper col-6'>
              <div className='phone-container-color'>
                <h1 className=''><strong>{selectedProduct.header}</strong></h1>
                <p className='mt-5'><strong>Choose your finish</strong></p>
                {selectedPhone.variant && selectedPhone.variant.map(item => {
                  return (
                    <>
                    <Link to={`/product/${params.tag}/6.1-inch-display-${getStoragePhone}-${phoneColor}`}>
                      <button
                      className='phone-color-button'
                      onClick={() => {
                        setSelectedProduct(item)
                        setPhoneColor(item.type)
                      }}        
                      >{item.type}</button>        
                    </Link>
                    </>
                  )
                })}
              </div>
              <div>
                <p className='mt-5'><strong>Choose your capacity.</strong></p>
                {selectedProduct.size && selectedProduct.size.map(item => {
                  return (
                  <>
                    <Link to={`/product/${params.tag}/6.1-inch-display-${getStoragePhone}-${phoneColor}`}>
                      <button
                      className='phone-color-button'
                      onClick={() => {
                        setPhonePrice(item.price)
                        setGetStoragePhone(item.storage)
                      }}
                      >
                      {item.storage}
                      </button>
                    </Link>
                  </>
                  )
                })}
              </div>
              <div className='container-phone-footer mt-3'>
                <h2>₱{phonePrice.toLocaleString()}</h2>
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
            }        
            {params.tag.includes('macbook') && 
            <div className="selected-items-details-second-column col-6">
              <div className='selected-items-details-wrapper'>
                <h3>Customize your {selectedProduct.header} - {selectedProduct.name}</h3>
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
                            { `${(itemSize.fee == 0 ? '' : `₱${itemSize.fee.toLocaleString()}.00`)}` }
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
                          { `${(itemStorage.fee == 0 ? '' : `₱${itemStorage.fee.toLocaleString()}.00`)}` }
                        </span>}</button>
                </div>
              ) 
              })}
            </div>   
          </div>
          }
        </div>  
      </div>
    </div>    
    {params.tag.includes('macbook') && 
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
          <h3 className='p-5'>₱{parseInt(selectedProduct.price + storage + memory).toLocaleString() }.00</h3>
          <Button variant='contained' className=''>Add to cart</Button> 
        </div>
      </div>    
    }
    </>
  )
}


export default SelectedProduct
