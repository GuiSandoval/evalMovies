import styled from 'styled-components';

export const Container = styled.div`
`;

export const InfoFilm = styled.div`
display: flex;
flex-direction: revert;
justify-content: space-between;
align-items: flex-start;
margin: 48px 0 0 0;
padding: 1rem 2rem;
position: relative;
background: #334756;
border-radius: 4px;

.trash-icon{
    position: absolute;
    top: 1rem;
    right: 2rem;
    background: none;
    outline: none;
    border: none;
    transition: filter .4s;

    :hover{
        filter: brightness(1.2);
    }
}

.wrapper-film{
    /* padding: 0 1rem; */
    .title {
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