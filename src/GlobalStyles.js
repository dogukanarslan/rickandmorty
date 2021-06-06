import styled, { createGlobalStyle } from 'styled-components';

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

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const Col = styled.div`
  padding: 0 15px;
  flex: ${({ size }) => size};
  text-align: ${({ textAlign }) => textAlign};
`;
