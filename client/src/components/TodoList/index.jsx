import React, { useEffect } from 'react'
import { Container, InnerContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'

import { getAll, tasks } from '../../features/tarefas/tarefaSlice'
import { isAddingTask } from '../../features/card/cardStateSlice'


import { Todo } from '../Todo'

export const TodoList = () => {

    const dispatch = useDispatch()

    const tarefas = useSelector(tasks)
    const isAdding = useSelector(isAddingTask)

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <Container>
            <InnerContainer hide={isAdding}>
                {
                    tarefas && tarefas.map(task => (
                        <Todo task={task} key={task._id}/>
                    ))
                }
            </InnerContainer>
        </Container>
    )
}
