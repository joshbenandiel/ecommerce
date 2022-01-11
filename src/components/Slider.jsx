import React, { useState , useEffect } from 'react'
import sliderData from "./data/SliderData"
import "../styles/Slider.css"

const Slider = () => {

  const [activeSlider, setActiveSlider] = useState(1);

  useEffect(() => {
      const intervalID = setTimeout(() =>  {
        if(activeSlider === 3) {
          setActiveSlider(1)
        } else {
          setActiveSlider(activeSlider + 1)
        }
      }, 5000);
      return () => clearInterval(intervalID);
  }, [activeSlider])

  return (
    <>
    <div className="slider-container">
      {sliderData.map((item, index)=> {
        if (item.id === activeSlider) {
          return (
            <div key={index}>
              <div className="slider-container d-flex justify-content-center align-items-center">
                <img className="img-size"src={item.img} alt='slider' />
              </div>
            </div>  
          )
        } else {
          return null;
        }
      })}

      <div className="dot-wrapper d-flex justify-content-center">
        {sliderData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveSlider(item.id)}
              className={
              `d-flex justify-content-center align-items-center ${
                activeSlider === item.id 
                  ? "active-dot"
                  : "dot"
                }`
              }>
            </div>
          )         
        })}   
      </div> 
    </div>
    </>
  )
 
}

export default Slider
