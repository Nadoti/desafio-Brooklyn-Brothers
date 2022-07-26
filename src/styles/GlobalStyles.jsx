import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    width: 400px;

    @media (max-width: 900px) {
      width: 300px;
    }

    @media (max-width: 600px) {
      width: 200px;
    }

  }

  li {
    list-style: none;
  }
`