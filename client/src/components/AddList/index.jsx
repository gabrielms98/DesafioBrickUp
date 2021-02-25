import React,  { useState } from 'react'
import { Container, 
    InnerContainer,
    ButtonAdd, 
    FormContainer, 
    InputFile, 
    InputLabel, 
    Svg, 
    InputName,
    InputNameLabel,
    ButtonSubmit
} from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { addTask as createTask } from '../../features/tarefas/tarefaSlice'
import { add, isAddingTask } from '../../features/card/cardStateSlice'

import Trash from '../../assets/trash.svg'

export const AddList = () => {

    const dispatch = useDispatch()
    const isAdding = useSelector(isAddingTask)

    const [image, setImage] = useState(null)
    const [imgSrc, setImgSrc] = useState(null)
    const [nome, setNome] = useState("Nome")

    const addTask = () => {
        dispatch(add())
    }

    const deleteImage = (e) => {
        e.preventDefault()
        setImage(null)
        setImgSrc(null)
    }

    const sendTask = () => {
        if (!imgSrc || !nome) return

        dispatch(createTask({ nome, image: imgSrc, concluido: false }))
    }

    const saveImage = (event) => {
        const { target } = event;

        if (target) {
            const { files } = target

            if (files && files.length) {
                const [file] = files;

                if (file.type.split('/')[0] === 'image') {
                    const url = window.URL.createObjectURL(file)
                    setImage(url)
                    setImgSrc(file)
                } 
            }
        }
    }

    return (
        <Container fullWidth={isAdding}>
            <InnerContainer fullWidth={isAdding}>
                <ButtonAdd onClick={addTask}>
                    {isAdding ? 'Fechar' : 'Adicionar tarefa'}
                </ButtonAdd>
                <FormContainer hide={!isAdding}>
                    <InputLabel htmlFor="image-input" image={image}>
                        <Svg src={Trash} image={image} onClick={(e) => deleteImage(e)}></Svg>
                        Inserir imagem
                    </InputLabel>
                    <InputFile type="file" id="image-input" onChange={(event) => saveImage(event)}/>
                    <InputNameLabel htmlFor="input-name">
                        <InputName type="text" id="input-name" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </InputNameLabel>
                    <ButtonSubmit onClick={() => sendTask()}>
                        Criar tarefa
                    </ButtonSubmit>
                </FormContainer>
            </InnerContainer>
        </Container>
    )
}