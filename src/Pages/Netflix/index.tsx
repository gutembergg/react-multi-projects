import React, { useState, useEffect } from 'react'
import TMBD from '../../services/NetflixServices/TMBD'
import FeaturedMovies from './FeaturedMovies'
import Header from './Header'
import Loader from './Loader'
import MoviesList from './MoviesList'

import { Container, SectionMovieList, Footer } from './styles'

const Netflix: React.FC = () => {
  const [moviesList, setMoviesList] = useState<any[]>([])
  const [featuredMovies, setFeaturesMovies] = useState<unknown | null>(null)
  const [headerBlack, setHeaderBlack] = useState(false)

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
    }
    getMoviesData()
  }, [])

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY > 6) {
        setHeaderBlack(true)
        console.log('scrollY: ', window.scrollY)
      } else {
        setHeaderBlack(false)
      }
    }

    window.addEventListener('scroll', scrollHeader)

    return () => window.removeEventListener('scroll', scrollHeader)
  }, [])

  return (
    <Container>
      <Header black={headerBlack} />
      {featuredMovies && <FeaturedMovies item={featuredMovies} />}
      <SectionMovieList>
        {moviesList.map((item, key) => (
          <MoviesList key={key} title={item.title} items={item.items} />
        ))}
      </SectionMovieList>
      <Footer>
        <div>
          Fait par Gutembergue Mascarenhas{' '}
          <span role="img" aria-label="macaco">
            🙉
          </span>{' '}
        </div>
        <div>Imagens Netflix TMDB api</div>
        <div>Juin 2021</div>
      </Footer>
      {moviesList.length <= 0 && <Loader />}
    </Container>
  )
}

export default Netflix
