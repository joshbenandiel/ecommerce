import React from 'react'
import '../styles/SelectedProduct.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'




const SelectedProduct = () => {


  const products = useSelector((state) => {
    return state.product.products
  })
  console.log(products)

  const [selectedProduct , setSelectedProduct] = useState([])
  console.log(selectedProduct)

  const params = useParams()

  useEffect(() => {
      products.map(item => {
        if (item.color && item.color.length > 0) {
          item.color.map(itemColor => {
           if(itemColor.selectUrl == params.item){
              setSelectedProduct(itemColor)
            }
          })
        }
      })

      
    
  }, [params])
    


  return (
    <div className='selected-product-item-container'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default SelectedProduct
