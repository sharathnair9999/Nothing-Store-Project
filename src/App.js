import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

import {
  Footer,
  HomePage,
  Products,
  Product,
  ErrorPage,
  Navbar,
  Login,
  Signup,
  Wishlist,
  Cart,
  Profile,
  UserInfo,
  Addresses,
  Orders,
  Order,
  ResetPass,
  RequiredAuth,
  RedirectLoggedUser,
  ProfileIndex,
  Alert,
  Checkout,
} from "./imports/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="login"
          element={
            <RedirectLoggedUser>
              <Login />
            </RedirectLoggedUser>
          }
        />
        <Route
          path="signup"
          element={
            <RedirectLoggedUser>
              <Signup />
            </RedirectLoggedUser>
          }
        />
        <Route
          path="reset-password"
          element={
            <RedirectLoggedUser>
              <ResetPass />
            </RedirectLoggedUser>
          }
        />
        <Route path="products" element={<Products />} />
        <Route path="products">
          <Route path=":productId" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route
          path="user"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        >
          <Route index element={<ProfileIndex />} />
          <Route path="orderSummary" element={<Order />} />
          <Route
            path=":userId"
            element={
              <RequiredAuth>
                <UserInfo />
              </RequiredAuth>
            }
          />
          <Route
            path="orders"
            element={
              <RequiredAuth>
                <Orders />
              </RequiredAuth>
            }
          >
            <Route index element={<h1>Your Orders Here</h1>} />
            <Route
              path=":orderId"
              element={
                <RequiredAuth>
                  <Order />
                </RequiredAuth>
              }
            />
          </Route>
          <Route
            path="addresses"
            element={
              <RequiredAuth>
                <Addresses />
              </RequiredAuth>
            }
          />
          <Route
            path="checkout"
            element={
              <RequiredAuth>
                <Checkout />
              </RequiredAuth>
            }
          />
          <Route
            path="wishlist"
            element={
              <RequiredAuth>
                <Wishlist />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="cart"
            element={
              <RequiredAuth>
                <Cart />
              </RequiredAuth>
            }
          ></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="mockapi" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
