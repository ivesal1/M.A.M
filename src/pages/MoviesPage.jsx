import Section1 from "../components/Movies/Section1"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { apiKey, baseUrl } from "../api/api"
import ReactLoading from 'react-loading';
import Section2 from "../components/Movies/Section2"

export default function MoviesPage() {
  const [movieDetails, setMovieDetails] = useState({})
  const [loading , setLoading] = useState(false)
  const [trailer , setTrailer] = useState([])
  const {id} = useParams()
  
  async function getMoviesPage() {
    const { data } = await axios.get(`${baseUrl}movie/${id}${apiKey}`);
    setMovieDetails(data);
    setLoading(true)
    console.log(data);
  }
  async function getTrialer() {
    const { data } = await axios.get(`${baseUrl}movie/${id}/videos${apiKey}`);
    setTrailer(data.results)
    console.log(data.results);
  }
  useEffect(() => {
    getMoviesPage();
    getTrialer();
    console.log(movieDetails);
  }, [loading])

  return (
    <div>
      {loading ? 
          <Section1 src={movieDetails.backdrop_path} title={movieDetails.original_title} des={movieDetails.overview} tag={movieDetails.tagline} />
        : <ReactLoading className="mt-20 mx-auto" type="spokes" color="#000" />
      }
      <Section2 arr={trailer} TrailerSrc={movieDetails.backdrop_path} />
    </div>
  )
}

