import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    padding: 4rem 0 0;

    input {
        width: 100%;
        margin: 0 0 1rem 0;
        padding: 1rem;
    }
`;
export const AreaFilms = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    /* padding: 4rem 0 0; */
`;