import React , {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import MacbookAirCard from './MacbookAirCard';


const MacbookSelection = ({macbookProSelectedProduct}) => {

  const [availProducts, setAvailProducts] = useState([])
  const products = useSelector((state) => {
    return state.product.products
  })

  const params = useParams()

  useEffect(() => {
   const items = []
   products.map(item => {
     if(item.tag === params.tag){
       return items.push(item)
     } else {
       return null;
     }
   })
   setAvailProducts(items)
  }, [products, params])

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h2 className='fw-bold w-25 text-center mt-5'>Choose your new Macbook Air and select a finish.</h2>
      <h4 className='fw-bold mt-5'>13-inch Macbook Air</h4>
      <div className='d-flex justify-content-center align-items-center'>
        {availProducts.map((products, index) => {
          return (
            <MacbookAirCard
            key={index}
            products={products}
            macbookProSelectedProduct={macbookProSelectedProduct}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MacbookSelection
