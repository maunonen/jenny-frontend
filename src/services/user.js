import axios from 'axios'
const baseUrl = '/api/users'
let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const login = async credentials => {
  console.log("LOGIN SERVICE")
  const loginUrl = '/api/login'
  const responce = await axios.post(loginUrl, credentials)
  return responce
}

const register = async user => {
  const responce = await axios.post(baseUrl, user)
  return responce
}

const updateUser = async (user, newToken) => {
  token = `bearer ${newToken}`
  const config = {
    headers: { Authorization: token }
  }
  const responce = await axios.put(baseUrl, user, config)
  return responce 
}

const deleteUser = async user => {
  /* const responce = await axios.delete(baseUrl, user) */
  /* return responce */
}

const getUserProfile = async (newToken) => {
  token = `bearer ${newToken}`
  const config = {
    headers: { Authorization: token }
  }
  const responce = await axios.get(`${baseUrl}/profile`, config)
  return responce
}

const getAllUsers = async user => {
  /* const responce = await axios.delete(baseUrl, user) */
  /* return responce */
}

export default { login, register, updateUser, deleteUser, getUserProfile, getAllUsers, setToken}