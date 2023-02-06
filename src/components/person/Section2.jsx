import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiKey, baseImgUrl } from '../../api/api';

const Section2 = ({ arr }) => {
    return (
        <div className='container mx-auto mt-16'>
            <div className='mb-2 font-bold text-lg'>
                Movies
            </div>
            <Swiper slidesPerView={5} spaceBetween={10}>
                {
                    arr.map((item) => {
                        return (  
                            <SwiperSlide>
                                <NavLink key={item.id} to={`/movies/${item.id}`}>
                                    <div>
                                        {
                                            item.backdrop_path == null ? <div style={{width:250,height:138 ,backgroundColor:'#d7d7d7'}} className='rounded-lg'></div> :
                                            <img className='shadow rounded-lg' src={`${baseImgUrl}w1280${item.backdrop_path}${apiKey}`} alt={item.original_title} />
                                        }
                                    </div>
                                        <div className='mt-4 text-center'>
                                            {item.original_title}
                                        </div>
                                </NavLink>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div class="flex justify-center"><div class="line-breaker mt-4"></div></div>
        </div>
    );
}

export default Section2;
