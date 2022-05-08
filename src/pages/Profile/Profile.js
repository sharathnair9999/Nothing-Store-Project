import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UserSideNav } from "../../imports/index";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <input type="checkbox" id="toggle-user-sidenav" />
      <label htmlFor="toggle-user-sidenav" className="toggle-icon"></label>
      <UserSideNav />
      <div className="user-option-section">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
