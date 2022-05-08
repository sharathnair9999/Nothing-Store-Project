import React from "react";
import { userDetails } from "../../imports/index";

const ProfileIndex = () => {
  const { userState } = userDetails();
  return (
    <div className="profile-index">
      <p className="welcome">
        <span className="hi-text">Hi </span>
        <span className="name">{userState.firstName}</span>
      </p>
      <p className="welcome-text">
        Access all your information here - profile, cart, wishlist, address
        management etc
      </p>
      <div className="image-container">
        <img
          className="responsive-img"
          src="https://res.cloudinary.com/sharath-media-library/image/upload/v1648295802/nothing-store-project/index_image_ttcsog.svg"
          alt="welcome to user page"
        />
      </div>
    </div>
  );
};

export default ProfileIndex;
