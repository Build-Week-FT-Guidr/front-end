import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="heading-container">
        <h1>Mission Statement Here</h1>
      </div>
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
