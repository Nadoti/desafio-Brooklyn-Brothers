import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;

  label {
    position: absolute;
    font-size: 18px;
    color: var(--grey-600);
    top: 12px;
    left: 16px;
    pointer-events: none;
    transition: .3s;
  }
`


export const InputStyle = styled.input`
  width: 100%;
  display: block;
  padding: 5px;
  padding-left: 16px;
  padding-top: 16px;
  border-radius: 8px;
  outline: none;
  font-size: 18px;
  border: 1px solid var(--grey-600);
  transition: .3s;

  &:hover, &:focus {
    border: 1px solid var(--secondary);
  }

  &:focus+label {
    top: 5px;
    font-size: 12px;
    color: var(--secondary);
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown)&:not(:focus) + label {
    font-size: 12px;
    top: 5px;
    color: var(--secondary);
  }

`