import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools}  from 'redux-devtools-extension'

import filterReducer from './reducers/filter'
import priceReducer from './reducers/price'
import userReducer  from './reducers/userReducer'

// redirect in acion 
import { createBrowserHistory } from 'history'
// allows reducers access router
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const reactRouterMiddleware = routerMiddleware(history); 



const middlewares = [
  thunk, reactRouterMiddleware
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