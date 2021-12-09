import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ModalContext } from '../../ModalContext'
import { Button } from '../Button'
import { Container, ContentHeader, AreaRoutes } from './styles'

export function Header() {
    const {handleToggleModal, setFilmContext} = useContext(ModalContext)

    function handleButtonModal(){
        handleToggleModal()
        setFilmContext({})
    }
    
    
    return (
        <Container>
            <ContentHeader>
                <h1>EvalMovies</h1>
                <AreaRoutes>
                    <Link to="/">Home</Link>
                    <Link to="/lista-filmes">Filmes</Link>
                </AreaRoutes>
                <Button type="button" onClick={handleButtonModal}>Adicionar Novo Filme</Button>


            </ContentHeader>
        </Container>
    )
};