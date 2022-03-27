export const initialCartState = {
  cartItems:[], 
  isLoading:false,
  error: null
}

export const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case "SET_CART_ITEMS":
      return {...state, cartItems:payload}
    case "ADD_TO_CART":{
      return {...state, cartItems:payload}
    }
    case "ERROR":
      return {...state, error:payload}
    case "LOADING":
      return {...state, isLoading:payload}
      default:
        return state;
  }
}