import './../../assets/Home-sec1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { popularApi } from '../../api/api';
import { baseImgUrl } from '../../api/api';
import { NavLink } from 'react-router-dom';
import Slider from '../Sliders/Slider';

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
    const slider = movies.splice(0, 5)
    const scondSlider = movies.splice(0, 10)

    return (
        <div className='section-img'>
            <div className='section-bg relative'>
                <div>
                    <Swiper
                        slidesPerView={1}
                        autoplay={true}
                        modules={[Pagination,Autoplay]}
                        delay={5000}
                        pagination={{
                        type: "progressbar",
                    }}
                    >
                            {slider.map((item,index) => {
                                return (
                                        <SwiperSlide key={item.id}>
                                            <div className='reletive'>
                                                <img className="back-slider" src={`${baseImgUrl}/w1280${item.backdrop_path}`} alt={item} />
                                            <div className='des bottom-44 left-10 absolute w-1/6'>
                                                <div className='text-4xl font-bold'>{ item.title}</div>
                                                    <p className='text-justify text-xl'>
                                                        {
                                                            item.overview.substring(0,100) + ' ...'
                                                        }
                                                    </p>
                                                    <div>
                                                        <NavLink to={`/Movies/${item.id}`}>
                                                            <button className='home-button'>See More</button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ) 
                                })}
                        </Swiper>
                </div>
                <div className='absolute w-full bottom-5 z-10 px-10'>
                    <Slider arr={scondSlider} slides={6} space={20} size="w300" module={Autoplay} />
                </div>
            </div>
        </div>
    )
}