import styled from 'styled-components';

export const Container = styled.button`
    margin: 0;
    border: 0;
    background: linear-gradient(to bottom, #FF4C29,#bd2f14);
    color: #1E1917;
    font-weight: 500;
    height: 2rem;
    padding: .4rem;
    text-transform: uppercase;
    border-radius: 4px;
    transition: filter .4s;

    &:hover{
        filter: brightness(1.2);
    } 
`;