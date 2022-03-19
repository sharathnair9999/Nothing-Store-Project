import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products";
import Product from "../pages/Product";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../components/Navbar/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import UserInfo from "../components/UserInfo/UserInfo";
import Addresses from "../components/Address/Addresses";
import Address from "../components/Address/Address";
import Orders from "../components/Orders/Orders";
import Order from "../components/Orders/Order";

import { ProductProvider } from "../contexts/product-context";
import { UserProvider } from "../contexts/user-context";

export {
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
  Address,
  Orders,
  Order,
  ProductProvider,
  UserProvider
};
