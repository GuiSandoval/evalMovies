import {Link} from 'react-router-dom'
import { Container, ContentHeader, AreaRoutes } from './styles'

interface IProps {
    onOpenModalNewFilm: () => void;
}

export function Header({ onOpenModalNewFilm }: IProps) {

    return (
        <Container>
            <ContentHeader>
                <h1>EvalMovies</h1>
                <AreaRoutes>
                    <Link to="/">Home</Link>
                    <Link to="/lista-filmes">Filmes</Link>
                </AreaRoutes>
                <button type="button" onClick={onOpenModalNewFilm}>Adicionar Novo Filme</button>


            </ContentHeader>
        </Container>
    )
};