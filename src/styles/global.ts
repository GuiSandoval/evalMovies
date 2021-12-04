import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #232c31;
}

*{
    margin: 0;
    padding: 0;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%; // 15px
    }
    @media(max-width: 720px){
        font-size: 87.5%; // 14px
    }
}

body{
    background: var(--background);
    --webkit-font-smooting: antialiased;
}

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}


`;

