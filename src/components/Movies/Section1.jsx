import axios from "axios";
import { apiKey, baseImgUrl, baseUrl } from "../../api/api";
import './../../assets/MoviesPage-sec1.css'
const Section1 = ({ src, alt, title, des, tag, isAdult, rate, addFav, addRate }) => {

    return (
        <section className="mt-8">
            <img className="sec1-img object-cover relative" src={`${baseImgUrl}/w1280${src}`} alt={alt} />
            <div className="grandient-maker absolute top-8"></div>
            <div className="grandient-blur absolute top-8"></div>
            <div className="absolute top-20 left-10 text-5xl font-black text-white">
                {title}
            </div>
            <div className="absolute w-full bottom-2 flex justify-evenly">
                <div className=" w-full flex justify-evenly p-10">
                    <div className="w-1/4 z-10">
                        <button className="w-full movies-page-btn">
                            watch
                        </button>
                        <button onClick={addFav} className="w-full movies-page-btn mt-4">
                            Add To List
                        </button>
                        <button onClick={addRate} className="w-full movies-page-btn mt-4 flex items-center">
                            <div>{ rate }</div>
                            <div className='text-sm mb-1 ml-1'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">          
                                    <path d="M2 10.5C2 10.303 2.0388 10.108 2.11418 9.92597C2.18956 9.74399 2.30005 9.57863 2.43934 9.43934C2.57863 9.30005 2.74399 9.18956 2.92597 9.11418C3.10796 9.0388 3.30302 9 3.5 9C3.69698 9 3.89204 9.0388 4.07403 9.11418C4.25601 9.18956 4.42137 9.30005 4.56066 9.43934C4.69995 9.57863 4.81044 9.74399 4.88582 9.92597C4.9612 10.108 5 10.303 5 10.5V16.5C5 16.8978 4.84196 17.2794 4.56066 17.5607C4.27936 17.842 3.89782 18 3.5 18C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V10.5ZM6 10.333V15.763C5.99983 16.1347 6.10322 16.499 6.29858 16.8152C6.49394 17.1314 6.77353 17.3869 7.106 17.553L7.156 17.578C7.71089 17.8553 8.32267 17.9998 8.943 18H14.359C14.8215 18.0002 15.2698 17.84 15.6276 17.5469C15.9853 17.2537 16.2303 16.8456 16.321 16.392L17.521 10.392C17.579 10.1019 17.5719 9.80249 17.5002 9.51544C17.4285 9.22839 17.294 8.96082 17.1065 8.73201C16.9189 8.50321 16.6829 8.31887 16.4155 8.19229C16.148 8.0657 15.8559 8.00003 15.56 8H12V4C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V3.667C9 4.53248 8.71929 5.37462 8.2 6.067L6.8 7.933C6.28071 8.62538 6 9.46752 6 10.333Z" fill="#3F3F46" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="text-white text-xl text-justify w-full px-4 pb-6 relative z-10">
                        <div>{des}</div>
                        {isAdult === true ? <div className="text-sm bottom-0 absolute">+18</div> : <div className="text-sm bottom-0 absolute">everyone can see :) </div> }
                    </div>
                    <div className="text-white w-1/4 text-center font-bold">
                        {tag}
                    </div>
                    <div style={{filter:'blur(20px)',opacity:.3}} className="bg-black absolute  w-full h-full "></div>
                </div>
            </div>
        </section>
    );
}

export default Section1;
