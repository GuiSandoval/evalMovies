import React from 'react'
import { Container } from './styles'

interface IFilmPreviewAPIProps {
    id: string;
    name: string;
    director?: string;
    year: number;
    cast?: string;
    gender?: string;
    evaluation: number;
    evaluationDescription: string;
    createdAt?: string;
};


export const FilmPreviewAPI = ({
    id,
    name,
    director,
    year,
    cast,
    gender,
    evaluation,
    evaluationDescription,
    createdAt
}: IFilmPreviewAPIProps) => {
    return (
        <Container>
            {/* <img src={poster} alt={title} /> */}
            <h3>{name}</h3>
            <p>{year}</p>
            <p>{evaluation}</p>
            <p>{evaluationDescription}</p>
        </Container>
    );
}
