import React from 'react'
import { Container, Img, TextContainer, Status } from './styles'

import { updateTask } from '../../features/tarefas/tarefaSlice'
import { useDispatch } from 'react-redux'

export const Todo = ({task}) => {

    const dispatch = useDispatch()

    const markTask = () => {
        let newTask = JSON.parse(JSON.stringify(task))
        newTask.concluido = !newTask.concluido
        dispatch(updateTask(newTask))
    }

    return (
        <Container>
            <Img src={task.image}/>
            <TextContainer>
                <div>{task.nome}</div>
                <div>{new Date().toLocaleDateString()}</div>
            </TextContainer>
            <Status status={task.concluido} onClick={() => markTask()}/>
        </Container>
    )
}