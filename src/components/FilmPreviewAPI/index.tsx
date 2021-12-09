import React from 'react'
import { Link } from 'react-router-dom';
import { IFilmPreviewAPI } from '../../interfaces/Film';
import { RatingStars } from '../RatingStars';
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
        <Container>
            <Link to={`detalhes/${id}`}>
                <h3>{name}</h3>

                <div className="info-film">
                    <p>{year}</p>
                    <p>{director}</p>
                </div>

                <RatingStars ratingSelected={evaluation} onStarUpdate={()=>{}}/>
                <p className="evaluation-description-film">{evaluationDescription}</p>
            </Link>
        </Container>
    );
}
