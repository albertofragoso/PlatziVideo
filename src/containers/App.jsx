import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'

import '../assets/styles/App.scss'

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories />
  </div>
)

export default App