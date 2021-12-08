import styled from 'styled-components';

export const Container = styled.header`
    background: #2C394B;
    padding: .4rem 0;
    `;

export const ContentHeader = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem ;

    h1 {
        color: #fff;
    }

    button {
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
        
    }
`;

export const AreaRoutes = styled.nav`
a {
    color: #fff;
    text-decoration: none;

    &:hover {
        color: var(--primary-color);
    }
    
}
a + a {
    margin-left: 10px;
}
`
