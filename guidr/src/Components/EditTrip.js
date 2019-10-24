import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditTrip = () => {
    const [trip, setTrip] = useState({isPrivate: false, isProfessional: true})

    useEffect(() => {
        axiosWithAuth()
        .get('users/1/trips/') 
        .then(res => {
            console.log(res, 'trip')
            setTrip(res.data[0])
            //could eventually set the trip fields to state and populate them
        })
    }, [])
    
    const handleChanges = e => {
        setTrip({
            ...trip,
            [e.target.name]: e.target.value
        })
        console.log(trip)
    };
   
    const isPrivateChange = e => {
        if (trip.isPrivate === true){
            setTrip({
                ...trip,
                isPrivate: false
            })
        } else {
            setTrip({
                ...trip,
                isPrivate: true
            })
        }
        console.log(trip)
    };

    const isProfessionalChange = e => {
        if (trip.isProfessional === true){
            setTrip({
                ...trip,
                isProfessional: false
            })
        } else {
            setTrip({
                ...trip,
                isProfessional: true
            })
        }
        console.log(trip)
    };

    const submitChanges = e => {
        e.preventDefault();
    }
    return(
        <>
        <h1>Edit Trip</h1>
        <form className='newtrip-form-container'>
            <input
                placeholder='trip title'
                type='text'
                name='title'
                value={trip.title}
                onChange={handleChanges}
            />
            <textarea
                placeholder='trip description'
                type='text'
                name='description'
                value={trip.description}
                onChange={handleChanges}  
            />
            <p>is this private?
            <input
                className='private-check'
                placeholder='is this a private trip?'
                type="checkbox"
                name="isPrivate"
                value={trip.isPrivate}
                onChange={isPrivateChange}
                checked={trip.isPrivate}
            />
            </p>
            <p> is this professional?
            <input
                className='professional-check'
                placeholder='professional trip?'
                type="checkbox"
                name="isProfessional"
                value={trip.isProfessional}
                onChange={isProfessionalChange} 
                checked={trip.isProfessional}  
            />
            </p>
            <input
                placeholder='trip distance'
                type="text"
                name="distance"
                value={trip.distance}
                onChange={handleChanges}   
            />
            <input
                placeholder='trip date'
                type="text"
                name="date"
                value={trip.date}
                onChange={handleChanges}   
            />
            <input
                placeholder='trip type'
                type="text"
                name="trip type"
                value={trip.type}
                onChange={handleChanges}   
            />
            <button onClick={submitChanges}>Submit changes</button>
        </form>
        </>
    )
};

export default EditTrip;