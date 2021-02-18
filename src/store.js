import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools}  from 'redux-devtools-extension'

import filterReducer from './reducers/filter'
import priceReducer from './reducers/price'
import userReducer  from './reducers/userReducer'

const middlewares = [
  thunk 
] 

const reducer = combineReducers ({
  filter : filterReducer, 
  price : priceReducer, 
  user : userReducer
})

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store