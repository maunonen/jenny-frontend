import React, { useEffect} from 'react'
import {
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import HomePage from '../components/HomePage' 
import NavBar from '../components/NavBar'
import RegistrationForm from '../components/RegistrationForm'
import ProfileForm from '../components/ProfileForm'
import AddPrice from '../components/AddPrice'
import ShowPriceList from '../components/ShowPriceList'
import PrivateRoute from './PrivateRouter'
import LogOut from '../components/LogOut'
import Footer from '../components/Footer'


const AppRouter = (props) => {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/" exact={true} component={HomePage}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/register" component={RegistrationForm}/>
        <Route path="/add_price" component={AddPrice}/>
        <PrivateRoute exact path="/profile" component={ProfileForm}/>
        <PrivateRoute exact path="/show_price_list" component={ShowPriceList}/>
        <PrivateRoute exact path="/add_price" component={AddPrice}/>
        <PrivateRoute exact path="/logout" component={LogOut}/>
      </Switch>
      <Footer/>
    </div>
  )
}
  export default AppRouter;