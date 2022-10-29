import './../../assets/Home-sec1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';
import { Pagination, Autoplay } from "swiper";


import "swiper/css/pagination";
import 'swiper/css'
import 'swiper/css/autoplay'


export default function Section1() {
    const imgSrc = [
        {url: 'https://www.apple.com/au/tv-pr/shows-and-films/t/ted-lasso/images/season-2/show-home-graphic-header/4x1/Apple_TV_Ted_Lasso_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1663268754815',title:'Ted Lasso',des:'Winner of 11 Emmy® Awards, including back-to-back Outstanding Comedy Series wins (2021, 2022).'},
        {url: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',title:'Title',des:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {url: 'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60',title:'Title',des:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ]

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
                    {imgSrc.map((item, i) => {
                        const {url, title, des } = item
                        return (
                            <SwiperSlide key={i}>
                                <div className='adjust-bg'>
                                    <img className='sec-bg' src={url} alt="" />
                                    <div className='adjust-text'>
                                        <div className='title'>{title}</div>
                                        <div className='des'>{des}</div>
                                        <div>
                                            <button className='bg-black'>
                                                See More
                                            </button>
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