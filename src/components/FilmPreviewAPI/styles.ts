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
margin: 0 10px 10px 0;
border-radius: 4px;
cursor: pointer;
transition: transform 0.4s, border-color 0.4s;
border: 1px solid transparent;

a{
    padding: 1rem;
    width: 100%;
    height: 100%;
}

&:hover{
    transform: scale(1.05);
    border-color: var(--primary-color);
}

img{
    width: 100%;
    max-width: 80px;
}

h3{
    color:#fff;
    height: 50px;
    /* font-size: 1.4rem; */
}

.info-film{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
        
    p{
        color: #d3d3d3;
        font-size: .8rem;

        & +p{
            margin-left: 6px;
        }
    }

}

.evaluation-description-film{
    color: #d3d3d3;
    margin-top: -10px;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
}

`;