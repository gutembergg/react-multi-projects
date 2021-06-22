import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
