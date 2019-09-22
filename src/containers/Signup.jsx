import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupRequest } from '../actions'

import '../assets/styles/Signup.scss'

const Signup = props => {

  const [form, setForm] = useState({})

  const handleInput = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.signupRequest(form)
    props.history.push('/')
  }

  return (
    <section className="signup">
      <div className="signup__container">
        <h2 tabIndex="0">Sign up</h2>
        <form className="signup__container--form" onSubmit={handleSubmit}>
          <input 
            aria-label="Name"
            className="signup__input"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleInput}
          />
          <input 
            aria-label="Email"
            className="signup__input"
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input 
            aria-label="Password"
            className="signup__input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="signup__button">Sign up</button>
        </form>
        <p className="signup__container--login">
          <Link to="/login">
            Log in
          </Link>
        </p>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  signupRequest
}

export default connect(null, mapDispatchToProps)(Signup)