import React , { useState } from 'react'
import "../styles/PromoCard.css"
import recomendations from "./RecomendationsData"
import mobile from "./MobileData"

const PromoCard = ({value}) => {

  const random = Math.floor(Math.random() * 12) + 1;
  const randomMobile = Math.floor(Math.random() * 3) + 1;
  console.log(randomMobile);
  
  return (
    <div className="promo-container">   
      {recomendations.map((item,index)=> {
          if (item.id === random & value === 1) {
            return (
              <div key={index}>
               <img className="img" src={item.img}/>
               <p className="text-white mt-3">{item.name}</p>
               <h5 className="text-white">{item.series}</h5>
               <h5 className="text-white">Price</h5>
              </div>
              
            )       
          }                        
      })}    
      {mobile.map((itemMobile, index)=> {
         if (itemMobile.id === randomMobile & value === 2 ) {
           return (
            <div key={index}>
              <img className="img" src={itemMobile.img}/>
              <p className="text-white mt-3">{itemMobile.name}</p>
              <h5 className="text-white">{itemMobile.series}</h5>
              <h5 className="text-white">Price</h5>
           </div>

           )
         }
      })}  
        
    </div>
  )
}

export default PromoCard
