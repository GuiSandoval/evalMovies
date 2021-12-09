/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { FaTrash } from 'react-icons/fa'

import { IFilmPreviewAPI } from '../../interfaces/Film'

import { api } from '../../services/api'

import { RatingStars } from '../RatingStars'

import { Container, InfoFilm } from './styles'

export function DetailsFilm() {
    const { idFilm: idFilmParam } = useParams()
    const navigate = useNavigate();

    const [idFilm, setIdFilm] = useState<string | undefined>("")
    const [film, setFilm] = useState<IFilmPreviewAPI | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    function getFilm() {
        api.get(`films/${idFilmParam}`, {
            params: {
                i: idFilm,
                plot: "full",
            }
        }).then(response => {
            setFilm(response.data)
            setIsLoading(false)
        })
    }
    function handleDeleteFilm() {
        api.delete(`films/${idFilmParam}`).then(() => {
            navigate("/")
        })
    }

    useEffect(() => {
        getFilm()
    }, [])
    useEffect(() => {
        setIdFilm(idFilmParam)
    }, [idFilmParam])

    return (
        <Container>
            {isLoading ? 'Carregando' : (
                <InfoFilm>

                    <button className="trash-icon" onClick={handleDeleteFilm}>
                        <FaTrash size={25} color={"#FF5A30"} />
                    </button>
                    {/* <img src={film?.Poster} alt="" /> */}
                    <div className="wrapper-film">

                        <h1 className="title">{film?.name}</h1>
                        <div className="info-film">
                            <p>{film?.year}</p>
                            <p>{film?.director}</p>
                        </div>
                        <RatingStars ratingSelected={film?.evaluation} onStarUpdate={() => { }} />
                        <p className="description-film">{film?.evaluationDescription}</p>
                    </div>
                </InfoFilm>
            )}
        </Container>
    )
}
