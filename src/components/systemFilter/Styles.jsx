import styled from "styled-components"


export const BoxInfoLeft = styled.div`
  border-right: 2px solid #000;
  text-align: center;
  background: #E7E7E7;

  @media (max-width: 900px) {
    border: none;
  }
`

export const BoxSearchProducts = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;

  @media (max-width: 900px) {
    border: none;
  }
`

export const BoxListProducts = styled.ul`
  padding: 10px 0;
  overflow-y: scroll;
  height: 410px;

  @media (max-width: 900px) {
    height: 350px;
  }

  @media (max-width: 600px) {
    height: 200px;
    padding: 0;
  }

  

  &::-webkit-scrollbar {
    width: 18px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5B5959;
    border-left: 4px solid #E7E7E7;
    border-right: 4px solid #E7E7E7;
  }
`

export const ProductsList = styled.li`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #A7A1A1;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

`