import styled from "styled-components"

export const BoxInfoRight = styled.div`
  text-align: center;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 25px;
  font-family: Roboto;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }

  
`

export const Category = styled.p`
  font-size: 22px;
  font-family: Roboto;
  color: var(--grey-750);
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

  
`

export const Description = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: var(--grey-550);

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  
`