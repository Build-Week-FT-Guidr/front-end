import React, {useState, useEffect, useContext} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AllTripsContext from '../contexts/AllTripsContext';


const CompleteProfile = (props) => {
    const [trip, setTrip] = useState({})
    const {allTrips} = useContext(AllTripsContext);
    const {setAllTrips} = useContext(AllTripsContext)
    const [profileToEdit, setProfileToEdit] = useState({})

    

    const handleChanges = e => {
        setProfileToEdit({
            ...profileToEdit,
            [e.target.name]: e.target.value
        })
        console.log(profileToEdit)
    };
   

    const submitChanges = e => {
        e.preventDefault()
        axiosWithAuth()
        .post(`/users/${props.match.params.id}/profile`, profileToEdit)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    return(
        <>
        <h1>Complete Profile</h1>
        <form className='newtrip-form-container'>
            <input
                placeholder='Title'
                type='text'
                name='title'
                value={profileToEdit.title}
                onChange={handleChanges}
            />
            <input
                placeholder='Tagline'
                type='text'
                name='tagline'
                value={profileToEdit.tagline}
                onChange={handleChanges}  
            />
            <input
                placeholder='Specialty'
                type="text"
                name="guideSpecialty"
                value={profileToEdit.guideSpecialty}
                onChange={handleChanges}   
            />
            <input
                placeholder='Age'
                type="number"
                name="age"
                value={profileToEdit.age}
                onChange={handleChanges}   
            />
            <input
                placeholder='Years of experience'
                type="number"
                name="yearsExperience"
                value={parseInt(profileToEdit.yearsExperience)}
                onChange={handleChanges}   
            />
            <button onClick={submitChanges}>Submit changes</button>
        </form>
        </>
    )
};

export default CompleteProfile;