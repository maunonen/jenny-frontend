import userService from '../services/user'
import { push } from 'connected-react-router'


export const REGISTER_LOADING = "REGISTER_LOADING"
export const REGISTER_FAILED = "REGISTER_FAILED"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGIN_LOADING = "LOGIN_LOADING"

export const LOGOUT_SUCCESS = "LOGIN_SUCCESS"

export const login = (credentials) => {
  return async dispatch => {
    try {
      const responce = await userService.login(credentials)
      dispatch(loginSuccess( responce.data))
      dispatch(push('/profile'))
    } catch (err){
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // Object not found checck status code
        console.log('Responce', err.response)
        if ( err.response.status && err.response.status === 404){
          dispatch(loginFailed('Status 404 Not found'))
        } else if ( err.response.status && err.response.status === 400){
          dispatch(loginFailed('status 400 bad request'))
        }  else if (err.response.status && err.response.status === 403){
          dispatch(loginFailed('You don\'t have permission'))
        } else if (err.response.status && err.response.status === 401){
          dispatch(loginFailed(`Error: Status 401 ${err.response.data.error}`))
        } else if ( err.response.status && err.response.status === 500) {
          dispatch(loginFailed('Error status 500'))
          }
      }
      else if (err.request) {
        dispatch(loginFailed('Connection to server lost'))
      } else {
        dispatch(loginFailed('Wrong request setting'))
      }
    }
  }
}

export const register = (user) => {
  return async dispatch => {
    try {
      const responce = await userService.register(user)
      dispatch(registerSuccess( responce.data))
      
    } catch (err){
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // Object not found checck status code
        console.log('Responce', err.response)
        if ( err.response.status && err.response.status === 404){
          dispatch(registerFailed('Status 404 Not found'))
        } else if ( err.response.status && err.response.status === 400){
          dispatch(registerFailed(`status 400 bad request ${err.response.data.error}`))
        }  else if (err.response.status && err.response.status === 403){
          dispatch(registerFailed('You don\'t have permission'))
        } else if (err.response.status && err.response.status === 401){
          dispatch(registerFailed(`Error: Status 401 ${err.response.data.error}`))
        } else if ( err.response.status && err.response.status === 500) {
          dispatch(registerFailed('Error status 500'))
          }
      }
      else if (err.request) {
        dispatch(registerFailed('Connection to server lost'))
      } else {
        dispatch(registerFailed('Wrong request setting'))
      }
    }
  }
}


// action creator 
const loginSuccess = ({ token }) => {
  return {
    type : LOGIN_SUCCESS, 
    token : token
  }
}

const loginFailed = (error) => {
  return {
    type : LOGIN_FAILED, 
    error
  }
}

const registerSuccess = (user) => {
  return {
    type : REGISTER_SUCCESS
  }
}

const registerFailed = (error) => {
  return {
    type : REGISTER_FAILED, 
    error
  }
}