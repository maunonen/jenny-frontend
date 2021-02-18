import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, loginFailed } from '../action/userAction'
import { useHistory } from 'react-router-dom'
import userService from '../services/user'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const objectCredentials = {
      username, password
    }
    try {
      const responce = await userService.login(objectCredentials)
      dispatch(loginSuccess(responce.data))
      history.push('profile')
    } catch (err){
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // Object not found checck status code
        console.log('Responce', err.response)
        if ( err.response.status && err.response.status === 404){
          handleMessage('Status 404 Not found', 'error')
          dispatch(loginFailed('Status 404 Not found'))
        } else if ( err.response.status && err.response.status === 400){
          handleMessage('status 400 bad request', 'error')
          dispatch(loginFailed('status 400 bad request'))
        }  else if (err.response.status && err.response.status === 403){
          handleMessage('You don\'t have permission', 'error')
          dispatch(loginFailed('You don\'t have permission'))
        } else if (err.response.status && err.response.status === 401){
          handleMessage(`Error: Status 401 ${err.response.data.error}`, 'error')
          dispatch(loginFailed(`Error: Status 401 ${err.response.data.error}`))
        } else if ( err.response.status && err.response.status === 500) {
          handleMessage('Error status 500', 'error')
          dispatch(loginFailed('Error status 500'))
          }
      }
      else if (err.request) {
        handleMessage('Connection to server lost', 'error')
        dispatch(loginFailed('Connection to server lost'))
      } else {
        handleMessage('Wrong request setting', 'error')
        dispatch(loginFailed('Wrong request setting'))
      }
    }
  }

  const handleMessage = (message,type) => {
    setMessage({ type, message })
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }
  
  return (
    <div className="form-container form-container--sm">
    <form onSubmit={handleLogin}>
      <h1 className="form-container__title">Login</h1>
      { message && <h1> { message.message } { message.type} </h1> }
            <div className="form-row">
              <input 
                className="form-row__input"
                type="text" 
                value={username} 
                name="username" 
                onChange={({target})=> setUsername(target.value)}
                placeholder="username"
              />
          </div>
          <div className="form-row">
              <input 
                placeholder="password"
                className="form-row__input"
                type="password" 
                value={password} 
                name="password"
                onChange={({target}) => setPassword(target.value)}
              />
          </div>
          <div className="form-row">
            <button 
              className="form-button"
              type="submit"
            >Login</button>
          </div>
        </form>
      </div>
  )
}

export default LoginForm