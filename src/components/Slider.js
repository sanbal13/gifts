import React from 'react'

export default function Slider() {
  return (
    <div className="flex">
        <span className="left-arrow">{'<'}</span>
        <img src='./images/slider/img1.jpg' alt='img1' className='slider-image'/>
        <img src='./images/slider/img2.jpg' alt='img2' className='slider-image'/>
        <img src='./images/slider/img3.jpg' alt='img3' className='slider-image'/>
        <img src='./images/slider/img4.jpg' alt='img4' className='slider-image'/>
        <img src='./images/slider/img5.jpg' alt='img5' className='slider-image'/>
        <img src='./images/slider/img6.jpg' alt='img6' className='slider-image'/>

        <span className="right-arrow">{'>'}</span>
        </div>
  )
}
