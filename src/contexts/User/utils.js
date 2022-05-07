const userData = JSON.parse(localStorage.getItem("authToken"));
const initialState = {
  encodedToken: userData ? userData.encodedToken : null,
  firstName: userData ? userData.firstName : null,
  lastName: userData ? userData.lastName : null,
  isLoggedIn : userData?.encodedToken ? true : false
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
        isLoggedIn : true
      };
    case "LOGOUT":
      return { encodedToken: null, firstName: null, lastName: null, isLoggedIn:false };
    case "SIGNUP":
      return {
        firstName: payload.firstName,
        lastName: payload.lastName,
        password: payload.password,
      };
    default:
      return state;
  }
};

export { testUser, initialState, userReducer };
