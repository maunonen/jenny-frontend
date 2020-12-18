import React, { useState, useEffect} from 'react'
import userServices from '../services/user'
import {useSelector} from 'react-redux'


const ProfileForm = ()=> {

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const token  = useSelector(state => state.user.token )

  useEffect(()=> {
    userServices.getUserProfile(token)
      .then(responce => responce.data)
      .then( user => {
        setUsername(user.username || '')
        setName(user.name || '')
        setEmail(user.email || '')
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleUpdateProfile  = (event) => {
    event.preventDefault()
    const token = sessionStorage.getItem("token")
    let userObject = {}
    if (username){
      userObject['username'] = username
    }
    if (name){
      userObject['name'] = name
    }
    if (email){
      userObject['email'] = email
    }
    console.log(userObject)
    userServices.updateUser(userObject, token)
      .then(responce => responce.data)
      .then(user => {
        setUsername(user.username || '')
        setName(user.name || '')
        setEmail(user.email || '')
        console.log('Success', user)
        handleMessage('Success', 'info')
      })
      .catch(err => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // Object not found checck status code
          console.log('Responce', err.response)
          if ( err.response.status && err.response.status === 404){
            handleMessage('404 Profile Not Found')
          } else if ( err.response.status && err.response.status === 400){
            handleMessage(`status 400 bad request ${err.response.data.error}`)
          }  else if (err.response.status && err.response.status === 403){
            handleMessage('You don\'t have permission')
          } else if (err.response.status && err.response.status === 401){
            handleMessage(`Error: Status 401 ${err.response.data.error}`, 'error')
          } else if ( err.response.status && err.response.status === 500) {
            handleMessage('Error status: 500.')
            }
        }
        else if (err.request) {
          handleMessage('Connection to server lost')
        } else {
          handleMessage('Wrong request setting')
        }
      })
  }

  const handleChangePassword = (event) => {
    event.preventDefault()
    console.log('handle modal window')
  }

  const handleMessage = (message,type) => {
    setMessage({ type, message })
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }


  return (
    <div>
    <h1>Profile Form</h1>
    { message.message && message.message }
    { message.type && message.type }
    <form onSubmit={handleUpdateProfile}>
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={({target})=> setUsername(target.value)}
      />
      <br/>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        value={name} 
        name="name"
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
      <button type="submit">Update Profile</button>
      <button onClick={handleChangePassword}>Change Password</button>
    </form>
</div>
    
  )
}

export default ProfileForm