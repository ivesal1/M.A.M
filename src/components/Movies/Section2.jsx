import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseImgUrl } from '../../api/api';
import './../../assets/MoviesPage-sec2.css'
import 'swiper/css'


const Section2 = ({ arr, TrailerSrc, des, src, arr2 }) => {
    const [changeImg ,setChageImg] = useState('')
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
            <div className='flex justify-center flex-col items-center rounded-3xl mt-9 relative'>
                <img className='poster-movie rounded-3xl' src={changeImg ? changeImg : `${baseImgUrl}/w1280${TrailerSrc}`} alt="title" />
                <div className='absolute top-10 z-10 left-32 text-white w-1/2'>
                    <div className='text-2xl font-bold'>
                        {des}
                    </div>
                </div>
                <div className='w-full absolute bottom-8 left-7 px-20'>
                    <Swiper slidesPerView={5} spaceBetween={1}>
                        {
                            arr2.map((item ,index) => {
                                return (
                                    <SwiperSlide>
                                        <img onClick={(e) => setChageImg(e.target.src)} className='object-cover object-top rounded-lg cursor-pointer' style={{width:200,height:100}} src={`${baseImgUrl}w1280${item.file_path}`} alt={item.title}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div style={{ width: 900, height:495 ,filter: 'blur(20px)', opacity: .5 }} className="bg-black absolute top-0 left-20 rounded-r-full"></div>
            </div>
            <div className='flex justify-center'>
                <div className='line-breaker mt-9'></div>
            </div>
        </div>
    );
}

export default Section2;
