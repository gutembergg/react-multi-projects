import React, { useState, useEffect } from 'react'
import TMBD, { Movies } from '../../services/NetflixServices/TMBD'
import FeaturedMovies from './FeaturedMovies'
import MoviesList from './MoviesList'

import { Container, SectionMovieList } from './styles'

const Netflix: React.FC = () => {
  const [moviesList, setMoviesList] = useState<any[]>([])
  const [featuredMovies, setFeaturesMovies] = useState(null)

  useEffect(() => {
    const getMoviesData = async () => {
      const data = await TMBD.getHomeList()
      setMoviesList(data)

      const originals = moviesList.filter(movie => movie.slug === 'originals')
      console.log('originals: ', originals)
    }
    getMoviesData()
  }, [])

  return (
    <Container>
      {featuredMovies && <FeaturedMovies />}

      <SectionMovieList>
        {moviesList.map((item, key) => (
          <MoviesList key={key} title={item.title} items={item.items} />
        ))}
      </SectionMovieList>
    </Container>
  )
}

export default Netflix
