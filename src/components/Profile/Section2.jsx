import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { baseImgUrl } from '../../api/api';
import 'swiper/css'
import { NavLink } from 'react-router-dom';



const Section2 = ({arr ,src ,name ,title}) => {
    return (
        <div>
            <div className='mt-8'>
                <h2 className='text-2xl font-black'>Lists</h2>
                <div>
                    <Swiper slidesPerView={5} spaceBetween={16}>
                    {
                            arr.map((item) => {
                                return (
                                    <SwiperSlide>
                                            <NavLink to={`/movies/${item.id}`}>
                                            <img className='rounded-lg' src={`${baseImgUrl}w1280/${item.backdrop_path}`} alt={item.name} />
                                            <div className='text-sm text-center mt-2'>{ item.original_title }</div>
                                    </NavLink>
                                        </SwiperSlide>
                            )
                            })
                    }
                    </Swiper>
                </div>
            </div>
            <div style={{width:'90vw',height:1,backgroundColor:'#d9d9d9'}} className='mt-8'></div>
        </div>
    );
}

export default Section2;
