import React from 'react';
import {
    CheckCircleIcon
} from '@heroicons/react/solid';

const Benefit = (props) => {

    return (
        <div>
            <p className='flex items-center'>
                    <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
                    {props.benefit}
                </p>
        </div>
    );
};

export default Benefit;