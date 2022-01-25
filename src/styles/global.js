import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.pinkSoft}; 
    }

    p, button, b, strong, input, time {
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;