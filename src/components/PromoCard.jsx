import React , { useState , useEffect } from 'react'
import "../styles/PromoCard.css"
import recomendations from "./data/RecomendationsData"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/product';




const PromoCard = ({value}) => {

  const [random, setRandom] = useState(0);
  

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 12) + 1);
  }, [])

  const { products }  = useSelector((state) => state.product) 
  const dispatch = useDispatch()

  return (
    <div className="promo-container">   
      {products.map((item,index)=> {
          if (item.id === random & value === 1) {
            return (            
                <div key={index}>
                  <img className="img" src={item.img}/>
                  <p className="text-white mt-3">{item.name}</p>
                  <h5 className="text-white">{item.series}</h5>
                  <h5 className="text-white">Price</h5>
                  <div 
                    onClick={() => dispatch(addToCart(item))}
                    className="cart-wrapp">
                    <div className="cart-container">     
                      <i style={{paddingLeft: 0}}className="far fa-shopping-cart text-white cart" ></i>
                    </div>  
                  </div>
                </div>         
            )       
          }                        
      })}       
    </div>
  )
}

export default PromoCard
