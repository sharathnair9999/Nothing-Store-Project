import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
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
import NewLaunches from "../components/NewLaunches/NewLaunches";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import {
  initialState,
  sortData,
  filterData,
  productsReducer,
} from "../contexts/Products/utils";
import { ProductProvider,useProducts } from "../contexts/Products/product-context";
import { UserProvider, userDetails } from "../contexts/user-context";
import FiltersApplied from "../components/FiltersApplied/FiltersApplied";
import ProductCard from "../components/Product/ProductCard";
import Filters from "../components/Filters/Filters";
import ProductSection from "../components/ProductsSection/ProductSection";

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
  UserProvider,
  NewLaunches,
  Categories,
  Footer,
  initialState,
  sortData,
  filterData,
  productsReducer,
  useProducts,
  FiltersApplied,
  ProductCard,
  userDetails,
  Filters,
  ProductSection

};
