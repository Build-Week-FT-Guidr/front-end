import React, {useState, useEffect, useContext} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AllTripsContext from '../contexts/AllTripsContext';


const EditTrip = (props) => {
    const [trip, setTrip] = useState({})
    const {allTrips} = useContext(AllTripsContext);
    const {setAllTrips} = useContext(AllTripsContext)



    // const tripToEdit = allTrips.filter(trip => trip.id === parseInt(props.match.params.id))
    useEffect(() => {
        axiosWithAuth()
        .get(`/trips/${props.match.params.id}`)
        .then(res => setTrip(res.data))
        .catch(err => console.log(err))
    },[])



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
        e.preventDefault()
        axiosWithAuth()
        .put(`/trips/${props.match.params.id}`, trip)
        .then(res => {
            props.history.push(`/profile/${trip.user_id}`)
            axiosWithAuth()
                .get(`/trips`)
                .then(res => {
                  setAllTrips(res.data)
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
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
                name="tripType"
                value={trip.tripType}
                onChange={handleChanges}   
            />
            <button onClick={submitChanges}>Submit changes</button>
        </form>
        </>
    )
};

export default EditTrip;