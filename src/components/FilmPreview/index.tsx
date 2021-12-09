import { Link } from "react-router-dom";
import { IFilmPreviewProps } from "../../interfaces/Film";
import { Container } from "./styles";



export const FilmPreview = ({
    poster,
    title,
    type,
    year,
    imdbID
}: IFilmPreviewProps) => {
    return (
        <Container>
            <Link to={`/avaliar/${imdbID}`}>
                <img src={poster} alt={title} />
                <h3>{title}</h3>
                <p>{year}</p>
                <p>{type}</p>
            </Link>
        </Container>
    );
}