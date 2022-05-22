import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from "react";
import { useProducts } from "../Products/product-context";
import { userDetails } from "../User/user-context";

import { cartReducer, initialCartState } from "./utils";

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const { userState } = userDetails();
  const { showAlert } = useProducts();
  const { encodedToken } = userState;
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const getCartItems = async (authToken) => {
    if (!userState.isLoggedIn) {
      return;
    }
    try {
      const { data } = await axios.get("/api/user/cart", {
        headers: { authorization: authToken },
      });
      const { cart } = data;
      cartDispatch({ type: "SET_CART_ITEMS", payload: cart });
    } catch (error) {
      showAlert("danger", "Error occurred while retrieving cart items");
    }
  };

  const addToCart = async (prod) => {
    try {
      cartDispatch({ type: "LOADING", payload: true });
      const { data } = await axios.post("/api/user/cart", prod, {
        headers: { authorization: encodedToken },
      });
      cartDispatch({ type: "LOADING", payload: false });
      showAlert(
        "success",
        `${prod?.product?.title} added to Cart Successfully`
      );
      const { cart } = data;
      cartDispatch({ type: "ADD_TO_CART", payload: cart });
    } catch (error) {
      showAlert("danger", "Could not add item to the cart!");
    }
  };

  const removeFromCart = async (id) => {
    try {
      cartDispatch({ type: "LOADING", payload: true });
      const { data } = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: encodedToken },
      });
      cartDispatch({ type: "LOADING", payload: false });
      const { cart } = data;
      cartDispatch({ type: "REMOVE_FROM_CART", payload: cart });
      showAlert("success", `Removed Product from Cart Successfully`);
    } catch (error) {
      showAlert("danger", "Could not remove item from cart!");
    }
  };

  const changeQty = async (id, action) => {
    try {
      cartDispatch({ type: "LOADING", payload: true });
      const { data } = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: action } },
        {
          headers: { authorization: encodedToken },
        }
      );
      cartDispatch({ type: "LOADING", payload: false });
      const { cart } = data;
      cartDispatch({
        type: `${action === "increment" ? "INCREMENT_QTY" : "DECREMENT_QTY"}`,
        payload: cart,
      });
    } catch (error) {
      showAlert("danger", "Could not perform the action at the moment");
    }
  };

  const cartPriceSummary = (cartProducts) => {
    const ans = cartProducts.reduce(
      (acc, curr) => {
        return {
          ...acc,
          cartPrice:
            acc.cartPrice +
            curr.qty * (curr.price + (curr.price * curr.discountPercent) / 100),
          totalDiscount:
            acc.totalDiscount +
            curr.qty * ((curr.price * curr.discountPercent) / 100),
          deliveryCharges: acc.cartPrice !== 0 && curr.price > 5000 ? 0 : 499,
          finalTotal: acc.finalTotal + curr.qty * curr.price,
          totalQty: acc.totalQty + curr.qty,
        };
      },
      {
        totalQty: 0,
        cartPrice: 0,
        totalDiscount: 0,
        deliveryCharges: 0,
        finalTotal: 0,
      }
    );
    return ans;
  };

  const { cartItems } = cartState;
  const productInCart = (prod) => {
    let prodInCart = cartItems.find((item) => item._id === prod._id);
    if (prodInCart) return true;
    return false;
  };

  const clearCartItems = async () => {
    try {
      await axios.post(
        "/api/user/cart/clearCart",
        {},
        { headers: { authorization: encodedToken } }
      );
      cartDispatch({ type: "SET_CART_ITEMS", payload: [] });
    } catch (error) {
      showAlert("danger", "Couldn't clear cart items");
    }
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
    changeQty,
    productInCart,
    clearCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
