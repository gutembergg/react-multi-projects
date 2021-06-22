import React, { useState, useEffect } from 'react'
import TMBD, { Movies } from '../../services/NetflixServices/TMBD'
import FeaturedMovies from './FeaturedMovies'
import MoviesList from './MoviesList'

import { Container, SectionMovieList } from './styles'

const Netflix: React.FC = () => {
  const [moviesList, setMoviesList] = useState<any[]>([])
  const [featuredMovies, setFeaturesMovies] = useState<unknown | null>(null)

  useEffect(() => {
    const getMoviesData = async () => {
      const data = await TMBD.getHomeList()
      setMoviesList(data)

      const originals = data.filter(movie => movie.slug === 'originals')
      const ramdomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      const chosemMovie = originals[0].items.results[ramdomMovie]

      const mainMovie = await TMBD.getInfoMovies(chosemMovie.id, 'tv')

      setFeaturesMovies(mainMovie)

      console.log('originals: ', mainMovie)
    }
    getMoviesData()
  }, [])

  return (
    <Container>
      {featuredMovies && <FeaturedMovies item={featuredMovies} />}

      <SectionMovieList>
        {moviesList.map((item, key) => (
          <MoviesList key={key} title={item.title} items={item.items} />
        ))}
      </SectionMovieList>
    </Container>
  )
}

export default Netflix
