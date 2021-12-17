import React from 'react'
import Button from '@mui/material/Button';
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {

  const [variantUrl, setVariantUrl] = useState(item.variant[0].url)
  const [selectedVariant, setSelectedVariant] = useState(item.variant[0]);
  const [active, setActive] = useState('')


  return (
    <>
    <div className='item-feature-wrapper'>
      <div className='item-img'>
        <img className='' src={selectedVariant.img} alt='item-img'/>
      </div>
      <p>{selectedVariant.name}</p>
      <div className='d-flex'>
        {item.variant.length > 0 && item.variant.map(variant => {
          return <button
          onClick={(e) => {
            console.log(e)
            setActive(e.target.name)
            setSelectedVariant(variant) 
            setVariantUrl(variant.url)
          }}
          name={variant.key}
          className={active == variant.key ? `item-color-button-${variant.type}-active m-2` :`item-color-button-${variant.type} m-2` }/>
        })}
         
      </div>
      <div>
        <h4 className='mt-5'><strong>{item.descriptionHeader}</strong></h4>
        <div className='mt-4'>
          {item.description.map((desc) => {
            return <p className='item-description'>{desc}</p>
          })}
        </div>
        <Link to={`/product/${item.tag}/${variantUrl}`}>
          <Button variant='contained' fullWidth>Select</Button>
        </Link>
      </div>
      <div className='item-ships'>
        <i class="far fa-shipping-fast"></i>
        <div className='item-ships-desc'>
          <p><strong>Ships:</strong></p>
          <p>1-3 business days</p>
          <p>Free Shipping</p>
        </div>
      </div> 
    </div>
  </>
  )
}

export default ProductCard
