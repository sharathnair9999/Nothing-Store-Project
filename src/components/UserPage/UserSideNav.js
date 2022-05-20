import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./UserPage.css";

const UserSideNav = () => {
  return (
    <div className="user-sidenav">
      <ul className="user-options">
        <p className="heading">
          <Link to={"/user"}>Profile</Link>
        </p>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "active-link" : "inactive-link"} link`
            }
            to={"/user/wishlist"}
          >
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "active-link" : "inactive-link"} link`
            }
            to={"/user/cart"}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "active-link" : "inactive-link"} link`
            }
            to={"/user/addresses"}
          >
            My Addresses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "active-link" : "inactive-link"} link`
            }
            to={"/user/orders"}
          >
            Your Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "active-link" : "inactive-link"} link`
            }
            to={"/products"}
          >
            Explore Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserSideNav;
