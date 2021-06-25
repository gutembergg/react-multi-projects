import styled, { css } from 'styled-components'

interface Props {
  black: boolean
}

export const Container = styled.div<Props>`
  position: fixed;
  width: 100%;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props =>
    props.black
      ? '#141414'
      : css`
          background: transparent;
        `};
  transition: all ease 0.4s;

  height: 70px;
`
export const Logo = styled.div`
  margin-left: 15px;
  > img {
    width: 80px;
  }
`

export const LogoUser = styled.div`
  margin-right: 15px;
`
