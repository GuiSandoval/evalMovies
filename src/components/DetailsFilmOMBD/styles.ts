import styled from 'styled-components';

export const Container = styled.div`
`;

export const InfoFilm = styled.div`
display: flex;
flex-direction: revert;
justify-content: space-between;
align-items: flex-start;
padding: 48px 0 0 0;
.wrapper-film{
    padding: 0 1rem;
    .title {
        /* font-size: 1.5rem; */
        color: #fff;
    }
    
    .info-film{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #a1a1a1;
        
        > *{
            margin-right: 1rem;
        }
        
    }
    
    .description-film {
        color: #fff;
        margin: 10px 0;
        font-size: 1rem;
        line-height: 1.6em;
    }
}
    `;