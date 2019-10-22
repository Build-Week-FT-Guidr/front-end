import React from 'react';
import {Link} from 'react-router-dom'
const Profile = () => {
 const dummyTrips = [{
     title: 'my house',
     description: 'I gave a comfortable tour of my house in AC',
     isPrivate: false,
     isProfessional: true,
     images: '',
     distance: "50m",
     date: '15 October 2019 ',
     tripType: 'short stroll in AC',
     id: 1
 },
 {
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 2
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 3
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 4
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 5
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 6
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 7
},
{
    title: 'my house',
    description: 'I gave a comfortable tour of my house in AC',
    isPrivate: false,
    isProfessional: true,
    images: '',
    distance: "50m",
    date: '15 October 2019 ',
    tripType: 'short stroll in AC',
    id: 8
}
]
    return(
        <>
            <section className='profile-header'>
                <div className = 'profile-pic-half'>
                    <img src="img"/>
                </div>
                <div className='guide-info-half'>
                    <h3 className='profile-name'>Guide Name</h3>
                    <h4 className='profile-title'>title</h4>
                    <h4 className='profile-specialty'>specialty</h4>
                    <p>___ years of experience</p>
                    <button>Add Trip</button>
                </div>
            </section>
            <h3 className='trips-section-title'>Trips</h3>
            <div className='trips-container'>
                {/* map through trips in here */}
                
                {dummyTrips.map(item => {
                    return(
                    <div className='trip-card'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <p>distance: {item.distance}</p>
                    </div>
                    )
                })}
            </div>
        </>
    )
};
export default Profile;
