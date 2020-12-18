import { 
  REGISTER_FAILED, 
  REGISTER_SUCCESS, 
  LOGIN_SUCCESS , 
  LOGIN_FAILED , 
  /* LOGIN_LOADING  ,  */
  LOGOUT_SUCCESS , 
 } from "../action/userAction";

 function getInitialState() {
    if (sessionStorage.getItem("isLogged")){
      let tempIsLogged = false 
      let tempToken = "" 
      if (sessionStorage.getItem("isLogged") === true && sessionStorage.getItem("token") === true ) {
        tempIsLogged = true
        tempToken = sessionStorage.getItem("token")
      }      
      let error = ""
      if (sessionStorage.getItem("login_error")){
        error = sessionStorage.getItem("login_error")
      }
      return {
        isLogged : tempIsLogged, 
        token : tempToken, 
        error
      }
    } else {
      return {
        isLogged: false,
        token : "",
        error : ""
      }
    }
 }

 let initialState = getInitialState()

const saveToStorage = (isLogged, error, token="") => {
  sessionStorage.setItem("isLogged", isLogged)
  sessionStorage.setItem("login_error", error)
  sessionStorage.setItem("token", token)
}

const loginReducer = ( state = initialState, action) => {
  console.log("Login Reducer - action" + action.type)
  switch (action.type){
    case LOGIN_SUCCESS: 
      saveToStorage("true", "", action.token)
      return {
        ...state, 
        token : action.token, 
        isLogged : true, 
        error : "", 
      }

    case LOGIN_FAILED:
      saveToStorage(state.isLogged, action.error, "")
      return {
        ...state, 
        error : action.error
      }
    case REGISTER_SUCCESS:
        return {
          ...state
        }
      
    case REGISTER_FAILED: 
        return {
          ...state,
          error : action.error
        }

    default : 
      return state;   

  }
}

export default loginReducer