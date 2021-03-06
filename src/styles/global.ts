import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #082032;

    --primary-color: #FF4C29
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

body, input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}


h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0,0,0,0.8);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.react-modal-content{
width: 100%;
max-width: 600px;
background: #082032;
padding: 3rem;
position: relative;
border-radius: 4px;
overflow-y: auto;
max-height: 90vh;
}


`;

export const ContentLayout = styled.main`
    width:100%;
    max-width: 1100px;
    margin: 0 auto;

`

