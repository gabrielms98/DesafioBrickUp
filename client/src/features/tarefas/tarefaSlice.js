import { createSlice } from '@reduxjs/toolkit'
import { getAllTarefas, createTask } from '../../Api'

export const tarefaSlice = createSlice({
    name: 'tarefa',
    initialState: {
        tasks: []
    },
    reducers: {
        add: state => {
            createTask()
                .then(res => console.log(res))
        },
        update: (state, action) => {
            console.log(action)
            // udpateTask(action.payload)
            //     .then(res => console.log(res))
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        }
    }
})

export const { update, setTasks } = tarefaSlice.actions

export const getAll = () => async dispatch => {
    const response = await getAllTarefas()
    dispatch(setTasks(response.data))
}

export const addTask = (task) => async dispatch => {
    const response = await createTask(task)
    if (response.error) {

    } else {
        dispatch(setTasks())
    }
}

export const tasks = state => state.tarefa.tasks

export default tarefaSlice.reducer