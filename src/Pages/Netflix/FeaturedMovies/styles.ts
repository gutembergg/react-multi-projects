import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  color: var(--netflix-textWhite);
`

export const GradientBottom = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const GradientVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 30px;
  padding-bottom: 80px;
  padding-top: 70px;
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);

  > h1 {
    font-size: 50px;
    font-weight: 700;
  }

  @media (max-width: 760px) {
    padding-left: 20px;
    > h1 {
      font-size: 35px;
      font-weight: 700;
    }
  }
`
export const FeaturesInfo = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 18px;
  font-weight: 500;

  > div + div {
    margin-left: 10px;
  }

  > * {
    &:first-child {
      color: #46d369;
    }
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`

export const FeaturesDescription = styled.div`
  max-width: 40%;
  margin-top: 15px;

  font-size: 17px;
  color: #999;

  @media (max-width: 760px) {
    max-width: 100%;
    margin-right: 30px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  > button {
    display: flex;
    align-items: center;
    margin-right: 8px;
    background-color: #fff;
    color: #111;

    font-size: 20px;
    font-weight: 500;
    padding: 12px 25px;

    border-radius: 5px;
    border: none;

    opacity: 1;
    transition: all ease 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  > button + button {
    margin-left: 10px;
    background-color: #333;
    color: #fff;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;

    max-width: 70%;
    > button + button {
      margin-left: 0px;
      margin-top: 10px;
    }
  }
`
export const Genres = styled.div`
  margin-top: 15px;
  font-style: 18px;
  color: #999;
`
