const userData = JSON.parse(localStorage.getItem("authToken"));
const initialState = {
  encodedToken: userData ? userData.encodedToken : null,
  firstName: userData ? userData.firstName : null,
  lastName: userData ? userData.lastName : null,
  isLoggedIn: userData?.encodedToken ? true : false,
  addresses: [],
  orders: [],
  ordersLoading: false,
  orderDetails: {
    cartItemsTotal: "",
    cartItemsDiscountTotal: "",
    orderAddress: "",
    orderId: "",
  },
};

const testUser = {
  email: "adarshbalika@gmail.com",
  password: "adarshbalika",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        encodedToken: payload.encodedToken,
        firstName: payload.firstName,
        lastName: payload.lastName,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        encodedToken: null,
        firstName: null,
        lastName: null,
        isLoggedIn: false,
      };
    case "SIGNUP":
      return {
        firstName: payload.firstName,
        lastName: payload.lastName,
        password: payload.password,
      };
    case "ALL_ADDRESSES":
      return {
        ...state,
        addresses: payload,
      };
    case "ORDER_LOADER":
      return {
        ...state,
        ordersLoading: payload,
      };
    case "SET_ORDERS":
      return {
        ...state,
        orders: payload,
      };

    case "SET_ORDER_DETAILS":
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          ...payload.orderDetails,
        },
      };
    case "RESET":
      return {
        cartProducts: [],
        wishlistProducts: [],
        addressList: [],
        ordersDetails: {
          cartItemsTotal: "",
          cartItemsDiscountTotal: "",
          couponDiscountTotal: "",
          orderAddress: "",
          orderId: "",
        },
        orders: [],
      };
    default:
      return state;
  }
};

export { testUser, initialState, userReducer };
