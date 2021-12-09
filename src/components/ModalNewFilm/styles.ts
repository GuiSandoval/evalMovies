import styled from "styled-components"

export const Container = styled.form`
    h2{
        color: #0a5caa;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }


    input, textarea {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 4px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        outline: none;

        & + input,
        & + textarea {
            margin-top: 1rem
        }
    }

    textarea{
        height: 6rem;
    }

    button[type="submit"] {
        width: 100%;
        padding: .5rem;
        height: 3rem;
        background-color: var(--primary-color);
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter .4s;

        &:hover{
            filter: brightness(1.2);
        }
    }
`;