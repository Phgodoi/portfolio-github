import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Georgia, sans-serif;
    }

    body {
        overflow-x: hidden;
        background-color: #f2f2f2;
    }

    html {
        scroll-behavior: smooth;
      }
      
`;
