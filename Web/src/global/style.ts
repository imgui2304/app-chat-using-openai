import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    textarea{
        outline:none;
        border:none;
        color: inherit;
    }
    p,span,h1{
        color:inherit;
    }
    button{
        outline:none;
        border:none;
        background:none;
    }
    
    
`;
