import { createGlobalStyle } from 'styled-components';

// Colors
export const dark = '#222';
export const orange = '#fd7e14';
export const gray = '#495057';
export const light = '#efeae1';
export const black = '#000';

export const GlobalStyle = createGlobalStyle`
  html * {
    font-family: 'Quicksand', sans-serif;
  }

  body {
    background-color: #343233;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
