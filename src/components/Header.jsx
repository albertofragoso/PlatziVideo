import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user.png'

const Header = ({ user, logoutRequest }) => {

  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => logoutRequest({})

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
          <li>
            {
              hasUser
                ? <a href="#logout" onClick={handleLogout}>Log out</a>
                : <Link to="/login">Log in</Link>
            }
          </li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)