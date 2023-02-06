import React from 'react';
import { NavLink } from 'react-router-dom';
import {Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { baseImgUrl } from '../../api/api';

const Section3 = ({arr}) => {
    return (
        <div className='px-20 mt-8'>
            <div className='mb-4 font-bold text-xl'>
                Casts
            </div>
            <Swiper slidesPerView={10} spaceBetween={20}>
                {
                    arr.map((item) => {
                        return (
                            <SwiperSlide>
                                <div>
                                    <NavLink to={`/person/${item.id}`}>
                                    {                                        
                                        item.profile_path == null ? <div style={{width:110,height:170 ,backgroundColor:'#d7d7d7'}} className='rounded-full'></div> : 
                                        <img className='rounded-full shadow-xl' src={`${baseImgUrl}w185${item.profile_path}`} alt={item.name } />                                            
                                    }
                                        </NavLink>
                                </div>
                                <div className='text-center mt-2'>
                                    {item.name}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Section3;
