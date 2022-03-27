import HomePage from "../pages/HomePage/HomePage";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../components/Navbar/Navbar";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
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
import {
  ProductProvider,
  useProducts,
} from "../contexts/Products/product-context";
import { UserProvider, userDetails } from "../contexts/User/user-context";
import FiltersApplied from "../components/FiltersApplied/FiltersApplied";
import ProductCard from "../components/Product/ProductCard";
import Filters from "../components/Filters/Filters";
import ProductSection from "../components/ProductsSection/ProductSection";
import Rating from "../components/Rating/Rating";
import Loader from "../components/Loader/Loader";
import EmptyData from "../components/ProductsSection/EmptyData";
import ResetPass from "../pages/ResetPass/ResetPass";
import { testUser } from "../contexts/User/utils";
import { capitalize } from "../pages/Login/utils";
import {
  RequiredAuth,
  RedirectLoggedUser,
} from "../contexts/User/user-context";
import UserSideNav from "../components/UserPage/UserSideNav";
import ProfileIndex from "../components/UserPage/ProfileIndex";
import { useCart, CartProvider } from "../contexts/Cart/cart-context";
import CartCard from "../components/CartCard/CartCard";
import ProductRate from "../components/ProductRate/ProductRate";
import CartSummary from "../components/CartPriceSection.js/CartSummary";

const constants = {
  loading_svg:
    "https://res.cloudinary.com/sharath-media-library/image/upload/v1647527764/nothing-store-project/Spinner-1.4s-110px_h5xvoz.svg",
    empty_cart: "https://res.cloudinary.com/sharath-media-library/image/upload/v1648385329/nothing-store-project/empty_cart_azsh1o.svg"
};

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
  ProductSection,
  Rating,
  Loader,
  EmptyData,
  ResetPass,
  testUser,
  capitalize,
  RequiredAuth,
  RedirectLoggedUser,
  UserSideNav,
  ProfileIndex,
  useCart,
  CartProvider,
  CartCard,
  ProductRate,
  CartSummary,
  constants
};
