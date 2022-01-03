import React , { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "../styles/Promo.css"
import PromoCard from "./PromoCard"
import { getData} from './data/RecomendationsData'


const Promo = () => {

  const [menuIsClick, setMenuIsClick] = useState('Recommendation');
  const [data, setData] = useState([]);

  const menuItem = [
    {item: 'Recommendation'},
    {item: 'Laptop'},
    {item: 'Mobile'},
    {item: 'Tablet'},
  ]

  useEffect(() => {
    
    switch(menuIsClick) {
      case 'Recommendation': {
        return setData(getData.recommendData())
      }
      case 'Laptop': {
        return setData(getData.laptopData())
      }
      case 'Mobile': {
        return setData(getData.mobileData())
      }
      case 'Tablet': {
        return setData(getData.tabletData())
      }
    }

  }, [menuIsClick])

  return (
      <div className="promos-container pt-5">
        <h1 className='text-white'>New Promo</h1>
        <div className='mt-5'>
          <ul className='d-flex'>
            {menuItem.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={()=> setMenuIsClick(item.item)}
                  style={{listStyle: 'none'}}
                  className={`${menuIsClick == item.item ? 'active-menu-items' : 'menu-items'} text-white p-4`} >
                  {item.item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="d-flex">
          { data.map(item => {
            return (
              <div className='d-flex m-4'> 
                <PromoCard
                selectedItem={item}
                />    
              </div>
            )
          })}
        </div>

       
      </div>
      
  )
}

export default Promo
