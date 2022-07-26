import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const BoxMain = styled.main`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-radius: 10px;
  box-shadow: 4px 4px 40px 10px rgba(0,0,0,0.2);
  margin: 0 30px;


  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-left: 0;
    margin-right: 0;
  }
`









