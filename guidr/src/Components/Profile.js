import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import GuidePic from "./Assets/images/Guide.png";
import UsersContext from "../contexts/UserContext";
import UsersTripsContext from "../contexts/UsersTripsContext";
import axiosWithAuth from "../utils/axiosWithAuth";
const Profile = (props) => {
  
  // Set state for the search query and the data so that it can be re-render on useeffect change
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState([]);

  const users = useContext(UsersContext)
  const [profile, setProfile] = useState({})
  useEffect(() => {
    axiosWithAuth()
    .get(`/users/${props.match.params.id}/trips`)
    .then(res => {
      console.log(res, 'user trips array')
      setTrips(res.data)
      setProfile(res.data[0])
    })
  }, [])






  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  // useEffect(() => {
  //   const trips = dummyTrips.filter(trip =>
  //     trip.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setTripData(trips);
  // }, [searchQuery]);

  return (
    <>
      <section className="profile-header">
        <div className="profile-pic-half">
          <img src={GuidePic} alt="Guide Name" />
        </div>
        <div className="guide-info-half">
          <h3 className="profile-name">{profile.username}</h3>
          <h4 className="profile-title">title</h4>
          <p className="tagline">Profile Tagline</p>
          <h4 className="profile-specialty">specialty</h4>
          <p>___ years of experience</p>
          <div className="button-profile-container">
            <Link to="/newtrip">
              <button>Add Trip</button>
            </Link>
            <Link to="/editguide">
              <button>Edit Guide</button>
            </Link>
          </div>
        </div>
      </section>
      <h3 className="trips-section-title">Trips</h3>
      <SearchForm
        placeholder="Search Trips..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="trips-container">
        {/* map through trips in here */}

        {trips.map(item => {
          return (
            <Link to="/trip">
              <div className="trip-card" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.date}</p>
                <p>distance: {item.distance}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Profile;


// const dummyTrips = [
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 1
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 2
//   },
//   {
//     title: "Las Vegas",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 3
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 4
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 5
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 6
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 7
//   },
//   {
//     title: "my house",
//     description: "I gave a comfortable tour of my house in AC",
//     isPrivate: false,
//     isProfessional: true,
//     images: "",
//     distance: "50m",
//     date: "15 October 2019 ",
//     tripType: "short stroll in AC",
//     id: 8
//   }
// ];
