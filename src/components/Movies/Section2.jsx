import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseImgUrl } from '../../api/api';
import './../../assets/MoviesPage-sec2.css'

const Section2 = ({arr, TrailerSrc}) => {
    return (
        <div className=''>
            <div className='pl-10 mt-9 text-xl font-bold'>
                Trailer
            </div>
            <div className='mx-auto mt-6 px-10'>
                <Swiper slidesPerView={4} spaceBetween={16}>
                        {
                        arr.map((item, index) => {
                            return (
                                    <SwiperSlide>
                                        <iframe className='rounded-2xl trailer flex justify-center' key={index} src={`https://www.youtube.be/embed/${item.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </div>
            <div className='flex justify-center'>
                <div className='line-breaker mt-12'></div>
            </div>
            <div className='flex justify-center rounded-3xl mt-9'>
                <img className='poster-movie rounded-3xl' src={`${baseImgUrl}/w1280${TrailerSrc}`} alt="title"/>
            </div>
            <div className='flex justify-center'>
                <div className='line-breaker mt-9'></div>
            </div>
        </div>
    );
}

export default Section2;
