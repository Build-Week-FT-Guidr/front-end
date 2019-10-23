import React from 'react';

const EditTrip = () => {

    return(
        <>
        <form>
            <input
                placeholder='trip title'
                type='text'
                name='title'
                value=''
                onChange=''
            />
            <input 
                placeholder='trip description'
                type='text'
                name='description'
                value=''
                onChange=''  
            />
            <input
                placeholder='is this a private trip?'
                type="radio"
                name="isPrivate"
                value=""
                onChange=""   
            />
            <input
                placeholder='professional trip?'
                type="radio"
                name="isProfessional"
                value=""
                onChange=""   
            />
            <input
                placeholder='trip distance'
                type="text"
                name="distance"
                value=""
                onChange=""   
            />
            <input
                placeholder='trip date'
                type="text"
                name="date"
                value=""
                onChange=""   
            />
            <input
                placeholder='trip type'
                type="text"
                name="trip type"
                value=""
                onChange=""   
            />
        </form>
        </>
    )
};

export default EditTrip;