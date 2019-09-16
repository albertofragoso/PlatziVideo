import React from 'react'

import '../assets/styles/components/CarouselItem.scss'
import playButton from '../assets/static/play.png'
import plusButton from '../assets/static/plus.png'

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="People" />
    <div className="carousel-item__details">
      <div className="carousel-item__details--buttons">
        <img src={playButton} alt="Play" />
        <img src={plusButton} alt="Plus" />
        <p className="carousel-item__title">Something</p>
        <p className="carousel-item__subtitle">Something else</p>
      </div>
    </div>
  </div>
)

export default CarouselItem