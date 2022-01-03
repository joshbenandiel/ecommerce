import React from 'react'
import '../styles/Footer.css'
import original from '../images/brandNew.png'

const Footer = () => {
  return (
    <div className='footer-containers'>
      <div className="wrapper">
        <div className="container container-wrap">
          <div className="row">
            <div className="col-3 footer-text">
              <p className="footer-head">GADGETS</p>
              <a href="/">Mobile</a>
              <a href="/">Laptop</a>
              <a href="/">Tablet</a>
              <a href="/">Watch</a>
            </div>
            <div className="col-3 footer-text">
              <p className="footer-head">CUSTOMER SERVICE</p>
              <a href="/">Return and Exchange</a>
              <a href="/">Order Cancellations</a>
              <a href="/">Product Warranty</a>
              <a href="/">FAQs</a>
              <a href="/">Store Locations</a>
              <a href="/">Contact Us</a>
            </div>
            <div className="col-3 footer-text">
              <p className="footer-head">FOLLOW US</p>
              <a href="/">Facebook</a>
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
              
            </div>
            <div className="col-3 footer-text">
              <img className="footer-img"src={original} alt="brand-new-img"></img>
            </div>
          </div>
        </div>
        <div className="footer-last">
          <p className="footer-copyright">© 2021-2022 by Joshua Jacinto</p>
          <p className="footer-card text-white">We Accept</p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
