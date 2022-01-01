import React from 'react'
import '../styles/ProductPage.css'
import Button from '@mui/material/Button';
import { useState , useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import macbookSpaceGray from '../images/Macbook/macbook-air-space-gray-select-201810.jpg'
import macbookGold from '../images/Macbook/macbook-air-gold-select-201810.jpg'
import macbookSilver from '../images/Macbook/macbook-air-silver-select-201810.jpg'
import ProductCard from './ProductCard'
import ProductCardPro from './ProductCardPro'


const Products = () => {

  const products = useSelector((state) => {
    return state.product.products
  })


  const [macbookHeader , setMacbookHeader] = useState('')
  const [handleProduct, setHandleProduct] = useState({})
  console.log(handleProduct)
  
  

  const dispatch = useDispatch();


  const params = useParams()

  useEffect(() => {
    const macbookItems = []
    products.map((item) => {
      if(item.tag == params.tag) {
        macbookItems.push(item)
        setHandleProduct(macbookItems)
        setMacbookHeader(item.series)
      }
    })   
  }, [params])


  return (
    <div className='products-item-container'>  
      <div className='macbook-header m-5'>
        {macbookHeader == 'Macbook Air' &&
        <>
          <h1>Choose your new {macbookHeader} and select a finish.</h1>
          <h4 className='mt-5 fw-bold'>13-inch {macbookHeader}</h4>
        </>}    
      </div>
        <div className="item-feature">
          {handleProduct.length > 0 && handleProduct.map(item => {       
            return (
              <>
              <ProductCard
                item={item}
                key={item.id}
              />         
              </>
            )
          })} 
        </div>          
      </div>
  )
}








export default Products
