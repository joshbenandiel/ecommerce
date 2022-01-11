import React from 'react'
import '../styles/PromoCard.css'
import { Link } from 'react-router-dom';

const PromoCard = ({selectedItem}) => {



  return (
    <div className='promo-card-container mt-5 position-relative'>
      <div className=''>
        <img className='promo-item-image 'src={selectedItem.image} alt='promo-item' />
        <h4 className='promo-item-name mt-4 fw-bold'>{selectedItem.name}</h4>
        <h4 className='promo-item-name mt-4'>₱{selectedItem.price.toLocaleString()}</h4>
        <Link to={`/product/buy/${selectedItem.tag}`}>
          <div className='promo-card-button'>
          <i className="far fa-eye"></i>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PromoCard
