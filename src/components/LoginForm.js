import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../action/userAction'


const LoginForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const { error} = useSelector(state => state.user)
  
  const handleLogin = async (event) => {
    event.preventDefault()
      dispatch(login({ username, password}))
      setUsername('')
      setPassword('')
  }
  
  return (
    <div>
    <h1>Login component</h1>
        { error && <h1> { error } </h1> }
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            value={username} 
            name="username" 
            onChange={({target})=> setUsername(target.value)}
          />
          <br/>
          <label htmlFor="password">Password:</label>
          <input 
            type="text" 
            value={password} 
            name="password"
            onChange={({target}) => setPassword(target.value)}
          />
          <br/>
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm