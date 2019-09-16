import React from 'react'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user.png'

const Header = () => (
  <header className="header">
    <img tabIndex="0" className="header__img" src={logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User image" />
        <p>Profile</p>
      </div>
      <ul>
        <li><a href="#">Account</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  </header>
)

export default Header