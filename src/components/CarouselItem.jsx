import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFavorite, removeFavorite } from '../actions'
import PropTypes from 'prop-types'

import '../assets/styles/components/CarouselItem.scss'
import playButton from '../assets/static/play.png'
import plusButton from '../assets/static/plus.png'
import removeButton from '../assets/static/remove.png'

const CarouselItem = ({ id, title, year, duration, cover, contentRating, isList, setFavorite, removeFavorite }) => {

  const handleSetFavorite = () => {
    setFavorite({
      id, title, year, duration, cover, contentRating
    })
  }

  const handleRemoveFavorite = id => {
    removeFavorite(id)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--buttons">
          <Link to={`/${id}/player`}>
            <img src={playButton} alt="Play" />
          </Link>
          { isList 
            ? <img 
                src={removeButton} 
                alt="Remove" 
                onClick={() => handleRemoveFavorite(id)}
              /> 
            : <img 
                src={plusButton} 
                alt="Plus" 
                onClick={handleSetFavorite}
              />
          }
          <p className="carousel-item__title">{title}</p>
          <p className="carousel-item__subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  cover: PropTypes.string,
  contentRating: PropTypes.string
}

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)