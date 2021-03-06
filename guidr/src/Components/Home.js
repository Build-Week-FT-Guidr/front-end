import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="heading-container">
        <h1>Build Your Outdoor Resume</h1>
      </div>
      <div className="button-container">
        <Link to="/login">
          <button>Log In</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link id='browse-btn' to='/browse'>
          <button>Browse</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
