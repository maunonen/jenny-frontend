import axios from 'axios'
const baseUrl = '/api/login'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}




export default { setToken }