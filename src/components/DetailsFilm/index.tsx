/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export function DetailsFilm() {
    const {idFilm: idFilmParam}= useParams()

    const [idFilm, setIdFilm] = useState<string | undefined>("")

    useEffect(() => {
        console.log('idFilm')
        console.log(idFilm)
        setIdFilm(idFilmParam)
    }, [idFilmParam])
    
    return (
        <div>
            <h1>Olá Mundo</h1>     
            {idFilm}
        </div>
    )
}
