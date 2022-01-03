import React , {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { macbookPhotos } from './data/RecomendationsData';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import { setDisplayItem } from '../redux/ImageForMacbook';



const MacbookCardPro = ({ product, availableColors, inchIsClick , macbookProSelectedProduct }) => {

  const [selectedVariant, setSelectedVariant] = useState({});
  const [buttonColorClick, setButtonColorClick] = useState('');
  

  const products = useSelector((state) => state.product.products)
  const [displayImage, setDisplayImage] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setButtonColorClick('Space Gray');
  }, []);

  useEffect(() => {
    let image = {};
    macbookPhotos.find((itemPic => {
      if(itemPic.inch == inchIsClick && itemPic.color == buttonColorClick){
        image = itemPic
        return;
      } 
    }));
    setDisplayImage(image)
    dispatch(setDisplayItem(image))

  }, [buttonColorClick, inchIsClick]);

  useEffect(() => {  
    setButtonColorClick('Space Gray')
  }, [inchIsClick])


  const handleButtonColor = (item) => {
    setButtonColorClick(item.color)
  }

  return (
    <div className='card-wrapper-pro mx-5'>
      <div className='mt-5'>
        <img className='image-pro'src={displayImage.image} alt="" />
        <p>{displayImage.color}</p>
        <div className='d-flex'>
          {availableColors.map((item) => {
            const { color, image } = item;
            return (
              <button 
                onClick={()=> handleButtonColor(item)}
                className={buttonColorClick == color ? 'button-color-pro-active' : 'button-color-pro' }>
                <img 
                  className='button-circle-color-pro'
                  src={image}
                  alt="" />
              </button>
            )})}
        </div>
      </div>
      <div>
        <p className='mt-3 m-1' style={{color: 'red'}}>{product.icon}</p>
        <img src={product.iconImg} alt="" />
        <h4 className='fw-bold mt-4 mb-4'>{product.header}</h4>
        {product.description && product.description.map(item => {
          return <p>{item}</p>
        })}
        <Link to={`/product/buy/${product.tag}/${product.inch}/${product.id}`}>
          <Button
          onClick={() => macbookProSelectedProduct(product)} 
          variant='contained' fullWidth>Select</Button>
        </Link>
      </div>
      <div className='item-ships d-flex mt-5'>
        <i class="far fa-shipping-fast"></i>
        <div className='item-ships-desc'>
          <p className='ms-1 m-0'><strong>Ships:</strong></p>
          <p className='ms-1 m-0'>3-4w business days</p>
          <p className='ms-1 m-0'>Free Shipping</p>
        </div>
      </div>
    </div>
  )
}

export default MacbookCardPro
