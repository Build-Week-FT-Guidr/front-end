import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import GuidePic from "./Assets/images/Guide.png";
import UsersContext from "../contexts/UserContext";
import UsersTripsContext from "../contexts/UsersTripsContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import AllTripsContext from "../contexts/AllTripsContext";
const Profile = (props) => {
  console.log(props.match.params.id)
  
  // Set state for the search query and the data so that it can be re-render on useeffect change
  const [searchQuery, setSearchQuery] = useState("");

  const {allTrips} = useContext(AllTripsContext);
  const {setAllTrips} = useContext(AllTripsContext)
  const users = useContext(UsersContext)
  console.log(users, 'users context')
  const [user, setUser] = useState({})
  const [profileToEdit, setProfileToEdit] = useState({})

const stringId = parseInt(props.match.params.id)
const usersTrips = allTrips.filter(trip => trip.user_id === stringId)
console.log(usersTrips, 'userstrips')

useEffect(() => {
  axiosWithAuth()
  .get(`/users/${props.match.params.id}`)
  .then(res => {
    console.log(res, 'PROFILE DATA')
    setUser(res.data)
  })
}, [users])

useEffect(() => {
  axiosWithAuth()
  .get(`/users/${props.match.params.id}/profile`)
  .then(res => {
    console.log(res, 'profile to edit response')
    if (res.data[0]) {
      setProfileToEdit(res.data[0])
    } else {
      setProfileToEdit({
        title: '',
        tagline: '',
        guideSpecialty: '',
        age: '',
        yearsExperience: ''
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
}, [])

console.log(profileToEdit, 'profileToEdit')


  

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
          <h3 className="profile-name">{user.username}</h3>
          <h4 className="profile-title">{profileToEdit.title}</h4>
          <p className="tagline">{profileToEdit.tagline}</p>
          <h4 className="profile-specialty">{profileToEdit.guideSpecialty}</h4>
          <p>{`${profileToEdit.yearsExperience} years experience`}</p>
          <div className="button-profile-container">
            <Link to="/newtrip">
              <button>Add Trip</button>
            </Link>
            <Link to={`/completeprofile/${props.match.params.id}`}>
              <button>Complete Profile</button>
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

        {usersTrips.map(item => {
          const deleteTrip = () => {
            axiosWithAuth()
            .delete(`/trips/${item.id}`)
            .then(res => {
              axiosWithAuth()
                .get(`/trips`)
                .then(res => {
                  setAllTrips(res.data)
                })
                .catch(err => console.log(err))

            //end outer then
          })
            .catch(err => console.log(err))
          }
          return (
            <div className="trip-card" key={item.id}>
              <Link to={`/trip/${item.id}`}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.date}</p>
                <p>distance: {item.distance}</p>
                <button>Edit Trip</button>
            </Link>
            <button onClick={deleteTrip}>Delete Trip</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Profile;

