import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {



  const [selectedImg ,setSelectedImg] = useState(item.color[0].img)
  const [selectedColor, setSelectedColor] = useState(item.color[0].id)
  const [selectedColorName, setSelectedColorName] = useState(item.color[0].colorName)
  const [colorUrl, setColorUrl] = useState(item.color[0].selectUrl)
  


  const handleColorClick = (color) => {
    setSelectedImg(color.img)
    setSelectedColor(color.id)
    setSelectedColorName(color.colorName)
    console.log(color)
    setColorUrl(color.selectUrl)
  }

  return (
    <div className='item-feature-wrapper'>
      <div className='item-img'>
        <img className=''src={selectedImg} alt={selectedImg + 'img'}/>
      </div>
      <p>{selectedColorName}</p>
      <div className='d-flex'>
        {item.color && item.color.map(itemColor => {
          return <button      
          onClick={() => handleColorClick(itemColor)}
          name={itemColor.id} 
          id={itemColor.id}
          className={`item-color-button-${itemColor.color}${selectedColor == itemColor.id ? '-active' : ''} m-2
          
          `}/>
        })}
      </div>
      <div>
        <h4 className='mt-5'><strong>{item.descriptionHeader}</strong></h4>
        <div className='mt-4'>
          {item.description.map((desc) => {
            return <p className='item-description'>{desc}</p>
          })}
        </div>
        <Link to={`/product/${item.tag}/${colorUrl}`}>
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
  )
}

export default ProductCard
