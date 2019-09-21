import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logginRequest } from '../actions'
import googleIcon from '../assets/static/google.png'
import facebookIcon from '../assets/static/facebook.png'

import '../assets/styles/Login.scss'

const Login = props => {

  const [form, setForm] = useState({})

  const handleOnChange = e => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = e => {  
    e.preventDefault()
    props.logginRequest(form)
    props.history.push('/')
  }

  return (
    <section className="login">
      <div className="login__container">
        <h2 tabIndex="0">Log in</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input 
            aria-label="Email"
            className="login__input"
            name="email"
            type="text"
            placeholder="Email" 
            onChange={handleOnChange}
          />
          <input
            aria-label="Password"
            className="login__input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
          <button className="login__button">Log in</button>
          <div className="login__container--remember-me">
            <label>
              <input name="remember" type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot my password</a>
          </div>
        </form>
        <div className="login__container--social-media">
          <div tabIndex="0"><img src={googleIcon} alt="Google login" /> Log in with Google</div>
          <div tabIndex="0"><img src={facebookIcon} alt="Facebook login" /> Log in with Facebook</div>
        </div>
        <p className="login__container--register">
          Don't have an account?
          <Link to="/signup">
            Register
          </Link>
        </p>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  logginRequest,
}

export default connect(null, mapDispatchToProps)(Login)