import React from "react";
import "./Navbar.css"

const UserInitials = ({ firstName, lastName }) => {
  const firstInitial = firstName[0].toUpperCase();
  const lastInitial = lastName[0].toUpperCase();
  return (
    <div className="flex-and-center">
      <span>{firstInitial}</span>
      <span>{lastInitial}</span>
    </div>
  );
};

export default UserInitials;
