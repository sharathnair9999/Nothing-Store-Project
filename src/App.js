import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

import {HomePage} from "./index/index";
import {Products} from "./index/index";
import {Product} from "./index/index";
import {ErrorPage} from "./index/index";
import {Navbar} from './index/index';
import {Login} from './index/index';
import {Signup} from './index/index';
import {Wishlist} from './index/index';
import {Cart} from './index/index';
import {Profile} from './index/index';
import {UserInfo} from "./index/index";
import {Addresses} from './index/index';
import {Address} from './index/index';
import {Orders} from './index/index';
import {Order} from './index/index';

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
        </Routes>
      </div>
      <Routes>
        <Route path="mockapi" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
