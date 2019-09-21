import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user.png'

const Header = ({ user }) => {

  const hasUser = Object.keys(user).length > 0

  return (
    <header className="header">
      <Link to="/">
        <img tabIndex="0" className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser 
              ? <img className="header__avatar" src={gravatar(user.email)} alt={user.email} /> 
              : <img src={userIcon} alt="User image" />
          }
          <p>Profile</p>
        </div>
        <ul>
          <li><a href="#">Account</a></li>
          <li>
            <Link to="/login">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Header)