import React from 'react';
import lazy from '../../../images/lazy mechanic.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>No Service, Mechanic is Sleeping</h2>
            <img className='w-100' src={lazy} alt="" />
        </div>
    );
};

export default NotFound;