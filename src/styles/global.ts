import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
        background: linear-gradient(#c31432, #240b36);
    };

    *, button, input, text-area {
        font-family: 'Ubuntu', sans-serif;
    }
`;