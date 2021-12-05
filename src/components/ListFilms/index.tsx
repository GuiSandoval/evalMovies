import { useEffect, useState } from "react"
import { apiOMDB } from "../../services/api"
import { FilmPreview } from "../FilmPreview"
import { Container } from "./styles"

interface IFilms {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export const ListFilms = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [films, setFilms] = useState<IFilms[]>([])

    function getFilms() {
        apiOMDB.get("", {
            params: {
                s: 'star wars',
            }
        }).then(response => {
            setFilms(response.data.Search)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getFilms()
    }, [])


    return (
        <Container>
            {!isLoading && films.map(film => {
                return (
                    <FilmPreview
                        key={film.imdbID}
                        poster={film.Poster}
                        title={film.Title}
                        type={film.Type}
                        year={film.Year}
                        imdbID={film.imdbID} />

                )
            })}
        </Container>
    )
}