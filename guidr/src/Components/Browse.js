import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserCard from './UserCard';

const Browse = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
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