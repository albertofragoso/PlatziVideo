import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals }) => {
  
  return (
    <main>
      <Search />
      {
        myList.length > 0 &&
        <Categories category="My List">
          <Carousel>
            {
              myList.map(video => 
                <CarouselItem 
                  key={video.id} 
                  { ...video }
                  isList 
                />
              )
            }
          </Carousel>
        </Categories>
      }
      <Categories category="Trends">
        <Carousel>
          {
            trends.map(video => 
              <CarouselItem key={video.id} { ...video } />
            )
          }
        </Carousel>
      </Categories>
      <Categories category="Originals">
        <Carousel>
          {
            originals.map(video => 
              <CarouselItem key={video.id} { ...video } />
            )
          }
        </Carousel>
      </Categories>
    </main>
  )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Home)