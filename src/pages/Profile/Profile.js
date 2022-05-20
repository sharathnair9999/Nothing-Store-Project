import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserSideNav } from "../../imports/index";
import "./Profile.css";

const Profile = () => {
  const { pathname } = useLocation();
  return (
    <div className="profile-page">
      <input type="checkbox" id="toggle-user-sidenav" />
      {!(
        pathname.includes("orderSummary") || pathname.includes("checkout")
      ) && (
        <label htmlFor="toggle-user-sidenav" className="toggle-icon"></label>
      )}
      {!(
        pathname.includes("orderSummary") || pathname.includes("checkout")
      ) && <UserSideNav />}
      <div className="user-option-section">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
