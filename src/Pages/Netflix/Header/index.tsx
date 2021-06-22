import React from 'react'

import { FcCircuit } from 'react-icons/fc'

import { Container, Logo, LogoUser } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflixLogo"
        />
      </Logo>
      <LogoUser>
        <FcCircuit size={25} />
      </LogoUser>
    </Container>
  )
}

export default Header
