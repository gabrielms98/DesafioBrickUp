import { createSlice } from '@reduxjs/toolkit'
import { getAllTarefas, createTask, updateTaskBack } from '../../Api'

export const tarefaSlice = createSlice({
    name: 'tarefa',
    initialState: {
        tasks: []
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        push: (state, action) => {
            console.log(action)
            state.tasks = [...state.tasks, action.payload]
        }
    }
})

export const { update, setTasks, push } = tarefaSlice.actions

export const getAll = () => async dispatch => {
    const response = await getAllTarefas()
    dispatch(setTasks(response.data))
}

export const addTask = task => async dispatch => {

    const response = await createTask(task)
    if (!response.error) {
        return dispatch(push(response.data))
    } else {
        return response.error
    }
}

export const updateTask = task => async dispatch => {
    const response = await updateTaskBack(task)
    if (!response.error) {
        dispatch(getAll())
    }
}

export const tasks = state => state.tarefa.tasks

export default tarefaSlice.reducer