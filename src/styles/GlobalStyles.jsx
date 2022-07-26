import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --black-1000: #000;

    --grey-750: #524E4E;
    --grey-700: #5B5959;
    --grey-600: #7C7C7C;
    --grey-550: #A4A0A0;
    --grey-500: #A7A1A1;
    --grey-200: #E7E7E7;

    --secondary: #FA4D56;

    --primary: #00F2B1;
  }

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