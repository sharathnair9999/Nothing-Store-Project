import { createContext, useContext, useReducer } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { initialState, userReducer} from "./utils";


const UserContext = createContext(initialState)

const UserProvider = ({children}) => {

  const [userState, userDispatch] = useReducer(userReducer, initialState)

  const isLoggedIn = () => userState.encodedToken!==null

  const isLoggedUser = isLoggedIn()

  const logoutUser = () => {
    localStorage.removeItem("authToken")
    userDispatch({type:"LOGOUT"}) 
  }


  return (
    <UserContext.Provider value={{initialState, userState, userDispatch, isLoggedUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  )
}

const RequiredAuth = ({children}) => {
  const {userState} = userDetails()
  let location = useLocation();
  if(!userState.encodedToken){
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children;
}

const RedirectLoggedUser = ({children})=>{
  const {userState} = userDetails()
  let location = useLocation();
  if(userState.encodedToken){
    return <Navigate to="/products" state={{ from: location }} replace />
  }
  return children;
}


const userDetails = () => useContext(UserContext)

export {userDetails , UserProvider, RequiredAuth, RedirectLoggedUser}
