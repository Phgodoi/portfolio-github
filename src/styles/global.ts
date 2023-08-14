import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Georgia, 'san-serif' ;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
`;
