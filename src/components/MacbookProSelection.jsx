import React , { useState , useEffect}from 'react'
import '../styles/ProductCardPro.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import '../styles/MacbookProSelection.css'
import MacbookCardPro from './MacbookCardPro'


const buttonInch = [
  {type: '13-inch'},
  {type: '14-inch'},
  {type: '16-inch'}
]

const MacbookProSelection = ({macbookProSelectedProduct}) => {


  const [inchIsClick, setInchIsClick] = useState('13-inch')

  const [productResult, setProductResult] = useState([]);
  const [productColors, setProductColors] = useState([]);


  const products = useSelector((state) => {
    return state.product.products
  })

  const params = useParams()

  useEffect(() => {
    const items = [];
    products.map(item => {
      if(item.inch === inchIsClick){
        return items.push(item)
      } else {
        return null;
      }
    });
    if (items.length > 0) {
      setProductColors(items.map((item) => ({
        color: item.color,
        image: item.colorTag
      })))
    }else {
      return null;
    }

    setProductResult(items);

  }, [params, inchIsClick, products])


  


  return (
    <div className='product-pro-container position-relative'>
      <h1 className='fw-bold'>Choose Your New Macbook Pro</h1>
      <div className='button-wrapper-pro d-flex m-4 position-sticky top-0'>
        <div className=''>
          {buttonInch.map((inch, index) => {
            return <button
            key={index}
            onClick={() => setInchIsClick(inch.type)}
            className={`${inchIsClick === inch.type ? 'inch-button-pro-active' : 'inch-button-pro'} fw-bold`}
            ><p className='m-0'>{inch.type}</p>
            </button>
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center container">
        {productResult.map((product, index) => (
          <MacbookCardPro
            key={index}
            product={product}
            inchIsClick={inchIsClick}
            availableColors={productColors}
            macbookProSelectedProduct={macbookProSelectedProduct}
          />
        ))}  
      </div>       
    </div>
  )
}
export default MacbookProSelection
