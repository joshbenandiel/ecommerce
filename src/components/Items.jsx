import React from 'react'
import macbook from '../images/macbookPro.jpg'
import iphone13 from '../images/iphone13-items.jpg'
import '../styles/Items.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Items = () => {
  return (
    <div className="items-wrapper">
      <div className="items-container d-flex justify-content-center align-items-center">
        <h2 className='mt-5'>MacBook Pro</h2>
        <img className='mb-5'src={macbook} alt="macbookPro"></img>
        <h1 className='mt-5'>Supercharged for pros.</h1>
        <p>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
        <Link to='/product/buy/macbook-pro' style={{textDecoration: 'none'}}>
          <Button className='mb-5' size='large' variant="outlined">BUY NOW</Button>    
       </Link>
      </div>
      <div className='iphone-container mt-5'>
        <h2 className='mb-5'>Iphone 13 Pro</h2>
        <img className='img-phone mt-5' src={iphone13} alt="iphone13" />
      </div>
      <div className="phone-wrap">
       <p className="img-phone-paragraph mt-5 mb-5">A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest        smartphone chip. Exceptional durability. And a huge leap in battery life.</p> 
       <Link to='/product/buy/iphone-13' style={{textDecoration: 'none'}}>
        <Button className='mb-5' size='large' variant="outlined">BUY NOW</Button>    
       </Link>
      </div>
      
    </div>
  )
}

export default Items
