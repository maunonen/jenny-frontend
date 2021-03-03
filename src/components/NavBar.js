import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  return (
    <div>
      <header>
        <div className="navbar menu--color">
          <Link className="navbar__item" to="/">Home</Link>  
          { isLogged && <Link className="navbar__item" to="/profile">Profile</Link>}
          { isLogged && <Link className="navbar__item" to="/show_price_list">My Prices</Link>}
          { isLogged && <Link className="navbar__item" to="/logout">Logout</Link> }
          { !isLogged && <Link className="navbar__item" to="/add_price">Create Price</Link>}
          { !isLogged && <Link className="navbar__item" to="/login">Login</Link> }
          { !isLogged && <Link className="navbar__item" to="/register">Register</Link> }
        </div>
      </header>
  </div>
  )
}

export default NavBar