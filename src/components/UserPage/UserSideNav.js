import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserSideNav = () => {
  return (
    <div className="user-sidenav">
      <ul className="user-options">
      <p className="heading"><Link to={"/user"}>Profile</Link></p>
        <li>
          <NavLink to={"/user/wishlist"}>Wishlist</NavLink>
        </li>
        <li>
          <NavLink to={"/user/cart"}>Cart</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Explore Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserSideNav;
