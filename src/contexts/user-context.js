import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
  isLoggedIn : true,
  userName : "Sharath",
  id: uuid()
}

const UserContext = createContext(initialState)

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{initialState}}>
      {children}
    </UserContext.Provider>
  )
}


const userDetails = () => useContext(UserContext)

export {userDetails , UserProvider}