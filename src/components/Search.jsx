import React from 'react'

import '../assets/styles/components/Search.scss'

const Search = () => (
  <section className="main">
    <h2 className="main__title">What would you like to watch today?</h2>
    <input aria-label="Search" className="main__input" type="text" placeholder="Search..." />
  </section>
)

export default Search