import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/Signup.scss'

const Signup = () => (
  <section class="signup">
    <div class="signup__container">
      <h2 tabIndex="0">Sign up</h2>
      <form class="signup__container--form">
        <input aria-label="Name" class="signup__input" name="name" type="text" placeholder="Name" />
        <input aria-label="Email" class="signup__input" name="email" type="text" placeholder="Email" />
        <input aria-label="Password" class="signup__input" name="password" type="password" placeholder="Password" />
        <button class="signup__button">Sign up</button>
      </form>
      <p class="signup__container--login">
        <Link to="/login">
          Log in
        </Link>
      </p>
    </div>
  </section>
)

export default Signup