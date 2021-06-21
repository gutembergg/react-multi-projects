import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;

  > h2 {
    color: var(--textWhite);
    margin-left: 30px;
  }
`

export const SectionMovies = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`

export const CategorySection = styled.div`
  width: 20000px;
`

export const MoviesRow = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;

  > img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`
