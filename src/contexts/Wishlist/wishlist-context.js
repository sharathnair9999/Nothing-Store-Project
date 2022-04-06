import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { userDetails } from "../User/user-context";
import { initialWishlistState, wishlistReducer } from "./wishlist-reducer";

const WishlistContext = createContext(initialWishlistState);

const WishListProvider = ({ children }) => {
  const {userState} = userDetails()
  const {encodedToken} = userState
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );


  const getWishlistItems = async () => {
    try {
      const {data} = await axios.get("/api/user/wishlist", {
        headers: {
          authorization : encodedToken
        }
      })
      const {wishlist} = data
      wishlistDispatch({type:"SET_WISHLIST_ITEMS", payload:wishlist})
    } catch (error) {
      wishlistDispatch({type:"ERROR", payload:"Error occured in retieving Wishlist Items"})
    }
  }
  const addToWishlist = async (prod) => {
    try {
      const {data} = await axios.post(`/api/user/wishlist`,prod, {
        headers: {
          authorization : encodedToken
        }
      })
      const {wishlist} = data
      wishlistDispatch({type:"ADD_TO_WISHLIST", payload:wishlist})
    } catch (error) {
      wishlistDispatch({type:"ERROR", payload:"Error occured while adding to Wishlist"})
    }
  }
  const removeFromWishlist = async (id) => {
    try {
      const {data} = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization : encodedToken
        }
      })
      const {wishlist} = data
      wishlistDispatch({type:"REMOVE_FROM_WISHLIST", payload:wishlist})
    } catch (error) {
      wishlistDispatch({type:"ERROR", payload:"Error occured in retieving Wishlist Items"})
    }
  }

  const { wishlistItems } = wishlistState;
  const productInWishlist = (prod) => {
    let prodInWishlist = wishlistItems?.find((item) => item._id === prod._id);
    if (prodInWishlist) return true;
    return false;
  };

  useEffect(() => {
    getWishlistItems(encodedToken)
  }, [])
  


  const value = { wishlistState, wishlistDispatch, addToWishlist, removeFromWishlist, productInWishlist };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishListProvider}