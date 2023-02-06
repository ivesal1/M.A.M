import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { apiKey, baseUrl } from '../api/api';
import Section1 from '../components/Profile/Section1';
import Section2 from '../components/Profile/Section2';
import 'swiper/css'
import { signInContext } from '../context/UserContext';
import Section3 from '../components/Profile/Section3';


const Profile = () => {
    const [accout, setAccout] = useState({})
    const [list, setList] = useState([])
    const [rated, setRated] = useState([])

    async function getAcount() {
        const { data } = await axios.get(`${baseUrl}account${apiKey}&session_id=${localStorage.getItem('session_id')}`)
        setAccout(data)
    }
    async function getList() {
        const { data } = await axios.get(`${baseUrl}account/${accout.id}/favorite/movies${apiKey}&session_id=${localStorage.getItem('session_id')}&language=en-US&sort_by=created_at.asc&page=1`)
        setList(data.results)
    }
    async function getRated() {
        const { data } = await axios.get(`${baseUrl}account/${accout.id}/rated/movies${apiKey}&language=en-US&session_id=${localStorage.getItem('session_id')}&sort_by=created_at.asc&page=1`)
        setRated(data.results)
    }

    useEffect(() => {
        getAcount()
        getList()
        getRated()
    }, [localStorage.getItem('session_id')])

    return (
        <div className='container mx-auto text-6xl font-bold'>
            <section>
                <Section1 name={accout.name} user={accout.username} avatar={accout} />
            </section>
            <section>
                <Section2 arr={list} src={list.backdrop_path} title={list.original_title } />
            </section>
            <section>
                <Section3 arr={rated} />
            </section>
            <div>
        </div>
    </div>
    );
}

export default Profile;
