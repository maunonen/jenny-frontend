import React, {useState, useEffect} from 'react'
import appService from '../services/APIServices'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../action/userAction'


const RegistrationForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const { error} = useSelector(state => state.user)
  
  const handleRegistration = async (event) => {
    event.preventDefault()
      dispatch(register({ username, password}))
      setUsername('')
      setPassword('')
      setEmail('')
      setName('')
  }


  
  return (
    <div>
    <h1>Registration Form</h1>
        { error && <h1> { error } </h1> }
        <form onSubmit={handleRegistration}>
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
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            value={name} 
            name="namr"
            onChange={({target}) => setName(target.value)}
          />
          <br/>
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            value={email} 
            name="email"
            onChange={({target}) => setEmail(target.value)}
          />
          <br/>
          <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegistrationForm