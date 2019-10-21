import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavigationLinks from "./Components/Navigation/NavigationLinks";
import Profile from "./Components/Navigation/Profile";

function App() {
  return (
    <div className="App">
      <NavigationLinks />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}

export default App;
