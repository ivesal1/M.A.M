import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiKey, baseImgUrl, baseUrl } from '../../api/api';
import 'swiper/css'
import { NavLink } from 'react-router-dom';


const Section2 = () => {
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    
    async function handleTopRated() {
        const { data } = await axios.get(`${baseUrl}movie/top_rated${apiKey}&language=en-US&page=1`)
        setTopRated(data.results)
        console.log(data);
    }
    async function handleUpcoming() {
        const { data } = await axios.get(`${baseUrl}movie/upcoming${apiKey}&language=en-US&page=1`)
        console.log(data);
        setUpcoming(data.results)
    }
    useEffect(() => {
        handleTopRated()
        handleUpcoming()
    },[])

    return (
        <div className='container mx-auto'>
            <div className='mt-8'>
                <div className='mb-4 text-xl font-bold'>
                    Top Rated
                </div>
                <Swiper slidesPerView={5} spaceBetween={20}>
                    {
                        topRated.map((item) => {
                            return (
                                <SwiperSlide>
                                    <NavLink to={`movies/${item.id}`}>
                                        <img src={`${baseImgUrl}w1280/${item.backdrop_path}`} alt={item.title} className='rounded-lg shadow-xl' />
                                        <div className='mt-4 text-center'>
                                            {item.title}
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>            
            <div style={{ width: '90vw', height: 1, backgroundColor: '#d9d9d9' }} className='mt-8'></div>
            <div className='mt-8 mb-4 text-xl font-bold'>
                    Upcoming
            </div>
            <div>
                <Swiper slidesPerView={5} spaceBetween={20}>
                    {
                         upcoming.map((item) => {
                            return (
                                <SwiperSlide>
                                    <NavLink to={`movies/${item.id}`}>
                                        <img src={`${baseImgUrl}w1280/${item.backdrop_path}`} alt={item.title} className='rounded-lg shadow-xl' />
                                        <div className='mt-4 text-center'>
                                            {item.title}
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Section2;
