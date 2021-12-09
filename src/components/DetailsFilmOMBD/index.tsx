import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'

export function DetailsFilmOMBD() {
    const {idFilm: idFilmParam}= useParams()
    const [idFilm, setIdFilm] = useState(idFilmParam)
    
    return (
        <Container>
            <h1>Olá Mundo</h1>
            {idFilm}
        </Container>
    )
}
