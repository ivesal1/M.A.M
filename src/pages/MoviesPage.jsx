import Section1 from "../components/Movies/Section1"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { apiKey, baseUrl } from "../api/api"
import ReactLoading from 'react-loading';
import Section2 from "../components/Movies/Section2"
import { toast } from "react-hot-toast"
import Section3 from "../components/Movies/Section3"

export default function MoviesPage() {
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(false)
  const [trailer, setTrailer] = useState([])
  const [img, setImg] = useState([])
  const [cast, setCast] = useState([])
  const { id } = useParams()
  
  async function getMoviesPage() {
    const { data } = await axios.get(`${baseUrl}movie/${id}${apiKey}`);
    setMovieDetails(data);
    setLoading(true)
    console.log(data);
  }
  async function getTrialer() {
    const { data } = await axios.get(`${baseUrl}movie/${id}/videos${apiKey}`);
    setTrailer(data.results)
  }
  async function getImg() {
    const { data } = await axios.get(`${baseUrl}movie/${id}/images${apiKey}`)
    setImg(data.posters)
    console.log(data);
  }

  async function addFav() {
    try {
      await axios.post(`${baseUrl}account/${localStorage.getItem('account_id')}/favorite${apiKey}&session_id=${localStorage.getItem('session_id')}`, {
        "media_type": "movie",
        "media_id": id,
        "favorite": true
      }).then(res => res.data.success && toast.success('successfuly added'))
    } catch (err) {
      toast.error('You must be loged in first')
    }
  }
  async function getCredits() {
    const { data } = await axios.get(`${baseUrl}movie/${id}/credits${apiKey}&language=en-US`)
    console.log(data.cast);
    setCast(data.cast)
  }
  async function rate() {
    try {
      await axios.post(`${baseUrl}movie/${id}/rating${apiKey}&session_id=${localStorage.getItem('session_id')}`, {
        "value": 10
      }).then(res=> res.data.success == true && toast.success('successfuly rated'))
    } catch (err) {
      toast.error('you must loged in first')
    }
  }

  useEffect(() => {
    getMoviesPage();
    getTrialer();
    getImg();
    getCredits();
  }, [loading, id])



  return (
    <div>
      {loading ? 
        <Section1 isAdult={movieDetails.adult} src={movieDetails.backdrop_path} title={movieDetails.original_title} des={movieDetails.overview} tag={movieDetails.tagline} rate={movieDetails.vote_average} addFav={() => addFav()} addRate={ ()=> rate()} />
        : <ReactLoading className="mt-20 mx-auto" type="spokes" color="#000" />
      }
      <Section2 arr={trailer} TrailerSrc={movieDetails.backdrop_path} des={movieDetails.overview} arr2={img} />
      <Section3 arr={cast} />
    </div>
  )
}

