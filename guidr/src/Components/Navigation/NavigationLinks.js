import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = (props) => {
  const id = localStorage.getItem('id')
  console.log(props)
  
  return (
    <div className="navigation-links">
      <h1>
        <Link to="">Guidr</Link>
      </h1>
      <div className="links-container">
        <Link to="">Home</Link>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
        <Link to={`profile/${id}`}>My Profile</Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
