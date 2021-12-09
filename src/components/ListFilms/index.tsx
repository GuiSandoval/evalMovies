/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { apiOMDB } from "../../services/api"
import { FilmPreview } from "../FilmPreview"
import { AreaFilms, Container } from "./styles"

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
    const [searchText, setSearchText] = useState("")

    function getFilms() {
        apiOMDB.get("", {
            params: {
                s: searchText,
            }
        }).then(response => {
            setFilms(response.data.Search)
            setIsLoading(false)
        })
    }

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setSearchText(text)
    }

    function handleEnterKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {

            getFilms();
        }
    }

    useEffect(() => {
        getFilms()
    }, [])


    return (
        <Container>
            <input
                type="text"
                onChange={handleSearch}
                onKeyPress={handleEnterKeyPress}
                placeholder="Procure um filme" />
            <AreaFilms>

                {!isLoading && films?.map(film => {
                    return (
                        <FilmPreview
                            key={`${film.imdbID}-${film.Title}`}
                            poster={film.Poster}
                            title={film.Title}
                            type={film.Type}
                            year={film.Year}
                            imdbID={film.imdbID} />

                    )
                })}
            </AreaFilms>
        </Container>
    )
}