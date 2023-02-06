import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiKey, baseUrl } from '../api/api'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'

export default function Home() {
  const [top, setTop] = useState([])
  
  async function getLatest() {
    const { data } = await axios.get(`${baseUrl}movie/top_rated${apiKey}`)
    setTop(data.results)
  }

  useEffect(() => {
    getLatest()
  },[])

  return (
    <>
      <section>
          <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
    </>
  )
}
