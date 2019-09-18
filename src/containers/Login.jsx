import React from 'react'
import googleIcon from '../assets/static/google.png'
import facebookIcon from '../assets/static/facebook.png'

import '../assets/styles/Login.scss'

const Login = () => (
  <section class="login">
    <div class="login__container">
      <h2 tabindex="0">Log in</h2>
      <form class="login__container--form">
        <input aria-label="Email" class="login__input" name="email" type="text" placeholder="Email" />
        <input aria-label="Password" class="login__input" name="password" type="password" placeholder="Password" />
        <button class="login__button">Log in</button>
        <div class="login__container--remember-me">
          <label>
            <input name="remember" type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot my password</a>
        </div>
      </form>
      <div class="login__container--social-media">
        <div tabindex="0"><img src={googleIcon} alt="Google login" /> Log in with Google</div>
        <div tabindex="0"><img src={facebookIcon} alt="Facebook login" /> Log in with Facebook</div>
      </div>
      <p class="login__container--register">Don't have an account? <a href="/">Register</a></p>
    </div>
  </section>
)

export default Login