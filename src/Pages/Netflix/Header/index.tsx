import React from 'react'

import { FcCircuit } from 'react-icons/fc'

import { Container, Logo, LogoUser } from './styles'

import LogoNetflix from '../assets/logoNetflix.png'

interface Props {
  black: boolean
}

const Header: React.FC<Props> = ({ black }) => {
  return (
    <Container black={black}>
      <Logo>
        <img src={LogoNetflix} alt="netflixLogo" />
      </Logo>
      <LogoUser>
        <FcCircuit size={25} />
      </LogoUser>
    </Container>
  )
}

export default Header
