import styled from 'styled-components'

export const Container = styled.div`
  background: var(--netflix-primary);
`

export const SectionMovieList = styled.div`
  margin-top: -100px;

  @media (max-width: 760px) {
    height: 80vh;
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  color: var(--netflix-textWhite);
`
