import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useCart,
  useProducts,
  userDetails,
  useWishlist,
} from "../../imports/index";
import "./Navbar.css";
import UserInitials from "./UserInitials";

const Navbar = () => {
  const {
    productDispatch,
    searchProduct,
    productState: { products },
  } = useProducts();
  const { userState, logoutUser } = userDetails();
  const { isLoggedIn, firstName, lastName } = userState;
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const searchForProduct = (e, searchInput) => {
    e.preventDefault();
    if (searchInput.length === 0) {
      productDispatch({ type: "PRODUCTS", payload: products });
    }
    navigate("/products");
    searchProduct(searchInput);
  };

  useEffect(() => {
    if (location.pathname !== "/products") {
      setSearchInput("");
    }
  }, [location?.pathname]);

  return (
    <>
      <input type="checkbox" id="check" />
      <nav className="header">
        <div className="icon flex-and-center">
          <Link
            to="/"
            className="flex-and-center"
            onClick={() => {
              productDispatch({ type: "RESET_FILTERS" });
            }}
          >
            <img
              src="https://res.cloudinary.com/sharath-media-library/image/upload/v1647446845/nothing-store-project/Nothing_1_zikesp.png"
              alt="logo"
            />
            <span>Store</span>
          </Link>
        </div>

        {location.pathname === "/products" && (
          <form
            onSubmit={(e) => searchForProduct(e, searchInput)}
            className="search_box"
          >
            <input
              type="search"
              placeholder="Search Here..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="fa-solid fa-magnifying-glass btn search-btn"
            ></button>
          </form>
        )}

        {isLoggedIn ? (
          <ol className="nav-actions flex-and-center pr-1">
            {" "}
            <li>
              <Link to="/user/cart">
                <div className="badge-container mx-1">
                  <i className="fas fa-cart-shopping fa-lg"></i>
                  {cartState?.cartItems?.length > 0 && (
                    <span className="icon-badge green-badge flex-and-center">
                      {cartState?.cartItems?.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link to="/user/wishlist">
                <div className="badge-container mx-1">
                  <i className="fa-solid fa-heart fa-lg"></i>
                  {wishlistState?.wishlistItems?.length > 0 && (
                    <span className="icon-badge green-badge flex-and-center">
                      {wishlistState?.wishlistItems?.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li className="user-icon flex-col">
              <Link to="/user">
                <UserInitials firstName={firstName} lastName={lastName} />
              </Link>
              <button
                onClick={() => {
                  logoutUser();
                }}
                className="logout-btn btn btn-primary"
              >
                Logout
              </button>
            </li>
          </ol>
        ) : (
          <ol className="nav-actions flex">
            <li>
              <Link to="/login" className="btn btn-outline-primary">
                <b>Login</b>
              </Link>
            </li>
          </ol>
        )}

        <label htmlFor="check" className="bar">
          <span className="fa-solid fa-bars" id="bars"></span>
          <span className="fa-solid fa-times" id="times"></span>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
