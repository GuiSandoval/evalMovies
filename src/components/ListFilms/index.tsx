import { useEffect, useState } from "react"
import { apiOMDB } from "../../services/api"
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
    
    function getFilms(){
        apiOMDB.get("",{params: {
            s:'star wars',
        }}).then(response => {
            setFilms(response.data.Search)
            setIsLoading(false)
        })
    }
    
    useEffect(() => {
        getFilms()
    }, [])
    
    
    return (
        <Container>
            <h1>Olá Mundo</h1>
            {!isLoading && films.map(film =>{
                return (
                    <div key={film.imdbID}>
                        <img src={film.Poster} alt={film.Title}/>
                        <h3>{film.Title}</h3>
                        <p>{film.Year}</p>
                    </div>
                )
            })}
        </Container>
    )
}