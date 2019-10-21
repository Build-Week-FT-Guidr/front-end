import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <div>
      <Link to="">Home</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Sign Up</Link>
    </div>
  );
};

export default NavigationLinks;
