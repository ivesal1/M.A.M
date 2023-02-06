import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey, baseUrl } from '../api/api';
import Section1 from '../components/person/Section1';
import Section2 from '../components/person/Section2';

const Person = () => {
    const { id } = useParams()
    const [credit, setCredit] = useState('')
    const [movies ,setMovies] = useState([])

    async function getCredit() {
        const { data } = await axios.get(`${baseUrl}person/${id}${apiKey}`)
        setCredit(data)
        console.log(data);
    }
    async function getCreditMovie() {
        const { data } = await axios.get(`${baseUrl}/person/${id}/movie_credits${apiKey}`)
        setMovies(data.cast)
        console.log(data);
    }

    useEffect(() => {
        getCredit()
        getCreditMovie()
    },[id])
    return (
        <div>
            <section>
                <Section1 des={credit.biography} profile={credit.profile_path} />
            </section>
            <section>
                <Section2 arr={movies} />
            </section>
        </div>
    );
}

export default Person;
