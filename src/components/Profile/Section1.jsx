import React from 'react';
import { baseImgUrl } from '../../api/api';
import './../../assets/profile.css'

const Section1 = ({avatar ,name ,user}) => {
    return (
        <div>
            <div>
                <h1 className='mt-20'>
                    Account
                </h1>
                <div className='mt-2'>
                    <div style={{width:'90vw',height:1,backgroundColor:'#d9d9d9'}}></div>
                </div>
                <div className='text-2xl mt-8'>
                    Details
                </div>
                <div className='flex'>
                    <div className='mt-8'>    
                        <svg width="300" height="300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM12 7C12 7.53043 11.7893 8.03914 11.4142 8.41421C11.0391 8.78929 10.5304 9 10 9C9.46957 9 8.96086 8.78929 8.58579 8.41421C8.21071 8.03914 8 7.53043 8 7C8 6.46957 8.21071 5.96086 8.58579 5.58579C8.96086 5.21071 9.46957 5 10 5C10.5304 5 11.0391 5.21071 11.4142 5.58579C11.7893 5.96086 12 6.46957 12 7ZM10 11C9.0426 10.9998 8.10528 11.2745 7.29942 11.7914C6.49356 12.3083 5.85304 13.0457 5.454 13.916C6.01668 14.5706 6.71427 15.0958 7.49894 15.4555C8.28362 15.8152 9.13681 16.0009 10 16C10.8632 16.0009 11.7164 15.8152 12.5011 15.4555C13.2857 15.0958 13.9833 14.5706 14.546 13.916C14.147 13.0457 13.5064 12.3083 12.7006 11.7914C11.8947 11.2745 10.9574 10.9998 10 11Z" fill="#3F3F46"/>
                        </svg>
                    </div>
                    <div className='mt-8 mx-8' style={{height: 300, width: 1, backgroundColor:'#d7d7d7'}}></div>
                    <div className='text-2xl mt-16 flex flex-col'>
                        <div>
                            <span className='text-lg'>name</span> : {name}
                        </div>
                        <div className='mt-5'>
                            <span className='text-lg'>user name</span> : {user}
                        </div>
                    </div>
                </div>
                <div style={{width:'90vw',height:1,backgroundColor:'#d9d9d9'}} className='mt-8'></div>
            </div>
        </div>
    );
}

export default Section1;
