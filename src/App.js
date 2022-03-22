import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

import {Footer, HomePage,Products,Product,ErrorPage,Navbar,Login,Signup,Wishlist,Cart,Profile,UserInfo,Addresses,Address,Orders,Order} from "./index/index";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products" element={<Products />} />
          <Route path="products">
            <Route path=":productId" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="user" element={<Profile />}>
            <Route path=":userId" element={<UserInfo />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders">
              <Route path=":orderId" element={<Order />} />
            </Route>
            <Route path="addresses" element={<Addresses />} />
            <Route path="addresses">
              <Route path=":addressId" element={<Address />} />
            </Route>
            <Route path="wishlist" element={<Wishlist />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        <Route path="mockapi" element={<Mockman />} />
        </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
