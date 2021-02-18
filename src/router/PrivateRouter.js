import React from 'react'
import {Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PrivateRoute = ({ component : Component, ...rest}) => {
  
  const isLogged = useSelector(state => state.user.isLogged)
  return (
    <Route {...rest} render = { (props) => isLogged ? ( <Component {...props}/> ) 
        : ( <Redirect to = {{
                pathname : "/login", 
                state : props.location
              }} 
            />
          )
        } 
      />
  )
}


export default PrivateRoute