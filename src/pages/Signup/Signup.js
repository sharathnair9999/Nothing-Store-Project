import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import { capitalize, useProducts } from "../../index/index";

const Signup = () => {
  const initialCredentialState = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    agreed: false,
  };
  const [credentials, setCredentials] = useState(initialCredentialState);

  const { showAlert } = useProducts();

  const handleChange = (e) => {
    setCredentials((details) => {
      return { ...details, [e.target.name]: e.target.value };
    });
  };

  const submitUser = async (e, details) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      showAlert(
        "danger",
        "Password Doesn't Match. Enter same password in both fields.",
        1500
      );
      return;
    }
    if (!details.agreed) {
      showAlert("danger", "Please agree to the Terms & Conditions", 1500);
      return;
    }
    try {
      const { data } = await axios.post("/api/auth/signup", details);
      const { createdUser } = data;
      showAlert(
        "success",
        `Welcome ${capitalize(createdUser.firstName)} ${capitalize(
          createdUser.lastName
        )}`,
        1500
      );
    } catch (error) {
      showAlert("danger", "This user already exists", 1500);
      setCredentials(initialCredentialState);
    }
  };

  return (
    <div className="relative">
      <main className="signup-container flex-and-center ">
        <form
          onSubmit={(e) => submitUser(e, credentials)}
          className="form-controls"
        >
          <div className="required-text">
            <label htmlFor="firstName" className="required-title">
              First Name
            </label>
            <input
              type="text"
              value={credentials.firstName}
              className="input-box"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              placeholder="Type your First Name here..."
              required
            />
          </div>
          <div className="required-text">
            <label htmlFor="lastName" className="required-title">
              Last Name
            </label>
            <input
              type="text"
              className="input-box"
              id="lastName"
              onChange={handleChange}
              value={credentials.lastName}
              name="lastName"
              placeholder="Type your Last Name here..."
              required
            />
          </div>
          <div className="required-text">
            <label htmlFor="email" className="required-title" id="email">
              E-mail
            </label>
            <input
              type="email"
              onChange={handleChange}
              className="input-box"
              id="email"
              value={credentials.email}
              name="email"
              placeholder="Type your e-mail here..."
              required
            />
          </div>
          <div className="required-text">
            <label htmlFor="password" className="required-title">
              Create a Password
            </label>
            <input
              type="password"
              required
              className="input-box"
              id="password"
              value={credentials.password}
              name="password"
              onChange={handleChange}
              placeholder="Type your password here..."
            />
          </div>
          <div className="required-text">
            <label htmlFor="confirmPassword" className="required-title">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={credentials.confirmPassword}
              className="input-box"
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Type your password here..."
            />
          </div>
          <div className="checkbox">
            <input
              value={credentials.agreed}
              type="checkbox"
              id="terms"
              onChange={(e) =>
                setCredentials((details) => {
                  return { ...details, agreed: e.target.checked };
                })
              }
            />
            <label htmlFor="terms">I agree to all Terms &amp; Conditions</label>
          </div>
          <button className="btn btn-primary submit-btn" type="submit">
            Submit
          </button>
          <div className="password-mgmt">
            <p className="text-section">
              <span>Existing User?</span>
              <Link to={"/login"} className="link">
                Login
              </Link>
            </p>
          </div>
        </form>

        <img
          src="https://res.cloudinary.com/sharath-media-library/image/upload/v1648056558/nothing-store-project/shopping_dfovvp.svg"
          className="aside-image"
          alt="shopping-image"
        />
      </main>
    </div>
  );
};

export default Signup;
