import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    NavLink
} from 'react-router-dom'

const Nav = (props) => {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
            Home
            </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/about'>
            About
            </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/contact'>
            Contact
            </NavLink>
      </li>
    </ul>
  )
}

export default Nav
