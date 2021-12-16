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


const Products = () => {

  const products = useSelector((state) => {
    return state.product.products
  })
  const [selectedProduct, setSelectedProduct] = useState({})

  const dispatch = useDispatch();


  const params = useParams()

  useEffect(() => {
    const items = []
    products.map((item) => {
      if(item.tag == params.tag) {
        items.push(item)
        setSelectedProduct(items)
      }
    })   
  }, [params])



  return (
    <div className='products-item-container'>  
      <div className='macbook-header m-5'>
        <h1>Choose your new MacBook Air and select a finish.</h1>
        <h4 className='mt-5 fw-bold'>13-inch MacBook Air</h4>
      </div>
        <div className="item-feature">
          {selectedProduct.length > 0 && selectedProduct.map(item => {
            return (
              <ProductCard
                item={item}
                key={item.id}
              />
            )
          })} 
        </div>       
      </div>
  )
}








export default Products
