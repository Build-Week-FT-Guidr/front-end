import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <h1>
        Thank you for signing up. You can now login to your profile{" "}
        <Link to="/login">here</Link>.
      </h1>
    </div>
  );
};

export default ThankYou;
