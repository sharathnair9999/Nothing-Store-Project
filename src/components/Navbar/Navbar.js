import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useProducts, userDetails } from "../../index/index";
import "./Navbar.css";
import UserInitials from "./UserInitials";

const Navbar = () => {
  const { productDispatch } = useProducts();
  const { userState , logoutUser} = userDetails();
  const { encodedToken, firstName, lastName } = userState;
  const {cartState} = useCart()

  return (
    <div className="top-navbar">
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
        <div className="search_box">
          <input type="search" placeholder="Search Here..." />
          <span className="fa-solid fa-magnifying-glass"></span>
        </div>

        {encodedToken ? (
          <ol className="nav-actions flex-and-center pr-1">
            {" "}
            <li>
              <Link to="/user/cart">
                <div className="badge-container mx-1">
                  <i className="fas fa-cart-shopping fa-lg"></i>
                 {cartState?.cartItems?.length>0&& <span className="icon-badge green-badge flex-and-center">
                    {cartState?.cartItems?.length}
                  </span>}
                </div>
              </Link>
            </li>
            <li>
              <Link to="/user/wishlist">
                <div className="badge-container mx-1">
                  <i className="fa-solid fa-heart fa-lg"></i>
                  <span className="icon-badge green-badge flex-and-center">
                    2
                  </span>
                </div>
              </Link>
            </li>
            <li className="user-icon flex-col">
              <Link to="/user">
              <UserInitials firstName={firstName} lastName={lastName}/>
              </Link>
              <button onClick={()=>{logoutUser()}} className="logout-btn btn btn-primary">Logout</button>
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
    </div>
  );
};

export default Navbar;
