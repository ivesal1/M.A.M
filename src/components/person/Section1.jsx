import React from 'react';
import { baseImgUrl } from '../../api/api';
import './../../assets/person.css'

const Section1 = ({profile ,des}) => {
    return (
        <div>
            <div className='bg-gradient '>
                <div className='flex justify-between container mx-auto w-2/4 items-center px-10'>
                    <div className='mt-32 mr-10'> <img className='rounded-full' src={`${baseImgUrl}w185/${profile}`} alt={des} /></div>
                    <div className='mt-32 w-full h-44 overflow-auto'>{ des}</div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
