import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiKey, baseImgUrl, baseUrl } from '../../api/api';
import SearchResult from './SearchResult';

const SearchBar = () => {
    const [search, setSearch] = useState();
    const [searchRes, setSearchRes] = useState()
    const [showSearch ,setShowSearch] = useState(false)
    
    useEffect(() => {
        const timeOut = setTimeout(async () => {
            if (search) {                
                const { data } = await axios.get(`${baseUrl}search/multi${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`);
                setSearchRes(data.results);
                console.log(data);
            }
        }, 1000);
        return () => clearTimeout(timeOut)
    },[search])

    return (
        <div>
            <div className='relative z-50'>
                <input onClick={()=> setShowSearch(true)} style={{ paddingTop: 3 }} className='border px-3 flex justify-center items-center rounded-lg' placeholder='search' type='text' onChange={(e) => {
                    setSearch(e.target.value)
                }} />
                <div style={{ backgroundColor: '#171717' }} className={`absolute h-32 overflow-y-scroll text-white rounded-b-lg rounded-t mt-1 ${searchRes && 'w-full'} ${!search && 'w-0'}`}>
                    {
                    searchRes && searchRes.map((item) => {
                        return (
                            <>
                                <NavLink to={item.media_type == 'person' ? `/person/${item.id}` : `/movies/${item.id}`
                                }>
                                    <button className='py-1 px-2'>
                                        {item.original_title}
                                        {item.name}
                                        </button>
                                        <div className='flex justify-center p-1'>
                                            <div style={{ height: 1 }} className='w-3/4 opacity-70 bg-white'></div>
                                    </div>
                                </NavLink>
                            </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
