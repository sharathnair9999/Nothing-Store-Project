import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { useProducts } from "../Products/product-context";
import { userDetails } from "../User/user-context";
import { initialWishlistState, wishlistReducer } from "./wishlist-reducer";

const WishlistContext = createContext(initialWishlistState);

const WishListProvider = ({ children }) => {
  const { userState } = userDetails();
  const { isLoggedIn, encodedToken } = userState;
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const { showAlert } = useProducts();

  const getWishlistItems = async () => {
    try {
      const { data } = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      const { wishlist } = data;
      wishlistDispatch({ type: "SET_WISHLIST_ITEMS", payload: wishlist });
    } catch (error) {
      showAlert("danger", "Error occured in retieving Wishlist Items");
    }
  };
  const addToWishlist = async (prod) => {
    try {
      const { data } = await axios.post(`/api/user/wishlist`, prod, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { wishlist } = data;
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
      showAlert("success", `${prod?.product?.title} added to your Wishlist`);
    } catch (error) {
      showAlert("danger", `Adding the product to wishlist failed`);
    }
  };
  const removeFromWishlist = async (id) => {
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { wishlist } = data;
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist });
      showAlert("success", `Removed product from your Wishlist`);
    } catch (error) {
      showAlert("danger", `Removing the product from wishlist failed`);
    }
  };

  const clearWishlist = async () => {
    try {
      await axios.post(
        "/api/user/wishlist/clearWishlist",
        {},
        { headers: { authorization: encodedToken } }
      );
      wishlistDispatch({ type: "SET_WISHLIST_ITEMS", payload: [] });
    } catch (error) {
      showAlert("danger", "Couldn't clear wishlist items");
    }
  };

  const { wishlistItems } = wishlistState;
  const productInWishlist = (prod) => {
    let prodInWishlist = wishlistItems?.find((item) => item._id === prod._id);
    if (prodInWishlist) return true;
    return false;
  };

  useEffect(() => {
    isLoggedIn && getWishlistItems();
  }, [isLoggedIn]);

  const value = {
    wishlistState,
    wishlistDispatch,
    addToWishlist,
    removeFromWishlist,
    productInWishlist,
    clearWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishListProvider };
