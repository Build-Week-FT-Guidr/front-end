import React from "react";
import { Link } from "react-router-dom";
import header_image from "./Assets/images/home_banner.png";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <img src={header_image} className="home-img " />
      <div className="button-container">
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
