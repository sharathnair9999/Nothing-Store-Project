import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useProducts } from "../Products/product-context";
import { initialState, userReducer } from "./utils";

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const { showAlert } = useProducts();
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  const isLoggedIn = () => userState.encodedToken !== null;

  const isLoggedUser = isLoggedIn();

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    userDispatch({ type: "LOGOUT" });
  };

  const getAddresses = async () => {
    if (!userState.isLoggedIn) {
      return;
    }
    try {
      const {
        data: { addressList },
      } = await axios({
        method: "GET",
        url: "/api/user/address",
        headers: { authorization: userState.encodedToken },
      });
      userDispatch({ type: "ALL_ADDRESSES", payload: addressList });
      console.log(addressList);
    } catch (error) {
      showAlert("danger", "Could not retrieve address list.");
    }
  };

  const addNewAddress = async (address) => {
    if (!userState.isLoggedIn) {
      return;
    }
    try {
      const {
        data: { addressList },
      } = await axios({
        method: "POST",
        url: "/api/user/address",
        headers: { authorization: userState.encodedToken },
        data: { address: address },
      });
      userDispatch({ type: "ALL_ADDRESSES", payload: addressList });
      showAlert("success", "Added Address Successfully");
    } catch (error) {
      console.log(error);
      showAlert("danger", "Could not add the address.");
    }
  };

  const updateAddress = async (address) => {
    if (!userState.isLoggedIn) {
      return;
    }
    try {
      console.log(address);
      const {
        data: { addressList },
      } = await axios({
        method: "POST",
        url: `/api/user/address/${address._id}`,
        headers: { authorization: userState.encodedToken },
        data: { address },
      });
      console.log(addressList);
      userDispatch({ type: "ALL_ADDRESSES", payload: addressList });
      showAlert("success", "Updated Address Successfully");
    } catch (error) {
      console.log(error);
      showAlert("danger", "Could not update the address.");
    }
  };

  const deleteAddress = async (id) => {
    if (!userState.isLoggedIn) {
      return;
    }
    try {
      const {
        data: { addressList },
      } = await axios({
        method: "DELETE",
        url: `/api/user/address/${id}`,
        headers: { authorization: userState.encodedToken },
      });
      userDispatch({ type: "ALL_ADDRESSES", payload: addressList });
      showAlert("success", "Deleted Address Successfully");
    } catch (error) {
      console.log(error);
      showAlert("danger", "Could not delete the address.");
    }
  };

  useEffect(() => {
    getAddresses();
  }, [userState.isLoggedIn]);

  return (
    <UserContext.Provider
      value={{
        initialState,
        userState,
        userDispatch,
        isLoggedUser,
        logoutUser,
        getAddresses,
        addNewAddress,
        deleteAddress,
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const RequiredAuth = ({ children }) => {
  const { userState } = userDetails();
  let location = useLocation();
  if (!userState.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const RedirectLoggedUser = ({ children }) => {
  const { userState } = userDetails();
  let location = useLocation();
  if (userState.isLoggedIn) {
    return <Navigate to="/products" state={{ from: location }} replace />;
  }
  return children;
};

const userDetails = () => useContext(UserContext);

export { userDetails, UserProvider, RequiredAuth, RedirectLoggedUser };
