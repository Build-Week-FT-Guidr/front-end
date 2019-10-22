import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavigationLinks from "./Components/Navigation/NavigationLinks";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import TripCard from "./Components/TripCard";

function App() {
  return (
    <div className="App">
      <NavigationLinks />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/trip" component={TripCard} />
      <Footer />
    </div>
  );
}

export default App;
