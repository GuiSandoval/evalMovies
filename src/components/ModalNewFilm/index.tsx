import { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../ModalContext'
import { api } from '../../services/api'
import { RatingStars } from '../RatingStars'
import { Container } from './styles'

interface IProps {
    isOpen: boolean,
    isHandleClose: () => void,
}


export const ModalNewFilm = ({ isOpen, isHandleClose }: IProps) => {
    const { filmContext } = useContext(ModalContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')
    const [evaluation, setEvaluation] = useState(0)
    const [descriptionEvaluation, setDescriptionEvaluation] = useState('')

    function resetStates() {
        setTitle('')
        setDescription('')
        setAuthor('')
        setYear('')
        setEvaluation(0)
        setDescriptionEvaluation('')
    }

    function updateStars(value: number) {
        setEvaluation(value)
    }
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const dataPost = {
            name: title,
            director: "",
            cast: "",
            year: Number(year),
            gender: "",
            evaluation: Number(evaluation),
            evaluationDescription: descriptionEvaluation
        }

        api.post('/films', dataPost).finally(()=>{
            resetStates()
        })
    }

    useEffect(() => {
        if (filmContext) {
            setTitle(filmContext.title)
            setDescription(filmContext.description)
            setAuthor(filmContext.author)
            setYear(filmContext.year)
        }
    }, [filmContext])

    useEffect(() => {
        if(!isOpen){
            resetStates()
        }
    },[isOpen])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={isHandleClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleSubmit}>
                <h2> Avaliar Filme</h2>

                <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="Titulo do filme" />
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} placeholder="Descriçao do filme" />
                <input type="text" value={author} onChange={event => setAuthor(event.target.value)} placeholder="Autor" />
                <input type="text" value={year} onChange={event => setYear(event.target.value)} placeholder="Ano do filme" />
                {/* <input type="text" value={evaluation} onChange={event => setEvaluation(event.target.value)} placeholder="Nota do filme" /> */}
                <RatingStars onStarUpdate={updateStars} />
                <textarea value={descriptionEvaluation} onChange={event => setDescriptionEvaluation(event.target.value)} placeholder="Avaliação do filme" />



                <button type="submit">Enviar</button>

            </Container>
        </Modal>
    )
}