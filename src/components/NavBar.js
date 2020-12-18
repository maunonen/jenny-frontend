import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  /* const isLogged = true */
  return (
    <div>
      <Link to="/">home</Link>  

      { isLogged && <Link to="/profile">Profile</Link>}
      { isLogged && <Link to="/add_price">Create Price</Link>}
      { isLogged && <Link to="/show_price_list">My Prices</Link>}
      
      { !isLogged && <Link to="/login">Login</Link> }
      { !isLogged && <Link to="/register">Register</Link> }

  </div>
  )
}

export default NavBar