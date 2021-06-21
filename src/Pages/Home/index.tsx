import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Header, Buttons } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Buttons>
          <button>
            <Link to="/netflix">Netiflix</Link>
          </button>
        </Buttons>
      </Header>
    </Container>
  )
}

export default Home
