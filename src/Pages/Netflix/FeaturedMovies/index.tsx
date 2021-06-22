import React, { useState } from 'react'

import {
  Container,
  GradientBottom,
  GradientVertical,
  FeaturesInfo,
  FeaturesDescription,
  Buttons
} from './styles'

interface Props {
  item: any
}

const FeaturedMovies: React.FC<Props> = ({ item }) => {
  const date = new Date(item.first_air_date)

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

          <Buttons></Buttons>

          <span>Genre...</span>
        </GradientVertical>
      </GradientBottom>
    </Container>
  )
}

export default FeaturedMovies
