import './../../assets/Home-sec1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState,useEffect } from 'react';
import { Pagination, Autoplay } from "swiper";
import { popularApi } from '../../api/api';


import "swiper/css/pagination";
import 'swiper/css'
import 'swiper/css/autoplay'
import axios from 'axios';


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
        <div className='section-img'>
            <div className='section-bg'>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    modules={[Pagination,Autoplay]}
                    delay={3000}
                    pagination={{
                    type: "progressbar",
                }}
                >
                    
                            <SwiperSlide>
                                
                    </SwiperSlide>
                    
                     
                    
               </Swiper>
            </div>
        </div>
    )
}