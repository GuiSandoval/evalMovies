import React, { useEffect, useState } from 'react'
import { IFilmPreviewAPI } from '../../interfaces/Film'
import { api } from '../../services/api'
import { FilmPreviewAPI } from '../FilmPreviewAPI'
import { Container } from './styles'

export function ListFilmsAPI() {
    const [filmsApi, setFilmsApi] = useState<IFilmPreviewAPI[]>([])

    useEffect(() => {
        api.get('/films').then(response => {
            setFilmsApi(response.data)
        })
    }, [])

    return (
        <Container>
            {filmsApi.map(singleFilm =>
                <FilmPreviewAPI
                    key={singleFilm.id}
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
