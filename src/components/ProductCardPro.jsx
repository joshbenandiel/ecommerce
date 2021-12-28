import React , { useState , useEffect}from 'react'
import '../styles/ProductCardPro.css'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import product from '../redux/product';
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { setGetInches } from '../redux/inches'

const ProductPagePro = () => {

  const products = useSelector((state) => {
    return state.product.products
  })

  

  // const [getInch, setGetInch] = useState('13-inch')
  const [selectedInch, setSelectedInch] = useState([])
  const [active, setActive] = useState(false)


  const params = useParams()
  
  const dispatch = useDispatch()

  useEffect(() => {
    const selectedItems = []
    products.map(item => {
        if(item.inch == params.inch){
          selectedItems.push(item)
        }
      })
      setSelectedInch(selectedItems)
  }, [params.inch])



  return (
    <div className='product-pro-container'>
      <div className='macbook-pro-header mt-5'>
        <h1>Choose your new MacBook Pro.</h1> 

      </div>
      <div className='macbook-pro-button-inch mt-5'>
      {buttonInch.map(item => {
        return (
          <Link
          key={item.inch} 
          to={`/product/${params.tag}/${item.inch}/item`}>
            <button
            name={item.inch}
            className={params.inch == item.inch? 'button-inches-active' : 'button-inches'}
            >{item.inch}</button>
          </Link>
        )
      })}
      </div>
      <div className='d-flex'> 
      {selectedInch.length > 0 && selectedInch.map(item => {       
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

const buttonInch = [
  {
    inch: '13-inch'
  },
  {
    inch: '14-inch'
  },
  {
    inch: '16-inch'
  },
  
]

export default ProductPagePro
