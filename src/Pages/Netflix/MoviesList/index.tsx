import React from 'react'
import { ItemsMovies } from '../../../services/NetflixServices/TMBD'

import { Container, SectionMovies, CategorySection, MoviesRow } from './styles'

interface Props {
  title: string
  items: ItemsMovies
}

const MoviesList: React.FC<Props> = ({ title, items }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <SectionMovies>
        <CategorySection>
          {items.results &&
            items.results.map((item, key) => (
              <MoviesRow key={key}>
                <img
                  src={
                    item.poster_path &&
                    `https://image.tmdb.org/t/p/w300/${item.poster_path}`
                  }
                  alt={item.original_title}
                />
              </MoviesRow>
            ))}
        </CategorySection>
      </SectionMovies>
    </Container>
  )
}

export default MoviesList
