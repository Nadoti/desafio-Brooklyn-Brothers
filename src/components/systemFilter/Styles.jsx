import styled from "styled-components"


export const BoxInfoLeft = styled.div`
  border-right: 2px solid var(--black-1000);
  text-align: center;
  background: var(--grey-200);

  @media (max-width: 900px) {
    border: none;
  }
`

export const BoxSearchProducts = styled.div`
  border-bottom: 2px solid var(--black-1000);
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
    background: var(--grey-700);
    border-left: 4px solid var(--grey-200);
    border-right: 4px solid var(--grey-200);
  }
`

export const ProductsList = styled.li`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: var(--grey-500);
  }

  &.ativo {
    background: var(--grey-500);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background: var(--grey-600);
    }
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }

`