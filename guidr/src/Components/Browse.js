import React, { useState, useEffect } from 'react';

import UserCard from './UserCard';
import axiosWithAuth from '../utils/axiosWithAuth';

const Browse = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axiosWithAuth()
        .get(`https://guidr-bw.herokuapp.com/users/`)
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='browse-container'>
            {
                users.map(item => (
                    <UserCard item={item}/>
                ))
            }
        </div>
    )
}

export default Browse;