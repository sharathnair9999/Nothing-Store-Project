import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex-and-center flex-col">
        <h2>Categories</h2>
        <ul>
          <li><Link to={"/"}>Phones</Link></li>
          <li><Link to={"/"}>Laptops</Link></li>
          <li><Link to={"/"}>Accessories</Link></li>
          <li><Link to={"/"}>Audio</Link></li>
          <li><Link to={"/"}>Desktops</Link></li>
        </ul>
      </div>
      <div className="flex flex-col h-100">
        <div className="socials-container">
          <h2>Socials</h2>
          <ul className="social_links flex-and-center">
            <li>
              <a href="https://www.linkedin.com/in/sharath99/" target="_blank">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Nairified" target="_blank">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
        <section className="mt-auto">
          <p>
            Made With <span className="heart">{"</>"}</span> by P. Sharath
          </p>
          <p>
            You can Contribute&nbsp;
            <a
              href="https://github.com/sharathnair9999/Nothing-Store-Project"
              target="_blank"
            >
              Here <i className="fa-brands fa-github fa-lg"></i>
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
