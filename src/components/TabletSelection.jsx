import React, { useState, useEffect} from 'react'
import '../styles/TabletSelection.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import IpadAir from './IpadAir'
import Ipad from './Ipad'
import SmartKeyboard from './SmartKeyBoard'
import IpadPro from './IpadPro'




const TabletSelection = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  
  const products = useSelector((state) => {
    return state.product.products
  })

  const params = useParams()

  useEffect(() => {
    const items = []
    products.map(item => {
      if(params.tag === item.tag){
        return items.push(item)
      } else {
        return null;
      }
    })
    setSelectedProduct(items)

  },[params, products])


  return (
    <>
    {params.tag === 'ipad-mini' && 
      <>
      <Ipad   
        selectedProduct={selectedProduct}
        params={params}    
      />
    </>}
    {params.tag === 'ipad' && 
      <>
        <SmartKeyboard
          selectedProduct={selectedProduct}
          params={params}    
      />
    </>}
    {params.tag === 'ipad-air' && 
      <>
        <IpadAir
          selectedProduct={selectedProduct}
          params={params}    
      />
    </>}
    {params.tag === 'ipad-pro' && 
      <>
        <IpadPro
          selectedProduct={selectedProduct}
          params={params}    
      />
    </>}
    </>
  )
}









export default TabletSelection
