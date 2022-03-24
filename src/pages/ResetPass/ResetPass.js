import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css"

const ResetPass = () => {
  return (
    <div className="login-container flex-and-center">
      <div className="form-controls">
        <div className="required-text">
          <label for="email" className="required-title" id="email">
            Registered E-mail
          </label>
          <input
            autoFocus
            type="email"
            className="input-box"
            id="email"
            placeholder="Type your e-mail here..."
            required
          />
        </div>
        <br />
        <button className="btn btn-primary submit-btn">Submit</button>

        <div className="password-mgmt">
          <p className="text-section">
            <span>New User?</span>
            <Link to={"/signup"} className="link">
              Signup here
            </Link>
          </p>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/sharath-media-library/image/upload/v1648056558/nothing-store-project/shopping_dfovvp.svg"
        className="aside-image"
        alt="shopping-image"
      />
    </div>
  );
};

export default ResetPass;
