import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div className="navigation-links">
      <h1>
        <Link to="">Guidr</Link>
      </h1>
      <div className="links-container">
        <Link to="">Home</Link>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
