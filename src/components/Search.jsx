import React from 'react'
import { connect } from 'react-redux'
import { searchVideos } from '../actions'

import '../assets/styles/components/Search.scss'

const Search = props => {

  const handleSearch = e => {
    const { value } = e.target
    if(value) {
      const search = item => item.title.toLowerCase().includes(value.toLowerCase())
      const filtered = props.trends.filter(search).concat(props.originals.filter(search))
      props.searchVideos(filtered)
    } else {
      props.searchVideos(null)
    }
  } 

  return (
    <section className="main">
      <h2 className="main__title">What would you like to watch today?</h2>
      <input
        aria-label="Search"
        className="main__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </section>
  )
}

const mapStateToProps = state => ({ trends: state.trends, originals: state.originals })

const mapDispatchToProps = {
  searchVideos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)