import React, { useEffect} from 'react'
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  /* Link, 
  Redirect, 
  useHistory, 
  useRouteMatch */
} from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import HomePage from '../components/HomePage' 
import NavBar from '../components/NavBar'
import RegistrationForm from '../components/RegistrationForm'
import ProfileForm from '../components/ProfileForm'
import AddPrice from '../components/AddPrice'
import ShowPriceList from '../components/ShowPriceList'
import { useSelector} from 'react-redux' 


const AppRouter = (props) => {

  const  isLogged = useSelector(state => state.user.isLogged)
  
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route path="/" exact={true} component={HomePage}/>
          <Route path="/login" component={LoginForm}/>
          { isLogged && <Route path="/profile" component={ProfileForm}/>}
          { isLogged && <Route path="/add_price" component={AddPrice}/>}
          { isLogged && <Route path="/show_price_list" component={ShowPriceList}/>} 

          {!isLogged && <Route path="/register" component={RegistrationForm}/>}
      </Switch>
    </div>
  )

}
export default AppRouter;