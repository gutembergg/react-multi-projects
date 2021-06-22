import React from 'react'

import { MdPlayArrow, MdAdd } from 'react-icons/md'

import {
  Container,
  GradientBottom,
  GradientVertical,
  FeaturesInfo,
  FeaturesDescription,
  Buttons,
  Genres
} from './styles'

interface Props {
  item: any
}

const FeaturedMovies: React.FC<Props> = ({ item }) => {
  const date = new Date(item.first_air_date)

  const genres = []

  for (const i in item.genres) {
    genres.push(item.genres[i].name)
  }

  console.log('genres: ', genres)

  return (
    <Container
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <GradientBottom>
        <GradientVertical>
          <h1>{item.original_name}</h1>

          <FeaturesInfo>
            <div>{item.vote_average} points</div>
            <div>{date.getFullYear()}</div>
            <div>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </FeaturesInfo>

          <FeaturesDescription>{item.overview}</FeaturesDescription>

          <Buttons>
            <button>
              <MdPlayArrow />
              <span>Regarder</span>
            </button>
            <button>
              <MdAdd />
              <span> Ma Liste</span>
            </button>
          </Buttons>

          <Genres>Genres: {genres.join(', ')}</Genres>
        </GradientVertical>
      </GradientBottom>
    </Container>
  )
}

export default FeaturedMovies
