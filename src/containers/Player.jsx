import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import NotFound from './NotFound'

import '../assets/styles/Player.scss'

const Player = props => {
  const { id } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0

  useEffect(() => {
    props.getVideoSource(id)
  }, [])

  return hasPlaying ? (
    <div className="Player">
      <video autoPlay controls>
        <source src={props.playing.source} type="video/mp4"/>
      </video>
      <div className="Player-back">
        <button onClick={() => props.history.goBack()}>
          Back
        </button>
      </div>
    </div>
  ) : <NotFound />
}

const mapStateToProps = state => ({ playing: state.playing })

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)