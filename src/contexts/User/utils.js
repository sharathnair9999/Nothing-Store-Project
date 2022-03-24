const initialState = {
  userId: null,
  userName: null,
  isLoggedIn: false,
  cartItems: [],
  wishlistItems: [],
};

const userReducer = (state, action) => {
  const { type, payload } = action; 
  switch (type) {
    case "LOGIN":
      return {
        userId : payload.userId,
        isLoggedIn: true,
        userName: payload.userName,
        cartItems: payload.cartItems,
        wishlistItems: payload.wishlistItems,
      };
    case "LOGOUT":
      return initialState;
    case "SIGNUP":
      return {};
    default:
      return state;
  }
};

export { initialState, userReducer };
