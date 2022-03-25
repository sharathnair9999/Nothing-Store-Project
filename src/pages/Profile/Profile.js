import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex-and-center">
      <div>
        <h3>Profile</h3>
        <ul className="user-options">
          <li>
            <Link to={"/user/wishlist"}>Wishlist</Link>
          </li>
          <li>
            <Link to={"/user/cart"}>Cart</Link>
          </li>
        </ul>
        {/* <Link to={"/user/addresses"}>Address</Link> */}
        {/* <Link to={"/user/orders"}>Orders</Link> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
