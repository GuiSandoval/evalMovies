import { Container, ContentHeader } from './styles'
import {Link} from 'react-router-dom'

interface IProps {
    onOpenModalNewFilm: () => void;
}

export function Header({ onOpenModalNewFilm }: IProps) {

    return (
        <Container>
            <ContentHeader>
                <h1>EvalMovies</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/lista-filmes">Filmes</Link>
                </div>
                <button type="button" onClick={onOpenModalNewFilm}>Adicionar Novo Filme</button>


            </ContentHeader>
        </Container>
    )
};