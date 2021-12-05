import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 300px;
width: 100%;
max-width: 200px;
background: #2C394B;
padding: 1rem;
margin: 10px;
border-radius: 4px;
cursor: pointer;
transition: transform 0.4s, border-color 0.4s;
border: 1px solid transparent;


&:hover{
    transform: scale(1.05);
    border-color: var(--primary-color);
}

img{
    width: 100%;
    max-width: 80px;
}

h3{
    color:#fff
}

`;