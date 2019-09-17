import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {

  const videos = useInitialState(API)

  if(!videos) return <h1>Loading...</h1>
  
  return (
    <>
      <Header />
      <main>
        <Search />
        {
          videos.mylist.length > 0 &&
          <Categories category="My List">
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        }
        <Categories category="Trends">
          <Carousel>
            {
              videos.trends.map(video => 
                <CarouselItem key={video.id} { ...video } />
              )
            }
          </Carousel>
        </Categories>
        <Categories category="Originals">
          <Carousel>
            {
              videos.originals.map(video => 
                <CarouselItem key={video.id} { ...video } />
              )
            }
          </Carousel>
        </Categories>
      </main>
      <Footer />
    </>
  )
}

export default App