import React from 'react'

import '../assets/styles/components/CarouselItem.scss'
import playButton from '../assets/static/play.png'
import plusButton from '../assets/static/plus.png'

const CarouselItem = ({ title, year, duration, cover, contentRating }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div className="carousel-item__details--buttons">
        <img src={playButton} alt="Play" />
        <img src={plusButton} alt="Plus" />
        <p className="carousel-item__title">{title}</p>
        <p className="carousel-item__subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  </div>
)

export default CarouselItem