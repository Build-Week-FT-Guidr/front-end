import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserCard = props => {
    const [userTrips, setUserTrips] = useState([])
    useEffect(() => {
        axios
        .get(`https://guidr-bw.herokuapp.com/users/${props.item.id}/trips`)
        .then(res => {
            console.log(res)
            setUserTrips(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1>{props.item.username}</h1>
        <ul>
            {userTrips.map(trip => (
                <li>{trip.title}</li>
            ))}
        </ul>
        </>
    )
}

export default UserCard;