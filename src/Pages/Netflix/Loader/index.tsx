import React from 'react'

import Loader from 'react-loader-spinner'

import { Container } from './styles'

const LoaderComponent: React.FC = () => {
  return (
    <Container>
      <Loader type="Circles" color="#fa0202" height={80} width={80} />
    </Container>
  )
}

export default LoaderComponent
