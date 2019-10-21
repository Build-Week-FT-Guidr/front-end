import React from 'react';

const Profile = () => {
 const dummyTrips = [{
     title: 'my house',
     description: 'I gave a comfortable tour of my house in AC',
     isPrivate: false,
     isProfessional: true,
     images: '',
     distance: "50m",
     date: '15 October 2019 ',
     tripType: 'short stroll in AC'
 }]
    return(
        <>
            <h1>User Profile</h1>
            <div className='profile-header'>
                <h3>Guide Name</h3>
                <p>title</p>
                <p>specialty</p>
                <p>age</p>
                <p>years experience</p>
            </div>
            <div className='trips-container'>
                {/* map through trips in here */}
                <h3>Trips</h3>
                {dummyTrips.map(item => {
                    return(
                    <div className='trip-card'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <p>{item.distance}</p>
                        <button>Edit Trip</button>
                        <button>Delete Trip</button>
                    </div>
                    )
                })}
            </div>
        </>
    )
};
export default Profile;
