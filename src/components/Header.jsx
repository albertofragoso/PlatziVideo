import React from 'react'

import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <img tabIndex="0" className="header__img" src="./logo.png" alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="./user.png" alt="User image" />
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