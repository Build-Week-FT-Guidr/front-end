import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import axiosWithAuth from './utils/axiosWithAuth';


import "./App.scss";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavigationLinks from "./Components/Navigation/NavigationLinks";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import TripCard from "./Components/TripCard";
import NewTrip from "./Components/NewTrip";



function App() {
  useEffect(() => {
    axiosWithAuth()
    .get('/users/')
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <NavigationLinks />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/trip" component={TripCard} />
      <Route path="/newtrip" component={NewTrip} />
      <Footer />
    </div>
  );
}

export default App;
