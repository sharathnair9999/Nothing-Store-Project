import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="login-container flex-and-center">
      <div className="form-controls">
        <div className="required-text">
          <label htmlFor="email" className="required-title" id="email">
            E-mail
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
        <div className="required-text">
          <label htmlFor="password" className="required-title">
            Password
          </label>
          <input
            type="password"
            required
            className="input-box"
            id="password"
            name="password"
            placeholder="Type your password here..."
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button className="btn btn-primary submit-btn">Login</button>
        <button className="btn btn-light submit-btn">
          Login w/ Test Credentials
        </button>
        <div className="password-mgmt">
          <p className="text-section">
            <span>New User?</span>
            <Link to={"/signup"} className="link">
              Signup here
            </Link>
          </p>
          <p className="text-section">
            <span>Forgot Password?</span>
            <Link to={"/reset-password"} className="link">
              Change here
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

export default Login;
