import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store, {history} from './store'
import AppRouter from './router/AppRouter';
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          <AppRouter/>
        </Router>  
        </Provider>
        </React.StrictMode>,
        document.getElementById('root')
        );
        
        /* <ConnectedRouter history={history}> 
          </ConnectedRouter> */
          
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
