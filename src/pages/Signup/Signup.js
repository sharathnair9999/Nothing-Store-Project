import React from 'react'
import { Link } from 'react-router-dom'
import "../Login/Login.css"

const Signup = () => {
  return (
    <main className="signup-container flex-and-center">
    <div className="form-controls">
      <div className="required-text">
        <label for="first-name" className="required-title" id="first-name"
          >First Name</label
        >
        <input
          type="text"
          className="input-box"
          id="first-name"
          placeholder="Type your First Name here..."
          required
        />
      </div>
      <div className="required-text">
        <label for="last-name" className="required-title" id="last-name"
          >Last Name</label
        >
        <input
          type="text"
          className="input-box"
          id="last-name"
          placeholder="Type your Last Name here..."
          required
        />
      </div>
      <div className="required-text">
        <label for="email" className="required-title" id="email">E-mail</label>
        <input
          type="email"
          className="input-box"
          id="email"
          placeholder="Type your e-mail here..."
          required
        />
      </div>
      <div className="required-text">
        <label for="new-password" className="required-title"
          >Create a Password</label
        >
        <input
          type="password"
          required
          className="input-box"
          id="new-password"
          name="new-password"
          placeholder="Type your password here..."
        />
      </div>
      <div className="required-text">
        <label for="confirm-password" className="required-title"
          >Confirm Password</label
        >
        <input
        autoFocus
          type="password"
          required
          className="input-box"
          id="confirm-password"
          name="new-password"
          placeholder="Type your password here..."
        />
      </div>
      <div className="checkbox">
        <input type="checkbox" id="terms"/><label for="terms">I agree to all Terms &amp; Conditions</label>
      </div>
      <button className="btn btn-primary submit-btn">Submit</button>
      <div className="password-mgmt">
        <p className="text-section">
          <span>Existing User?</span>
          <Link to={"/login"} className="link">Login</Link>
        </p>
      </div>
    </div>

    <img
      src="https://res.cloudinary.com/sharath-media-library/image/upload/v1648056558/nothing-store-project/shopping_dfovvp.svg"
      className="aside-image"
      alt="shopping-image"
    />
  </main>
  )
}

export default Signup