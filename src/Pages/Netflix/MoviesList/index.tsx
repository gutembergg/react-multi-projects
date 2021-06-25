import React, { useCallback, useState } from 'react'
import { ItemsMovies } from '../../../services/NetflixServices/TMBD'

import {
  Container,
  SectionMovies,
  CategorySection,
  MoviesRow,
  IconArrowLeft,
  IconArrowRigth
} from './styles'

interface Props {
  title: string
  items: ItemsMovies
}

const MoviesList: React.FC<Props> = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0)

  const handleScrollLeft = useCallback(() => {
    let x = scrollX + Math.round(window.innerWidth / 2)

    if (x > 0) {
      x = 0
    }

    setScrollX(x)
  }, [scrollX])

  const handleCcrollRight = useCallback(() => {
    console.log('scroll__')
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listWidth = items.results.length * 150

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60
    }
    setScrollX(x)
  }, [items.results.length, scrollX])

  return (
    <Container>
      <h2>{title}</h2>
      <div className="iconsArrowLeft">
        <IconArrowLeft onClick={handleScrollLeft} />
      </div>
      <div className="iconsArrowRight">
        <IconArrowRigth onClick={handleCcrollRight} />
      </div>

      <SectionMovies>
        <CategorySection
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
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
