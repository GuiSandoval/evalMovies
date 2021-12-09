import styled from 'styled-components';

export const Container = styled.header`
    background: #2C394B;
    padding: .4rem 0;
    `;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem ;

    h1 {
        color: #fff;
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
