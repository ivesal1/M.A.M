import './../../assets/Home-sec1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { popularApi } from '../../api/api';
import { baseImgUrl } from '../../api/api';
import { NavLink } from 'react-router-dom';

import "swiper/css/pagination";
import 'swiper/css'
import 'swiper/css/autoplay'


export default function Section1() {
    const [movies, setMovies] = useState([])
    const getMovies = async  () => {
        const { data } = await axios.get(popularApi)
        setMovies(data.results)
    }
    useEffect(() => {
        getMovies()
        console.log(movies);
    }, []);
    

    return (
        <div className='section-img relative'>
            <div className='section-bg relative'>
                <div className='relative'>
                    <Swiper
                        slidesPerView={1}
                        autoplay={true}
                        modules={[Pagination,Autoplay]}
                        delay={5000}
                        pagination={{
                        type: "progressbar",
                    }}
                    >
                            {movies.map((item,index) => {
                                return (
                                        <SwiperSlide key={item.id}>
                                            <div className='reletive'>
                                                <img className="back-slider" src={`${baseImgUrl}/w1280${item.backdrop_path}`} alt={item} />
                                            <div className='des bottom-44 left-10 absolute w-1/6 z-20'>
                                                <div className='text-4xl font-bold'>{ item.title}</div>
                                                    <p className='text-justify text-lg font-medium'>
                                                        {
                                                            item.overview.substring(0,100) + ' ...'
                                                        }
                                                    </p>
                                                    <NavLink to={`/movies/${item.id}`}>
                                                        <div>
                                                            <button className='home-button mb-8'>See More</button>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="grandient-blur absolute top-0 z-10"></div>
                                        </SwiperSlide>
                                    ) 
                                })}
                        </Swiper>
                </div>
                <div className='absolute w-full bottom-5 z-10 px-10'>
                    <div className='text-white text-xl font-black mb-2'>
                        featured
                    </div>
                    <Swiper slidesPerView={6} spaceBetween={20} modules={[Autoplay]} autoplay={true} delay={5000}>
                    {
                        movies.map((item) => {
                            return (
                                <SwiperSlide>
                                    <NavLink to={`movies/${item.id}`}>
                                        <img className='rounded-lg' src={`${baseImgUrl}w300/${item.backdrop_path}`} alt={item.original_title} />
                                    </NavLink>
                                </SwiperSlide>                                
                            )
                        })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}