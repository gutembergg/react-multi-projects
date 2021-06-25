import styled from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Container = styled.div`
  margin-bottom: 30px;

  > h2 {
    color: var(--netflix-textWhite);
    margin-left: 30px;
    margin-bottom: 20px;
  }

  > div.iconsArrowLeft {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    cursor: pointer;
  }

  > div.iconsArrowRight {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    cursor: pointer;
  }
`

export const SectionMovies = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`

export const CategorySection = styled.div`
  transition: all ease 0.5s;
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

export const IconArrowLeft = styled(MdKeyboardArrowLeft)`
  position: absolute;
  color: #fff;
  font-size: 50px;
`

export const IconArrowRigth = styled(MdKeyboardArrowRight)`
  position: absolute;
  color: #fff;
  font-size: 50px;
`
