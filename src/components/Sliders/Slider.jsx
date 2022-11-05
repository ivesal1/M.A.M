import { SwiperSlide ,Swiper } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper';
import { baseImgUrl } from '../../api/api';
import { NavLink } from 'react-router-dom';


const Slider = ({ alt,arr,module,size,slides,space }) => {
    return (
        <>
            <Swiper slidesPerView={slides} spaceBetween={space} modules={[module]} autoplay={true} delay={5000}>
                        {arr.map((item , index) => {
                            return (
                                <SwiperSlide>
                                    <NavLink to={`Movies/${item.id}`}>
                                        <img className='front-slider rounded-xl' key={index} src={`${baseImgUrl}/${size}${item.backdrop_path}`} alt={alt} />
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })}
            </Swiper>
        </>
    );
}

export default Slider;
