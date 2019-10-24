import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";

import "./App.scss";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavigationLinks from "./Components/Navigation/NavigationLinks";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import TripCard from "./Components/TripCard";
import NewTrip from "./Components/NewTrip";
import EditTrip from "./Components/EditTrip";
import Browse from "./Components/Browse";
import ThankYou from "./Components/ThankYou";

import UserContext from "./contexts/UserContext";
import UsersTripsContext from "./contexts/UsersTripsContext";
import AllTripsContext from './contexts/AllTripsContext';
import PrivateRoute from "./Components/PrivateRoute";
import CompleteProfile from "./Components/CompleteProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [userTrips, setUserTrips] = useState([]);
  const [allTrips, setAllTrips] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/users/1/trips")
      .then(res => {
        setUserTrips(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
    .get(`/trips`)
    .then(res => {
      setAllTrips(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Route path="/" component={NavigationLinks} />

    <AllTripsContext.Provider value={{allTrips, setAllTrips}}>
      <UserContext.Provider value={users}>
        <UsersTripsContext.Provider value={userTrips}>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/profile/:id" component={Profile} />
          <Route path="/trip" component={TripCard} />
          <PrivateRoute path="/newtrip" component={NewTrip} />
          <Route path="/trip/:id" component={EditTrip} />
          <Route path='/completeprofile/:id' component={CompleteProfile} />
          <Route path="/browse" component={Browse} />
          <Route path="/thankyou" component={ThankYou} />
        </UsersTripsContext.Provider>
      </UserContext.Provider>
   </AllTripsContext.Provider>  

      <Footer />
    </div>
  );
}

export default App;
