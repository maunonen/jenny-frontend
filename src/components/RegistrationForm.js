import React, {useState, useEffect} from 'react'
import userService from '../services/user';
import { useHistory } from 'react-router-dom'


const RegistrationForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()

  const handleMessage = (message,type) => {
    setMessage({ type, message })
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  
  const handleRegistration = async (event) => {
    event.preventDefault()
      try {
        const userObject = {
          username, password, name, email
        }
        const responce = await userService.register(userObject)
        if (responce && responce.status === 200) {
          /* console.log(responce) */
          handleMessage('Succesfull', 'info')
          setTimeout(() => {
            history.push('/login')
          }, 5000
          )
        }
      } catch (err){
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // Object not found checck status code
          console.log('Responce', err.response)
          if ( err.response.status && err.response.status === 404){
            handleMessage('Status 404 Not found', 'error')
          } else if ( err.response.status && err.response.status === 400){
            handleMessage(`status 400 bad request ${err.response.data.error}`, 'error')
          }  else if (err.response.status && err.response.status === 403){
            handleMessage('You don\'t have permission', 'error')
          } else if (err.response.status && err.response.status === 401){
            handleMessage(`Error: Status 401 ${err.response.data.error}`, 'error')
          } else if ( err.response.status && err.response.status === 500) {
            handleMessage('Error status 500', 'error')
          }
        }
        else if (err.request) {
          handleMessage('Connection to server lost', 'error')
        } else {
          handleMessage('Wrong request setting', 'error')
        }
      }
  }

  return (
    <div className="form-container form-container--sm">
    { message && <h1>{message.message} {message.type}</h1>}
    <form onSubmit={handleRegistration}>
          <h1 className="form-container__title">Registration</h1>
          <div className="form-row">
            <input 
              placeholder="username"
              className="form-row__input"
              type="text" 
              value={username} 
              name="username" 
              onChange={({target})=> setUsername(target.value)}
            />
            </div>
          <div className="form-row">
            <input 
              placeholder="password"
              className="form-row__input"
              type="text" 
              value={password} 
              name="password"
              onChange={({target}) => setPassword(target.value)}
            />
          </div>
          <div className="form-row">
            <input 
              placeholder="confirm password"
              className="form-row__input"
              type="text" 
              /* value={password}  */
              name="password"
              onChange={({target}) => setPassword(target.value)}
            />
          </div>
          <div className="form-row">
            <input 
              placeholder="name"
              className="form-row__input"
              type="text" 
              value={name} 
              name="name"
              onChange={({target}) => setName(target.value)}
            />
          </div>
          <div className="form-row">
            <input 
              placeholder="email"
              className="form-row__input"
              type="text" 
              value={email} 
              name="email"
              onChange={({target}) => setEmail(target.value)}
            />
          </div>
          <div className="form-row">
            <button type="submit" className="form-button">Register</button>
          </div>
        </form>
    </div>
  )
}

export default RegistrationForm