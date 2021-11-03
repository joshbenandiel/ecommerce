import React, { useState , useEffect } from 'react'
import sliderData from "./SliderData"
import "../styles/Slider.css"

const Slider = () => {

  const [activeSlider, setActiveSlider] = useState(sliderData[0].id);
  

  const handleNextClick = () => {
    const current = sliderData.find((item) => item.id == activeSlider);
    
    if (current.id == 5) {
      setActiveSlider(1)
    } else {
      setActiveSlider(current.id + 1);
    }
  }

  const handlePrevClick = () => {
    const current = sliderData.find((item) => item.id == activeSlider);
    
    if (current.id == 1) {
      setActiveSlider(5)
    } else {
      setActiveSlider(current.id - 1);
    }
  }

  return (
    <div className="slider-container">
      {sliderData.map((item, index)=> {
        if (item.id == activeSlider) {
          return (
            <div key={index}>
              <div className="slider-container d-flex justify-content-center align-items-center">
                <img className="img-size"src={item.img} />
              </div>
            </div>  
          )
        }
      })}

      <div className="dot-wrapper d-flex justify-content-between">
        {sliderData.map((item, index) => {
          return (
            <div
              onClick={() => setActiveSlider(item.id)}
              className={
              `d-flex justify-content-center align-items-center ${
                activeSlider == item.id 
                  ? "active-dot"
                  : "dot"
                }`
              }>
            </div>
          )         
        })}   
      </div>
      <div className="arrow-wrapper">
        <div>
          <i
            onClick={handlePrevClick} 
            className="fal fa-arrow-circle-left"></i>
        </div>
        <i
          onClick={handleNextClick} 
          className="fal fa-arrow-circle-right"></i>
      </div>
    </div>
  )
}

export default Slider
