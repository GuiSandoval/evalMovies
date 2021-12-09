/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiOMDB } from '../../services/api'
import { Container, InfoFilm } from './styles'

export function DetailsFilmOMBD() {
    const { idFilm: idFilmParam } = useParams()
    const [idFilm] = useState(idFilmParam)

    const [isLoading, setIsLoading] = useState(true)
    const [film, setFilm] = useState<any>({})

    function getFilm() {
        apiOMDB.get("", {
            params: {
                i: idFilm,
                plot: "full",
            }
        }).then(response => {
            setFilm(response.data)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getFilm()
    }, [])


    return (
        <Container>
            {isLoading ? (<h1>Carregando...</h1>) : (
                <>
                    <InfoFilm>
                        <img src={film?.Poster} alt="" />
                        <div className="wrapper-film">

                            <h1 className="title">{film?.Title}</h1>
                            <div className="info-film">
                                <p>{film?.Year}</p>
                                <p>{film?.Writer}</p>
                                <p>{film?.Runtime}</p>
                            </div>
                            <p className="description-film">{film?.Plot}</p>
                        </div>
                    </InfoFilm>
                    
                </>
            )}
        </Container>
    )
}
