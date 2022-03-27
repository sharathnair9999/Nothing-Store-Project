import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from "react";
import { userDetails } from "../User/user-context";

import { cartReducer, initialCartState } from "./utils";

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const { userState } = userDetails();
  const { encodedToken } = userState;
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const getCartItems = async (authToken) => {
    try {
      const { data } = await axios.get("/api/user/cart", {
        headers: { authorization: authToken },
      });
      const { cart } = data;
      cartDispatch({ type: "SET_CART_ITEMS", payload: cart });
    } catch (error) {
      cartDispatch({
        type: "ERROR",
        payload: "Could not retrieve the cart items!",
      });
    }
  };

  const addToCart = async (prod) => {
    try {
      const { data } = await axios.post("/api/user/cart", prod, {
        headers: { authorization: encodedToken },
      });
      const { cart } = data;
      cartDispatch({ type: "ADD_TO_CART", payload: cart });
    } catch (error) {
      cartDispatch({
        type: "ERROR",
        payload: "Could not add item to the cart!",
      });
    }
  };

  const removeFromCart = async (id) => {
    try {
      const { data } = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: encodedToken },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const cartPriceSummary = (cartProducts) => {
    const ans = cartProducts.reduce(
      (acc, curr) => {
        return {
          ...acc,
          cartPrice: acc.cartPrice + curr.price + (curr.price * curr.discountPercent) / 100,
          totalDiscount: acc.totalDiscount + (curr.price * curr.discountPercent)/100,
          deliveryCharges : acc.cartPrice!==0 && curr.price>5000? 0:499,
          finalTotal : acc.finalTotal + curr.price
        };
      },
      {
        cartPrice: 0,
        totalDiscount: 0,
        deliveryCharges: 0,
        finalTotal: 0,
      }
    );
    return ans;
  };

  useEffect(() => {
    getCartItems(encodedToken);
  }, []);

  const value = {
    cartState,
    cartDispatch,
    addToCart,
    removeFromCart,
    cartPriceSummary,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
