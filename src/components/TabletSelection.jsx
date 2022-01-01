import React, { useState, useEffect} from 'react'
import '../styles/TabletSelection.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import IpadAir from './IpadAir'
import Ipad from './Ipad'
import SmartKeyboard from './SmartKeyBoard'
import IpadPro from './IpadPro'




const TabletSelection = () => {
  const [selectedVariant, setSelectedVariant] = useState({})
  const [selectedProduct, setSelectedProduct] = useState([])
  
  const products = useSelector((state) => {
    return state.product.products
  })

  const params = useParams()

  useEffect(() => {
    const items = []
    products.map(item => {
      if(params.tag == item.tag)
      items.push(item)
    })
    setSelectedProduct(items)
    setSelectedVariant(items[0])
    console.log(selectedVariant)

  },[params])


  return (
    <>
    {params.tag == 'ipad-mini' && 
      <>
      <Ipad   
        selectedVariant={selectedVariant} 
        setSelectedVariant={setSelectedVariant}
        selectedProduct={selectedProduct}
        params={params}    
      />
    </>}
    {params.tag == 'ipad' && 
      <>
        <SmartKeyboard
        selectedVariant={selectedVariant} 
        setSelectedVariant={setSelectedVariant}
        selectedProduct={selectedProduct}
        params={params}    
      />
    </>}
    {params.tag == 'ipad-air' && 
      <>
        <IpadAir
        selectedVariant={selectedVariant} 
        setSelectedVariant={setSelectedVariant}
        selectedProduct={selectedProduct}
        params={params}    
      />
    </>}
    {params.tag == 'ipad-pro' && 
      <>
        <IpadPro
        selectedVariant={selectedVariant} 
        setSelectedVariant={setSelectedVariant}
        selectedProduct={selectedProduct}
        params={params}    
      />
    </>}
    </>
  )
}









export default TabletSelection
