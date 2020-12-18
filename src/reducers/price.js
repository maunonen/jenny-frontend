const priceReducer = (state = [], action) => {
  switch (action.type){
    case 'NEW_PRICE' : 
      return action.data
    case 'INIT_PRICE' : 
      return action.data
    default: 
      return state
  }
}
export default priceReducer