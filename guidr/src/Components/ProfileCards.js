import React from 'react';

const ProfileCards = props => {
    console.log(props, 'usercard props')
    return (
        <div className='profile-card'>
        <h1>{props.item.title}</h1>
        <h4>{props.item.guideSpecialty}</h4>
        <p>{props.item.tagline}</p>
        <p>{props.item.yearsExperience} years experience</p>
        </div>
    )
}

export default ProfileCards;