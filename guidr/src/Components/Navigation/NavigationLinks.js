import React from "react";
import { Link } from "react-router-dom";

const NavigationLinks = props => {
  const id = localStorage.getItem("id");

  const logOut = () => {
    if (id) {
      if (window.confirm("Are you sure you want to log out?")) {
        props.history.push("/");
        localStorage.clear();
      }
    }
  };

  return (
    <div className="navigation-links">
      <h1>
        <Link to="">Guidr</Link>
      </h1>
      <div className="links-container">
        <Link to="">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to={`/profile/${id}`}>My Profile</Link>
        <Link onClick={logOut}>Log Out</Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
