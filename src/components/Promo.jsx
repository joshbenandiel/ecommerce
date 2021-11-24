import React , { useState } from 'react'
import "../styles/Promo.css"
import PromoCard from "./PromoCard"

const Promo = () => {



  const [value, setValue] = useState(1);

  const handleClickMenu = (e) => {
    setValue(e.target.value);
  }

  return (
      <div className="promos-container pt-5">
        <h1 className="text-white d-flex justify-content-center align-items-center">New Promos</h1>
        <ul className="menu-wrapper  pt-4 d-flex justify-content-center align-items-center">
          <li
          onClick={handleClickMenu} 
          value="1"
          className={value === 1 ? "active-menu-items" : "menu-items"}>Recomendations</li>
          <li 
          onClick={handleClickMenu} 
          value="2"
          className={value === 2 ? "active-menu-items" : "menu-items"}>Mobile</li>
          <li 
          onClick={handleClickMenu} 
          value="3"
          className={value === 3 ? "active-menu-items" : "menu-items"}>Tablets</li>
          <li
          onClick={handleClickMenu} 
          value="4" 
          className={value === 4 ? "active-menu-items" : "menu-items"}>Laptop</li>
          <li
          onClick={handleClickMenu} 
          value="5" 
          className={value === 5 ? "active-menu-items" : "menu-items"}>Watches</li>
        </ul>
        <div className="d-flex justify-content-center align-items-center">
          <PromoCard
          mobileId={4}
          tabletId={7}
          laptopId={1}
          watchId={10}
          value={value}
          />
          <PromoCard
          mobileId={5}
          tabletId={8}
          laptopId={2}
          watchId={11}
          value={value}
          />
          <PromoCard
          mobileId={6}
          tabletId={9}
          laptopId={3}
          watchId={12}
          value={value}
          />
        </div>
        
      </div>
      
    
  )
}

export default Promo
