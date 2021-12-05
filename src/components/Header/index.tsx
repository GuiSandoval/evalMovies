import { Container, ContentHeader } from './styles'

interface IProps {
    onOpenModalNewFilm: () => void;
}

export function Header({ onOpenModalNewFilm }: IProps) {

    return (
        <Container>
            <ContentHeader>
                <h1>EvalMovies</h1>
                <button type="button" onClick={onOpenModalNewFilm}>Adicionar Novo Filme</button>


            </ContentHeader>
        </Container>
    )
};