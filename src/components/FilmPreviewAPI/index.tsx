import React from 'react'
import { Link } from 'react-router-dom';
import { IFilmPreviewAPI } from '../../interfaces/Film';
import { Container } from './styles'


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
}: IFilmPreviewAPI) => {
    return (
        <Link to={`detalhes/${id}`}>
        <Container>
            {/* <img src={poster} alt={title} /> */}
            <h3>{name}</h3>
            <p>{year}</p>
            <p>{evaluation}</p>
            <p>{evaluationDescription}</p>
        </Container>
        </Link>
    );
}
