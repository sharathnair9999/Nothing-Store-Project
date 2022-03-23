import { createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "./utils";


const UserContext = createContext(initialState)

const UserProvider = ({children}) => {

  const [userState, userDispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{initialState, userState, userDispatch}}>
      {children}
    </UserContext.Provider>
  )
}


const userDetails = () => useContext(UserContext)

export {userDetails , UserProvider}