import React, { useState , useEffect } from 'react'
import "../styles/Slider.css"
import FirstImage from '../images/slider/holiday-snowflake-default-202111.jpg'
import SecondImage from '../images/slider/holiday-snowflake-creativity-202111-2.jpg'
import ThirdImage from '../images/slider/holiday-snowflake-entertainment-202111_GEO_PH.jpg'



const Slider = () => {

  const [activeSlider, setActiveSlider] = useState(1);

  useEffect(() => {
      const intervalID = setTimeout(() =>  {
        if(activeSlider === 3) {
          setActiveSlider(1)
        } else {
          setActiveSlider(activeSlider + 1)
        }
      }, 4000);
      return () => clearInterval(intervalID);
  }, [activeSlider])

  return (
    <>
    <div className='slider-container'>
      <div className='image_wrapper'>
        <div className='slide'>
         <img className={activeSlider === 1 ? 'image_slider_active' : 'image_slider'} src={FirstImage} alt='first-profile'></img>
        </div>
        <div className='slide'>
         <img className={activeSlider === 2 ? 'image_slider_active' : 'image_slider'} src={SecondImage} alt='second-profile'></img>
        </div>
        <div className='slide'>
          <img className={activeSlider === 3 ? 'image_slider_active' : 'image_slider'} src={ThirdImage} alt='third-profile'></img>
        </div>
        <div className='dot-wrapper'>
          <button 
            onClick={() => setActiveSlider(1)} 
            name='first-image' 
            className={activeSlider === 1 ? 'active-dot' : 'dot'}/>
          <button 
            onClick={() => setActiveSlider(2)} 
            name='second-image' 
            className={activeSlider === 2 ? 'active-dot' : 'dot'}/>
          <button 
             onClick={() => setActiveSlider(3)} 
            name='third-image' 
            className={activeSlider === 3 ? 'active-dot' : 'dot'}/>
        </div>
      </div>
    </div>
    </>
  )
 
}

export default Slider
