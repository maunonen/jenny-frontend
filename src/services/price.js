import axios from 'axios'
const baseUrl = '/api/price'

const addPrice = async (priceObject,  token ) => {
  
  token = `bareer ${token}`
  const config = {
    headers : {Authorizaation : token }
  }
  const responce = await axios.post(baseUrl, priceObject, config); 
  return responce; 
}

const updatePrice = async (priceObject, id, token ) => {
  
  token = `bareer ${token}`
  const config = {
    headers : {Authorizaation : token }
  }
  const responce = await axios.put(baseUrl,priceObject, id, config); 
  return responce;
}

const getAllPrice = async (token) => {
  token = `bareer ${token}`
  const config = {
    headers : {Authorizaation : token }
  } 
  const responce = await axios.get(baseUrl, config);
  return responce; 
}

const getPriceByID = async (id, token) => {
  token = `bareer ${token}`
  const config = {
    headers : {Authorizaation : token }
  }
  const responce = await axios.get(baseUrl, id, config);
  return responce; 
}

const deletePrice = async (id , token ) => {
  token = `bareer ${token}`
  const config = {
    headers : {Authorizaation : token }
  }
  const responce = await axios.delete(baseUrl, id, config); 
  return responce; 

}

export default {
  addPrice, updatePrice, getAllPrice, getPriceByID, deletePrice
}