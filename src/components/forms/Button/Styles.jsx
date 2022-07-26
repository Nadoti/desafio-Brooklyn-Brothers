import styled from "styled-components";


export const ButtonStyle = styled.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--primary);
  font-size: 18px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: brightness(0.8);
  }
`