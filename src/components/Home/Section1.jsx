import './../../assets/Home-sec1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { popularApi } from '../../api/api';
import { baseImgUrl } from '../../api/api';
import { Link } from 'react-router-dom';

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
    const overview = slider.map((item) => {
        item.overview.substring(0,80)
    });

    return (
        <div className='section-img'>
            <div className='section-bg'>
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
                                <SwiperSlide>
                                    <div className='reletive'>
                                        <img key={index} src={`${baseImgUrl}w1280${item.backdrop_path}`} />
                                        <div className='des bottom-20 left-10 absolute w-1/4'>
                                            <p>
                                                {
                                                    item.overview.substring(0,100)
                                                }
                                            </p>
                                            <div>
                                                <Link to={`/Movies/${item.id}`}>
                                                    <button>See More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ) 
                        })}
               </Swiper>
            </div>
        </div>
    )
}