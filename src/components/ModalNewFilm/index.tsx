import Modal from 'react-modal'
import { Container } from './styles'

interface IProps {
    isOpen: boolean,
    isHandleClose: () => void,
}


export const ModalNewFilm = ({ isOpen, isHandleClose }: IProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={isHandleClose}>
            <Container>
                <h2> Avalie um Filme</h2>

                <input type="text" placeholder="Titulo do filme" />
                <input type="text" placeholder="Descriçao do filme" />
                <input type="text" placeholder="Autor" />
                <input type="text" placeholder="Ano do filme" />
                <input type="text" placeholder="Nota do filme" />
                <input type="text" placeholder="Avaliação do filme" />



                <button type="submit">Enviar</button>
                
            </Container>
        </Modal>
    )
}