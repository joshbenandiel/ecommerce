import React , { useState } from 'react'
import "../styles/Promo.css"



const Promo = () => {


  const [activeMenu , setActiveMenu] = useState(false)
  const [value, setValue] = useState("");

  const handleClickMenu = (e) => {
    setActiveMenu(!activeMenu)
    setValue(e.target.value);
    console.log(value);
    console.log(activeMenu);
  }

  return (
    <div className="promos-container pt-5">
      <h1 className="text-white d-flex justify-content-center align-items-center">New Promos</h1>
      <ul className="menu-wrapper  pt-4 d-flex justify-content-center align-items-center">
        <li
        onClick={handleClickMenu} 
        value="1"
        className={value == 1 ? "active-menu-items" : "menu-items"}>Recomendations</li>
        <li 
        onClick={handleClickMenu} 
        value="2"
        className={value == 2 ? "active-menu-items" : "menu-items"}>Mobile</li>
        <li 
        onClick={handleClickMenu} 
        value="3"
        className={value == 3 ? "active-menu-items" : "menu-items"}>Tablets</li>
        <li
        onClick={handleClickMenu} 
        value="4" 
        className={value == 4 ? "active-menu-items" : "menu-items"}>Laptop</li>
        <li
        onClick={handleClickMenu} 
        value="5" 
        className={value == 5 ? "active-menu-items" : "menu-items"}>Watches</li>
      </ul>
    </div>
  )
}

export default Promo
