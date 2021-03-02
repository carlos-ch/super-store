import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    
    // Import normalize.css
    ${normalize}
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-rendering: optimizeLegibility;
        background-color: antiquewhite;
    }
    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
    }
    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        margin-bottom: 3rem;
    }
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    li {
        list-style: none;
    }
`;

export default GlobalStyle;
