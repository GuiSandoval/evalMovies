import Modal from 'react-modal'

interface IProps {
    isOpen: boolean,
    isHandleClose: () => void,
}


export const ModalNewFilm = ({ isOpen, isHandleClose }: IProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={isHandleClose}>
            <h2> Avalie um Filme</h2>
        </Modal>
    )
}