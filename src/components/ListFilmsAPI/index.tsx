import React from 'react'
import { FilmPreviewAPI } from '../FilmPreviewAPI'
import { Container } from './styles'

export function ListFilmsAPI() {
    const fixedArray = [
        {
            id: "53759fe5-d40e-4561-9e5c-4daa493a62a2",
            name: "Teste 2",
            director: "Guilherme Sandoval",
            year: 2021,
            cast: "{\"Guilherme Sandoval\"}",
            gender: "action",
            evaluation: 5,
            evaluationDescription: "Filme muito bom com o elenco maravilhoso",
            createdAt: "2021-12-08T09:01:16.550Z"
        }
    ]

    return (
        <Container>
            {fixedArray.map(singleFilm =>
                <FilmPreviewAPI
                    name={singleFilm.name}
                    evaluation={singleFilm.evaluation}
                    id={singleFilm.id}
                    evaluationDescription={singleFilm.evaluationDescription}
                    year={singleFilm.year}
                />
            )}
        </Container>
    )
}
