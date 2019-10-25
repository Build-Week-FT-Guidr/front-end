import React, { useState, useEffect } from 'react';

import ProfileCards from './ProfileCards';
import axios from 'axios';

const Browse = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
        .get(`https://guidrinfo.herokuapp.com/profiles`)
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
                    <ProfileCards item={item}/>
                ))
            }
        </div>
    )
}

export default Browse;