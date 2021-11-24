import React , { useState , useEffect } from 'react'
import "../styles/PromoCard.css"
import recomendations from "./data/RecomendationsData"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/product';
import { decrement, increment } from '../redux/count';



const PromoCard = ({value,mobileId,tabletId,laptopId,watchId}) => {

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
                  <h5 className="text-white">{item.price} Php</h5>
                  <div
                    onClick={() => {
                      dispatch(addToCart(item))
                      dispatch(increment())
                    }}
                    className="cart-wrapp">
                    <div className="cart-container">     
                      <i style={{paddingLeft: 0}}className="far fa-shopping-cart text-white cart" ></i>
                    </div>  
                  </div>
                </div>         
            )       
          }  else if (item.id === mobileId && value === 2) {
            return (            
              <div key={index}>
                <img className="img" src={item.img}/>
                <p className="text-white mt-3">{item.name}</p>
                <h5 className="text-white">{item.series}</h5>
                <h5 className="text-white">{item.price} Php</h5>
                <div
                  onClick={() => {
                    dispatch(addToCart(item))
                    dispatch(increment())
                  }}
                  className="cart-wrapp">
                  <div className="cart-container">     
                    <i style={{paddingLeft: 0}}className="far fa-shopping-cart text-white cart" ></i>
                  </div>  
                </div>
              </div>  
            )
          } else if (item.id === tabletId && value === 3) {
            return (            
              <div key={index}>
                <img className="img" src={item.img}/>
                <p className="text-white mt-3">{item.name}</p>
                <h5 className="text-white">{item.series}</h5>
                <h5 className="text-white">{item.price} Php</h5>
                <div
                  onClick={() => {
                    dispatch(addToCart(item))
                    dispatch(increment())
                  }}
                  className="cart-wrapp">
                  <div className="cart-container">     
                    <i style={{paddingLeft: 0}}className="far fa-shopping-cart text-white cart" ></i>
                  </div>  
                </div>
              </div>  
            )
          } else if (item.id === laptopId && value === 4) {
            return (            
              <div key={index}>
                <img className="img" src={item.img}/>
                <p className="text-white mt-3">{item.name}</p>
                <h5 className="text-white">{item.series}</h5>
                <h5 className="text-white">{item.price} Php</h5>
                <div
                  onClick={() => {
                    dispatch(addToCart(item))
                    dispatch(increment())
                  }}
                  className="cart-wrapp">
                  <div className="cart-container">     
                    <i style={{paddingLeft: 0}}className="far fa-shopping-cart text-white cart" ></i>
                  </div>  
                </div>
              </div>  
            )
          } else if (item.id === watchId && value === 5) {
            return (            
              <div key={index}>
                <img className="img" src={item.img}/>
                <p className="text-white mt-3">{item.name}</p>
                <h5 className="text-white">{item.series}</h5>
                <h5 className="text-white">{item.price} Php</h5>
                <div
                  onClick={() => {
                    dispatch(addToCart(item))
                    dispatch(increment())
                  }}
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
