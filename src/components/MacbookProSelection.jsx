import React , { useState , useEffect}from 'react'
import '../styles/ProductCardPro.css'
import { useSelector , useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import '../styles/MacbookProSelection.css'
import MacbookCardPro from './MacbookCardPro'
import macbookProSpace13 from '../images/MacbookPro/mbp-spacegray-13.jpg'
import buttonColorIpadSpaceGray from '../images/Tablets/finish-spacegray-201903.png'


const buttonInch = [
  {type: '13-inch'},
  {type: '14-inch'},
  {type: '16-inch'}
]

const MacbookProSelection = () => {


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
      console.log(item.inch)
      if(item.inch == inchIsClick){
        items.push(item)
      }
    });
    if (items.length > 0) {
      setProductColors(items.map((item) => ({
        color: item.color,
        image: item.colorTag
      })))
    }

    console.log(items)
    setProductResult(items);

  }, [params, inchIsClick])


  


  return (
    <div className='product-pro-container'>
      <h1 className='fw-bold'>Choose Your New Macbook Pro</h1>
      <div className='button-wrapper-pro d-flex m-4'>
        {buttonInch.map(inch => {
          return <button
          onClick={() => setInchIsClick(inch.type)}
          className={`${inchIsClick == inch.type ? 'inch-button-pro-active' : 'inch-button-pro'} fw-bold`}
          ><p className='m-0'>{inch.type}</p>
          </button>
        })}
      </div>
      <div className="d-flex justify-content-center container">
        {productResult.map((product, index) => (
          <MacbookCardPro
            key={index}
            product={product}
            inchIsClick={inchIsClick}
            availableColors={productColors}
          />
        ))}  
      </div>       
    </div>
  )
}
export default MacbookProSelection
