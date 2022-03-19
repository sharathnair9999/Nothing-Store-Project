import React from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import NewLaunches from "../../components/NewLaunches/NewLaunches";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div>
     <div className="landing-section flex"> 
      <section className="landing-text">
        <h3>Nothing for Everything</h3>
        <p>
          You need Nothing but
          <strong><Link to={"/products"}>&nbsp; Nothing Store</Link></strong> for all your
          electronic gadget needs at a perfect pricing and mind-boggling offers.
        </p>
        <br />
        <Link to={"/products"} className="btn">Get Started</Link>
      </section>
    </div>
    <Categories/>
    <NewLaunches/>
    <Footer/>
    </div>
  );
};

export default HomePage;
