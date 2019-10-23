import React, {useEffect, useState} from "react";
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
import Browse from './Components/Browse'

import UserContext from './contexts/UserContext';
import UsersTripsContext from './contexts/UsersTripsContext';



function App() {
  const [users, setUsers] = useState([])
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/users')
    .then(res => {
      console.log(res)
      setUsers(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axiosWithAuth()
    .get('/users/1/trips')
    .then(res => {
      console.log(res)
      setUserTrips(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <NavigationLinks />
      <UserContext.Provider value={users}>
        <UsersTripsContext.Provider value={userTrips}>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/trip" component={TripCard} />
        <Route path="/newtrip" component={NewTrip} />
        <Route path='/browse' component={Browse} />
        </UsersTripsContext.Provider>
      </UserContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
