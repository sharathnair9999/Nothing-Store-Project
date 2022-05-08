import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { testUser, useProducts, userDetails } from "../../imports/index";
import axios from "axios";
import { capitalize } from "./utils";

const Login = () => {
  const { showAlert } = useProducts();

  const { userDispatch } = userDetails();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUserCredentials((details) => {
      return { ...details, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (event, credentials) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      const { encodedToken, foundUser } = data;
      const { firstName, lastName } = foundUser;
      showAlert(
        "success",
        `Hi ${capitalize(firstName)} ${capitalize(
          lastName
        )} !! You are successfully logged in.`,
        1500
      );
      localStorage.setItem(
        "authToken",
        JSON.stringify({ encodedToken, firstName, lastName })
      );
      userDispatch({
        type: "SET_USER",
        payload: { firstName, lastName, encodedToken },
      });
    } catch (error) {
      showAlert("danger", "Invalid Credentials. Please try again!", 1500);
    }
  };

  return (
    <div className="relative">
      <div className="login-container flex-and-center">
        <form
          className="form-controls"
          onSubmit={(e) => handleSubmit(e, userCredentials)}
        >
          <div className="required-text">
            <label htmlFor="email" className="required-title" id="email">
              E-mail
            </label>
            <input
              value={userCredentials.email}
              onChange={(e) => onChange(e)}
              autoFocus
              type="email"
              className="input-box"
              id="email"
              name="email"
              placeholder="Type your e-mail here..."
              required
            />
          </div>
          <div className="required-text">
            <label htmlFor="password" className="required-title">
              Password
            </label>
            <input
              onChange={(e) => onChange(e)}
              value={userCredentials.password}
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
          <button type="submit" className="btn btn-primary submit-btn">
            Login
          </button>
          <button
            className="btn btn-light submit-btn"
            onClick={(e) => {
              setUserCredentials(testUser);
              handleSubmit(e, testUser);
            }}
          >
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
        </form>

        <img
          src="https://res.cloudinary.com/sharath-media-library/image/upload/v1648056558/nothing-store-project/shopping_dfovvp.svg"
          className="aside-image"
          alt="shopping-image"
        />
      </div>
    </div>
  );
};

export default Login;
