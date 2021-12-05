import { Container } from "./styles";

interface IFilmPreviewProps {
    poster: string;
    title: string;
    type: string;
    year: string;
    imdbID: string;

};

export const FilmPreview = ({
    poster,
    title,
    type,
    year,
    imdbID
}: IFilmPreviewProps) => {
    return (
        <Container>
            <img src={poster} alt={title} />
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{type}</p>
        </Container>
    );
}