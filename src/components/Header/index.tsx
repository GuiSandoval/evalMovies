import { Container, ContentHeader } from './styles'

export function Header() {
    return (
        <Container>
            <ContentHeader>
                <h1>EvalMovies</h1>
                <button type="button">Adicionar Novo Filme</button>
            </ContentHeader>
        </Container>
    )
};