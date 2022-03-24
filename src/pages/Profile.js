import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { userDetails } from "../contexts/User/user-context";

const Profile = () => {
  return (
    <div>

    <div>
      <h3>Profile</h3>
      <Link to={"/user/addresses"}>Address</Link>
      <Link to={"/user/orders"}>Orders</Link>
      <Link to={"/user/wishlist"}>Wishlist</Link>
    </div>

    <Outlet/>
    </div>
  );
};

export default Profile;
