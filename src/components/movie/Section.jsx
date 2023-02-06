import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiKey, baseImgUrl, baseUrl } from '../../api/api';
import './../../assets/movies.css'

const Section = () => {
    const [movie, setMovie] = useState([])
    const [page ,setPage] = useState(1)

    async function handleMovies() {
        const { data } = await axios.get(`${baseUrl}movie/popular${apiKey}&language=en-US&page=${page}`)
        console.log(data);
        setMovie(data.results)
    }
    
    useEffect(() => {
       handleMovies() 
    },[page])

    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl font-bold mb-4'>
                Movies
            </h1>
            <div className='parent'>
                {
                    movie.map((item) => {
                        return (
                            <NavLink to={`/movies/${item.id}`}>
                                <div>
                                    <div>
                                        <img className='rounded-lg shadow-xl' src={`${baseImgUrl}w1280/${item.backdrop_path}`} alt="" />
                                    </div>
                                    <div className='text-center mt-4'>{ item.title}</div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className='mb-8 flex justify-center'>
                <button style={{backgroundColor:'#007AFC'}} onClick={() => setPage(page + 1)} className='mr-4 text-white px-4 py-1 rounded-lg'>
                    next
                </button>
                <button className='border px-4 py-1 rounded-lg' onClick={() => {
                    if (page <= 1) {
                        setPage(1)
                    } else {                        
                        setPage(page - 1)
                    }
                }}>
                    perv
                </button>
            </div>
        </div>
    );
}

export default Section;
